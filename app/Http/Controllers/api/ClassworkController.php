<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_Questions;
use App\Models\tbl_Submission;
use App\Models\tbl_userclass;
use App\Models\tbl_comment;
use App\Models\tbl_main_gradeCategory;
use App\Models\tbl_teacher_course;
use App\Models\tbl_subjective_rubrics;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;



class ClassworkController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        //$userId = 1;

        
        $userId = auth('sanctum')->id();
        if(auth('sanctum')->user()->role != 'Student'){
            $CheckCourse = tbl_teacher_course::where('tbl_teacher_courses.course_id',$id)
            ->where('tbl_teacher_courses.user_id',   $userId)
            ->first();

            if(!$CheckCourse ){
                return response()->json([
                    "message" => "Access Denied!",
                    "success" => false
                ]); 
            }

            $classwork = tbl_classwork::whereNull('tbl_classworks.deleted_at')
            ->where('tbl_classworks.course_id',  $id)
            ->select('tbl_classworks.id', 'tbl_classworks.course_id','tbl_classworks.module_id','tbl_classworks.type',
            'tbl_classworks.title','tbl_classworks.instruction','tbl_classworks.duration','tbl_classworks.points','tbl_classworks.created_at')
            ->selectRaw('count(tbl_submissions.classwork_id ) as submittion_count')
            ->leftJoin('tbl_submissions', 'tbl_submissions.classwork_id', '=','tbl_classworks.id')
            ->orderBy('created_at', 'DESC')
            ->groupBy('tbl_classworks.id','tbl_classworks.course_id','tbl_classworks.module_id','tbl_classworks.type',
            'tbl_classworks.title','tbl_classworks.duration','tbl_classworks.points','tbl_classworks.created_at')
            ->where('tbl_classworks.user_id',  $userId)
            ->get();

         

            $ClassworksListObjective = array();
            $ClassworksListSubjective = array();
            $classworkList = array();
            foreach($classwork as $item){
                $submissionCount = tbl_Submission::where('tbl_submissions.classwork_id', $item->id)
                ->where('tbl_submissions.status', 'Submitted')->count();
                $item->submittion_count =  $submissionCount;

                if($item->type == 'Objective Type'){
                    $ClassworksListObjective[] = $item;
                }
                else{
                    $ClassworksListSubjective[] = $item;
                }
            }
           
            $classworkList = [ 0 =>$ClassworksListObjective, 1 => $ClassworksListSubjective];
            return $classworkList;
        }
        else{
        $CheckClass = tbl_userclass::where('tbl_userclasses.course_id',$id)
        ->where('tbl_userclasses.user_id',  $userId)
        ->first();
        if(!$CheckClass ){
            return response()->json([
                "message" => "Access Denied!",
                "success" => false
            ]); 
        }

        $GradingCategory = tbl_main_gradeCategory::where('tbl_main_grade_categories.course_id', $id)->get();
        $ClassworksList = array();
        $ClassworkTitle = array();

        foreach($GradingCategory as $item){
            $classworkAll = tbl_classClassworks::whereNull('tbl_class_classworks.deleted_at')
            ->where('tbl_userclasses.course_id','=', $id)
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.points'
            ,'tbl_classworks.instruction')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
            ->leftJoin('tbl_userclasses', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
            ->where('tbl_userclasses.user_id','=', $userId)
            ->orderBy('created_at', 'DESC')
            ->where('tbl_class_classworks.grading_criteria', $item->id)
            ->get();
            $CheckSub = tbl_Submission::where("tbl_submissions.user_id",$userId)
            ->orderBy('classwork_id', 'DESC')
            ->get();
   
            if(count($CheckSub) == 0){
                foreach($classworkAll as $classW){
                    $classW->status = null;
                    $classW->score = null;
                    $classW->graded = 0;
                    $classW->Sub_date = null;
                }
                
            }
            else{
                foreach($CheckSub as $subM){
                    foreach($classworkAll as $classW){
                        if($subM->classwork_id == $classW->classwork_id){
                            if($subM->status == ''){
                                $classW->status = null;
                                $classW->Sub_date = null;
                            }
                            else{
                                $classW->status = $subM->status;
                                $classW->score = $subM->points;
                                $classW->graded = $subM->graded;
                                $classW->Sub_date = $subM->updated_at;
                            }
                        }
                        else{
                            if($classW->status == null){
                                $classW->status = null;
                                $classW->score = null;
                                $classW->graded = $subM->graded;
                                $classW->Sub_date = null;
                            }
                        }
                       
                    }
                }

            }
            $ClassworkTitle[] = ['title'=>$item->name, 'percent'=>$item->percentage];
            $ClassworksList[] = $classworkAll;
        }
            return ["ClassworkTitle"=>$ClassworkTitle, "ClassworksList"=>$ClassworksList];

        }
        
    }

   
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
       
        $userId = auth('sanctum')->id();
        $newClasswork = new tbl_classwork;
        $newClasswork->course_id = $request->course_id;
        $newClasswork->module_id = 1;
        $newClasswork->user_id = $userId;
        $newClasswork->type =  $request->type;
        $newClasswork->title =  $request->title;
        $newClasswork->instruction =  $request->instruction;
        $files = $request->file;
        if($files != null && $files != ''){
            $counter = 0;
            $attachments = array();
            $tmpdata;
            foreach($files as $file){
               /*  $newFile = $file->store('public/upload/classworkAttachments/'.$request->course_id.'/'.$newClasswork->id.'/'.$userId);
                $tmpdata = ['name'=> $request->attachment_name[$counter], 'size'=> $request->attachment_size[$counter],
                'attachment'=> preg_replace('/\bpublic\/\b/', '', $newFile), 'extension'=> $request->attachment_extension[$counter]];
                array_push($attachments, $tmpdata); */
                $upload_file = Storage::disk('DO_spaces')->putFile('classworkAttachments/'.$newClasswork->id.'/'.$userId, $file, 'public');
                $path = \Config::get('app.do_url').'/'. $upload_file;
                $tmpdata = ['name'=> $request->attachment_name[$counter], 'size'=> $request->attachment_size[$counter],
                'attachment'=> $path, 'extension'=> $request->attachment_extension[$counter]];
                array_push($attachments, $tmpdata);
                $counter++;
            }
            $newClasswork->attachment = serialize($attachments);
        }
        $newClasswork->duration =  $request->duration;
        $newClasswork->points =  $request->points;
        $newClasswork->save();
        return $newClasswork;
    }

    /**
     * Display the specified resource.
     *
     *  @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function ShareClasswork(Request $request)
    {

        $userId = auth('sanctum')->id();
        $Check = tbl_classClassworks::where('class_id','=', $request->get('class_id'))
        ->where('classwork_id','=',$request->get('classwork_id'))
        ->exists();

        if($Check){
            $Unshare = tbl_classClassworks::where('class_id','=', $request->get('class_id'))
            ->where('classwork_id','=',$request->get('classwork_id'))
            ->delete();
            return "Unshare";
        }

        $shareClasswork = new tbl_classClassworks;
        $shareClasswork->class_id = $request->get('class_id');
        $shareClasswork->classwork_id = $request->get('classwork_id');
        $shareClasswork->availability =  $request->get('availability') == 'Set Date' ? 1 : 0;
        $shareClasswork->from_date = $request->get('from_date');
        $shareClasswork->to_date = $request->get('to_date');
        $shareClasswork->showAnswer =  $request->get('showAnswer') == 'true' ? 1 : 0;
        if($request->get('showAnswer') == 'true'){
            $shareClasswork->showAnswerType = $request->get('showAnswerType') == 'Set Date' ? 1 : 0;
            $shareClasswork->showDateFrom = $request->get('showAnswerType') == 'Set Date' ? $request->get('showAnswerDateFrom') : '';
            $shareClasswork->showDateTo = $request->get('showAnswerType') == 'Set Date' ? $request->get('showAnswerDateTo') : '';
        }
        //$request->get('showAnswer') == 'true' ? $shareClasswork->showDate = $request->get('showAnswerDate') : '';
        $shareClasswork->response_late = $request->get('response_late') == 'true'  ? 1 : 0;
        $shareClasswork->grading_criteria = $request->get('grading_id');
        $shareClasswork->save();
        return $shareClasswork;
  
    }

    /**
     * Display the specified resource.
     *
     *  @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function UnshareClasswork(Request $request)
    {
        $userId = auth('sanctum')->id();
        $Check = tbl_classClassworks::where('class_id','=', $request->class_id)
        ->where('classwork_id','=',$request->id)
        ->first();

        if($Check){
            $Check->delete();
            return 'Unpublish Success!';
        }
        return 'Classwork not found!';
    }

    /**
     * Display the specified resource.
     *
      * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function PublishClassworkDetails($id)
    {
        //$Check = tbl_classClassworks::where('id', $id)
        $PublishDetails = tbl_classClassworks::find($id);
        if($PublishDetails){
            return  $PublishDetails;
        }
        
        return 'Classwork not found!';
    }

    /**
     * Display the specified resource.
     *  @param  \Illuminate\Http\Request  $request
      * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function UpdatePublishClassworkDetails(Request $request,$id)
    {
        //return $request;
        $UpdatePublishDetails = tbl_classClassworks::find($id);
        if($UpdatePublishDetails){
            $UpdatePublishDetails->availability = $request->availability == 'Set Date' ? 1: 0;
            $UpdatePublishDetails->from_date = $request->availability == 'Set Date' ? $request->from_date : '';
            $UpdatePublishDetails->to_date = $request->availability == 'Set Date' ? $request->to_date : '';
            $UpdatePublishDetails->showAnswer =  $request->showAnswer == true ? 1 : 0;
            if($request->showAnswer == true){
                $UpdatePublishDetails->showAnswerType = $request->showAnswerType == 'Set Date' ? 1 : 0;
                $UpdatePublishDetails->showDateFrom = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateFrom : '';
                $UpdatePublishDetails->showDateTo = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateTo : '';
            }
            $UpdatePublishDetails->response_late = $request->response_late == true ? 1 : 0;
            $UpdatePublishDetails->grading_criteria = $request->grading_criteria;
            $UpdatePublishDetails->save();
            //return $UpdatePublishDetails;
            return 'Publish details Updated!';
        }   
        
        return 'Classwork not found!';
    }





    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, $courseId)
    {
        $userId = auth('sanctum')->id();

        $classworkDetails;
        if(auth('sanctum')->user()->role != 'Student'){
            $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->where('tbl_classworks.user_id', $userId)
            ->first();
      
            $classworkDetails->attachment = $classworkDetails->attachment != null ? unserialize($classworkDetails->attachment) : [];



            if(!$classworkDetails){
                return response()->json([
                    "message" => "Classwork not found!",
                    "success" => false
                ]);
            }
        }
        else{
            $class_id = tbl_userclass::where('tbl_userclasses.user_id', $userId)
            ->select('tbl_userclasses.class_id')
            ->where('tbl_userclasses.course_id', $courseId)
            ->first();

            $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->select('tbl_classworks.*', 'tbl_class_classworks.id as class_classwork_id',
            'tbl_class_classworks.availability','tbl_class_classworks.from_date','tbl_class_classworks.to_date','tbl_class_classworks.showAnswer',
            'tbl_class_classworks.showAnswerType','tbl_class_classworks.showDateFrom','tbl_class_classworks.showDateTo',
            'tbl_class_classworks.response_late',
            'tbl_userclasses.user_id')
            ->leftJoin('tbl_class_classworks', 'tbl_class_classworks.classwork_id','=','tbl_classworks.id')
            ->leftJoin('tbl_userclasses', 'tbl_userclasses.user_id','=', 'tbl_classworks.user_id')
            ->where('tbl_class_classworks.class_id', $class_id->class_id)
            ->first();

            if(!$classworkDetails){
                return response()->json([
                    "message" => "Classwork not found!",
                    "success" => false
                ]);
            }
            $classworkDetails->attachment = $classworkDetails->attachment != null ? unserialize($classworkDetails->attachment) : null;
            $teacher_id = tbl_teacher_course::where('course_id', $courseId)->first();
            $PrivateComment = tbl_comment::where("tbl_comments.classwork_id",  $classworkDetails ->id)
            ->select("tbl_comments.id","tbl_comments.user_id as u_id","tbl_comments.content",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic")
            ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
            ->where('tbl_comments.from_user',  $userId)
            ->Where('tbl_comments.to_user',$teacher_id->user_id )
            ->where('tbl_comments.type', 'Private')
            ->orderBy("tbl_comments.created_at", "ASC")
            ->get();
            $classworkDetails->comments =  $PrivateComment;


        }
        if($classworkDetails->type == 'Objective Type'){
            $Items = tbl_Questions::where('classwork_id','=', $id)
            ->select('tbl_questions.points')
            ->get();
            $count = 0;
            $points = 0;
            foreach($Items as $i){
                $count++;
                $points+= $i->points;
            }
            return response()->json([
                "Details"=>$classworkDetails,
                "ItemsCount"=>$count,
                'totalpoints'=>$points,
                "success" => true
            ]);
        }
        else if($classworkDetails->type == 'Subjective Type'){
            $rubrics = tbl_subjective_rubrics::where('tbl_subjective_rubrics.classwork_id', $classworkDetails->id)->get();
            $classworkDetails->rubrics = $rubrics;
            return response()->json([
                'Details'=>$classworkDetails,
                "success" => true
            ]);
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {   
        $userId = auth('sanctum')->id();
        $UpdateClasswork = tbl_classwork::find($request->id);
        if(!$UpdateClasswork){
            return "Classwork not found";
        }

        if($UpdateClasswork->type != "Objective Type"){
            if($request->type == "Objective Type"){
                $tmpPoint = 0;
                $points = tbl_Questions::where('classwork_id',   $UpdateClasswork->id)->get();
                if(count($points) != 0){
                    foreach($points as $item){
                        $tmpPoint += $item->points;
                    }
                    $UpdateClasswork->points = $tmpPoint;
                }
                $UpdateClasswork->points = 0;
                
            }
            else{
                $UpdateClasswork->points = 0;
            }
        }
        else{
            $UpdateClasswork->points  = $request->points;
        }
        $UpdateClasswork->type =  $request->type;
        $UpdateClasswork->points = $request->type == "Objective Type" ? $UpdateClasswork->points : $request->points;
        $UpdateClasswork->title =  $request->title;
        $UpdateClasswork->instruction =  $request->instruction;
        $UpdateClasswork->duration =  $request->type == "Objective Type" ? $request->duration : null;
        $UpdateClasswork->save();
        return $UpdateClasswork;
      
        

      
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $userId = auth('sanctum')->id();
        $DelCLasswork = tbl_classwork::find($id);
        if($DelCLasswork){
            if($DelCLasswork->type == "Objective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->leftJoin('tbl_questions', 'tbl_questions.classwork_id','=','tbl_class_classworks.classwork_id')
                ->LeftJoin('tbl_choices', 'tbl_choices.question_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_sub_questions', 'tbl_sub_questions.mainQuestion_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_question_analytics', 'tbl_question_analytics.question_id','=', 'tbl_questions.id')
                ->forceDelete();
            }
            elseif($DelCLasswork->type == "Subjective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->delete();
                Storage::delete('public/'.$DelCLasswork->attachment);

            }
            $DelCLasswork->forceDelete();
            return "Successfully Remove";
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function archiveClasswork($id)
    {
        $userId = auth('sanctum')->id();
        $DelCLasswork = tbl_classwork::find($id);
        if($DelCLasswork){

            $class_classwork = tbl_classClassworks::where('classwork_id', $DelCLasswork->id)->delete();
            $DelCLasswork->delete();


           /*  if($DelCLasswork->type == "Objective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->leftJoin('tbl_questions', 'tbl_questions.classwork_id','=','tbl_class_classworks.classwork_id')
                ->LeftJoin('tbl_choices', 'tbl_choices.question_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_sub_questions', 'tbl_sub_questions.mainQuestion_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_question_analytics', 'tbl_question_analytics.question_id','=', 'tbl_questions.id')
                ->delete();
            }
            elseif($DelCLasswork->type == "Subjective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->delete();
                Storage::delete('public/'.$DelCLasswork->attachment);

            }
            $DelCLasswork->delete();
            return "Successfully Remove"; */
        }
    }


    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function RemoveAttachment(Request $request , $id){
     
        $UpdateClasswork = tbl_classwork::find($id);
        if(!$UpdateClasswork ){
            return response()->json([
                "message" => "File not found!",
                "success" => false
            ]);
        }
        $data = unserialize($UpdateClasswork->attachment);
        $counter = 0;
        foreach($data as $item){
            if($request->attachment == $item['attachment']){

                $path =  str_replace(\Config::get('app.do_url').'/', "", $item['attachment']);
                Storage::disk('DO_spaces')->delete($path);

               /*  Storage::delete('public/'.$item['attachment']);
                array_splice($data, $counter,1); */
            }
            $counter++;
        }
        $UpdateClasswork->attachment = count($data) != 0 ? serialize($data) : null;
        $UpdateClasswork->save();
        return response()->json([
            "message" => "File successfully remove",
            "success" => true
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     public function AddAttachment(Request $request){
       
        $userId = auth('sanctum')->id();
        $UpdateClasswork = tbl_classwork::find($request->id);
        if(!$UpdateClasswork){
            return response()->json([
                "message" => "File not found!",
                "success" => false
            ]);
        }
        $data = $UpdateClasswork->attachment != null ? unserialize($UpdateClasswork->attachment) : array();
        $file = $request->file;
        if($file != null){
            $counter = 0;
            $tmpdata;
            //$newFile = $file->store('public/upload/classworkAttachments/'.$UpdateClasswork->course_id.'/'.$UpdateClasswork->id.'/'.$userId);
            //$test = Storage::disk('DO')->putFileAs('classworkAttachments', $file);
            /*  $tmpdata = ['name'=> $request->name, 'size'=> $request->size,
            'attachment'=> preg_replace('/\bpublic\/\b/', '', $newFile), 'extension'=> $request->extension]; */

            $upload_file = Storage::disk('DO_spaces')->putFile('classworkAttachments/'.$UpdateClasswork->id.'/'.$userId, $file, 'public');
            $path = \Config::get('app.do_url').'/'. $upload_file;
            $tmpdata = ['name'=> $request->name, 'size'=> $request->size,
            'attachment'=> $path , 'extension'=> $request->extension]; 
            array_push($data, $tmpdata);
            $UpdateClasswork->attachment = serialize($data);
        }
        $UpdateClasswork->save();
        return;
     }

     public function NewAttachment(Request $request){
        if($request->type == "Announcement"){

            $file = $request->file;
            $upload_file = Storage::disk('DO_spaces')->putFile('Announcement', $file, 'public');
            $path = \Config::get('app.do_url').'/'. $upload_file;
            //return $path;
            return response()->json([
                "message" => "File Uploaded!",
                "success" => true,
                "link" => $path,
            ]);
        }
      
        /* $userId = auth('sanctum')->id();
        $UpdateClasswork = tbl_classwork::find($request->id);
        if(!$UpdateClasswork){
            return response()->json([
                "message" => "File not found!",
                "success" => false
            ]);
        }
        $data = $UpdateClasswork->attachment != null ? unserialize($UpdateClasswork->attachment) : array();
        $file = $request->file;
        if($file != null){
            $counter = 0;
            $tmpdata;
            $upload_file = Storage::disk('DO_spaces')->putFile('classworkAttachments/'.$UpdateClasswork->id.'/'.$userId, $file, 'public');
            $path = \Config::get('app.do_url').'/'. $upload_file;
            $tmpdata = ['name'=> $request->name, 'size'=> $request->size,
            'attachment'=> $path , 'extension'=> $request->extension]; 
            array_push($data, $tmpdata);
            $UpdateClasswork->attachment = serialize($data);
        }
        $UpdateClasswork->save(); */
        return;
     }


     
}
