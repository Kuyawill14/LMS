<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_classwork;
use App\Models\tbl_classClassworks;
use App\Models\tbl_Questions;
use App\Models\tbl_SubQuestion;
use App\Models\tbl_choice;
use App\Models\tbl_Submission;
use App\Models\tbl_userclass;
use App\Models\tbl_comment;
use App\Models\tbl_main_gradeCategory;
use App\Models\tbl_teacher_course;
use App\Models\tbl_subjective_rubrics;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\tbl_Submitted_Answer;
use Carbon\Carbon;



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
              /*   $submissionCount = tbl_Submission::where('tbl_submissions.classwork_id', $item->id)
                ->where('tbl_submissions.status', 'Submitted')->count();
                $item->submittion_count =  $submissionCount; */

                $publishIn = tbl_classClassworks::withTrashed()
                ->where('tbl_class_classworks.classwork_id', $item->id)
                ->select('tbl_class_classworks.id','tbl_classes.class_name','tbl_class_classworks.from_date', 'tbl_class_classworks.to_date','tbl_class_classworks.availability')
                ->leftJoin('tbl_classes', 'tbl_classes.id','=','tbl_class_classworks.class_id')
                ->get();
                //return $publishIn;
                $item->publish_in = $publishIn;
                $totalSubmission = 0;
                foreach($publishIn as $pub){
                    $submissionCount = tbl_Submission::where('tbl_submissions.class_classwork_id', $pub->id)
                    ->where('tbl_submissions.status', 'Submitted')->count();
                    $pub->submission =  $submissionCount;
                    $totalSubmission += $submissionCount;
                }
                $item->submittion_count =  $totalSubmission;
                $item->publish_in = $publishIn;
                if($item->type == 'Objective Type'){
                    $ClassworksListObjective[] = $item;
                }
                else{
                    $ClassworksListSubjective[] = $item;
                }
            }
           
            $classworkList = [ 0 => $ClassworksListObjective, 1 => $ClassworksListSubjective];
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
        $totalClasswork = 0;


        foreach($GradingCategory as $item){ 
           /*  $classworkAll = tbl_classClassworks::whereNull('tbl_class_classworks.deleted_at')
            ->where('tbl_userclasses.course_id','=', $id)
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.points'
            ,'tbl_submissions.status' ,'tbl_submissions.points as score','tbl_submissions.graded','tbl_submissions.updated_at as Sub_date'
            ,'tbl_classworks.instruction','tbl_classworks.duration','tbl_class_classworks.deleted_at as publish')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
            ->leftJoin('tbl_userclasses', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
            ->leftJoin("tbl_submissions", function($join) use ($userId){
                $join->on("tbl_submissions.classwork_id", "=", "tbl_class_classworks.classwork_id");
                $join->on('tbl_submissions.user_id','=',DB::raw("'".$userId."'"));
            })
            ->where('tbl_userclasses.user_id','=', $userId)
            ->where('tbl_class_classworks.from_date', '<=', date('Y-m-d H:i:s'))
            ->where('tbl_class_classworks.grading_criteria', $item->id)
            ->where('tbl_class_classworks.availability', '!=',2)
            ->orderBy('created_at', 'DESC')
            ->get();
 */

            /* $classworkAll = tbl_classClassworks::withTrashed()
            ->where('tbl_userclasses.course_id','=', $id)
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.points'
            ,'tbl_classworks.instruction','tbl_classworks.duration','tbl_class_classworks.deleted_at as publish')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
            ->leftJoin('tbl_userclasses', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
            ->where('tbl_userclasses.user_id','=', $userId)
            ->where('tbl_class_classworks.from_date', '<=', date('Y-m-d H:i:s'))
            ->where('tbl_class_classworks.grading_criteria', $item->id)
            ->where('tbl_class_classworks.availability', '!=',2)
            ->orderBy('created_at', 'DESC')
            ->get(); */
           

            $classworkAll = tbl_classClassworks::withTrashed()
            ->where('tbl_userclasses.course_id','=', $id)
            ->select('tbl_class_classworks.*', 'tbl_classworks.type', 'tbl_classworks.title', 'tbl_classworks.points'
            ,'tbl_classworks.instruction','tbl_classworks.duration','tbl_class_classworks.deleted_at as publish',
            'tbl_submissions.status','tbl_submissions.points as score','tbl_submissions.graded','tbl_submissions.updated_at as Sub_date','tbl_submissions.submitted_at')
            ->leftJoin('tbl_classworks', 'tbl_classworks.id', '=', 'tbl_class_classworks.classwork_id')
            ->leftJoin('tbl_userclasses', 'tbl_class_classworks.class_id', '=', 'tbl_userclasses.class_id')
            ->leftJoin("tbl_submissions", function($join) use ($userId){
                $join->on("tbl_submissions.classwork_id", "=", "tbl_class_classworks.classwork_id");
                $join->on('tbl_submissions.user_id','=',DB::raw("'".$userId."'"));
            })
            ->where('tbl_userclasses.user_id','=', $userId)
            ->where('tbl_class_classworks.from_date', '<=', date('Y-m-d H:i:s'))
            ->where('tbl_class_classworks.grading_criteria', $item->id)
            ->where('tbl_class_classworks.availability', '!=',2)
            ->orderBy('created_at', 'DESC')
            ->get();





            foreach($classworkAll as $clwk){
                if($clwk->type == "Objective Type"){
                    $clwk->total_questions = tbl_Questions::where('classwork_id','=', $clwk->classwork_id)->count();
                }

                /* $checkSubmission = tbl_Submission::where('tbl_submissions.classwork_id', $clwk['classwork_id'])
                ->where('tbl_submissions.user_id', $userId)->first();
                if($checkSubmission){
                    $clwk['status'] =  $checkSubmission->status;
                    $clwk['score'] =  $checkSubmission->points;
                    $clwk['graded'] =  $checkSubmission->graded;
                    $clwk['Sub_date'] =  $checkSubmission->updated_at;
                }else{
                    $clwk['status'] =  null;
                    $clwk['score'] =  null;
                    $clwk['graded'] =  null;
                    $clwk['Sub_date'] = null;
                } */
            }
            
            $totalClasswork += count($classworkAll);
            $ClassworkTitle[] = ['title'=>$item->name, 'percent'=>$item->percentage];
            $ClassworksList[] = $classworkAll;
        }
            return ["ClassworkTitle"=>$ClassworkTitle, "ClassworksList"=>$ClassworksList, 'totalClasswork'=> $totalClasswork, 'currentDate' => Carbon::now('Asia/Manila')];

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

               /*  $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', );
                $Uploadname = $original_file_name.'_'.time().'.'.;
                $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkAttachments/'.$newClasswork->id.'/'.$userId, $file, $Uploadname , 'public');
 */
                $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->attachment_name[$counter]);
                $Uploadname = $original_file_name.'_'.time().'.'.$request->attachment_extension[$counter];
                $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkAttachments'.$newClasswork->id.'/'.$userId, $file, $Uploadname ,'public');


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
        //return $request;
        $userId = auth('sanctum')->id();
        $Check = tbl_classClassworks::withTrashed()->where('class_id','=', $request->get('class_id'))
        ->where('classwork_id','=',$request->get('classwork_id'))
        ->first();
        
        if($Check){
            $Check->restore();
            $Check->availability = $request->availability== 'Set date & time' ? 1 : ($request->availability == 'Unavailable' ? 2 : 0);
            $Check->from_date = $request->from_date;
            $Check->to_date = $request->to_date;
            $Check->reviewAnswer =  $request->ReviewAnswer == true ? 1 : 0;
            $Check->showAnswer = $request->showAnswer == true ? 1 : 0;
            if($request->showAnswer == true){
                $Check->showAnswerType = $request->showAnswerType == 'Set Date' ? 1 : 0;
                $Check->showDateFrom = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateFrom : '';
                $Check->showDateTo = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateTo : '';
            }
            $Check->response_late = $request->response_late == true  ? 1 : 0;
            $Check->grading_criteria = $request->grading_id;
            $Check->save();
            return $Check;
        }

        $shareClasswork = new tbl_classClassworks;
        $shareClasswork->class_id = $request->class_id;
        $shareClasswork->classwork_id = $request->classwork_id;
        $shareClasswork->availability = $request->availability == 'Set date & time' ? 1 : ($request->availability == 'Unavailable' ? 2 : 0);
        $shareClasswork->from_date = $request->from_date;
        $shareClasswork->to_date = $request->to_date;
        $shareClasswork->reviewAnswer =  $request->ReviewAnswer == true ? 1 : 0;
        $shareClasswork->showAnswer =  $request->showAnswer == true ? 1 : 0;
       
        if($request->showAnswer == true){
            $shareClasswork->showAnswerType = $request->showAnswerType == 'Set Date' ? 1 : 0;
            $shareClasswork->showDateFrom = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateFrom : '';
            $shareClasswork->showDateTo = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateTo : '';
        }
        //$request->get('showAnswer') == 'true' ? $shareClasswork->showDate = $request->get('showAnswerDate') : '';
        $shareClasswork->response_late = $request->response_late == 'true'  ? 1 : 0;
        $shareClasswork->grading_criteria = $request->grading_id;
        $shareClasswork->save();
        return $shareClasswork;
  
    }


    /**
     * Display the specified resource.
     *
     *  @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function MultipleShareClasswork(Request $request)
    {
        //return $request;
        $userId = auth('sanctum')->id();
        $sharedClassworks = [];
        $count = 0;
        foreach($request->class_id as $item){       
          
            $Check = tbl_classClassworks::withTrashed()->where('class_id','=', $item)
            ->where('classwork_id','=',$request->get('classwork_id'))
            ->first();
            
            if($Check){
                $Check->restore();
                $Check->availability = $request->availability== 'Set date & time' ? 1 : ($request->availability == 'Unavailable' ? 2 : 0);
                $Check->from_date = $request->from_date;
                $Check->to_date = $request->to_date;
                $Check->reviewAnswer =  $request->ReviewAnswer == true ? 1 : 0;
                $Check->showAnswer = $request->showAnswer == true ? 1 : 0;
                if($request->showAnswer == true){
                    $Check->showAnswerType = $request->showAnswerType == 'Set Date' ? 1 : 0;
                    $Check->showDateFrom = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateFrom : '';
                    $Check->showDateTo = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateTo : '';
                }
                $Check->response_late = $request->response_late == true  ? 1 : 0;
                $Check->grading_criteria = $request->grading_id;
                $Check->save();
                $sharedClassworks[$count] = $Check;
            }else{
                $shareClasswork = new tbl_classClassworks;
                $shareClasswork->class_id = $item;
                $shareClasswork->classwork_id = $request->classwork_id;
                $shareClasswork->availability = $request->availability == 'Set date & time' ? 1 : ($request->availability == 'Unavailable' ? 2 : 0);
                $shareClasswork->from_date = $request->from_date;
                $shareClasswork->to_date = $request->to_date;
                $shareClasswork->reviewAnswer =  $request->ReviewAnswer == true ? 1 : 0;
                $shareClasswork->showAnswer =  $request->showAnswer == true ? 1 : 0;
            
                if($request->showAnswer == true){
                    $shareClasswork->showAnswerType = $request->showAnswerType == 'Set Date' ? 1 : 0;
                    $shareClasswork->showDateFrom = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateFrom : '';
                    $shareClasswork->showDateTo = $request->showAnswerType == 'Set Date' ? $request->showAnswerDateTo : '';
                }
                $shareClasswork->response_late = $request->response_late == 'true'  ? 1 : 0;
                $shareClasswork->grading_criteria = $request->grading_id;
                $shareClasswork->save();
                $sharedClassworks[$count] = $shareClasswork;
            }
            $count++;
        }

        return $sharedClassworks;
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
            //$UpdatePublishDetails->availability = $request->availability == 'Set Date' ? 1: 0;
            $UpdatePublishDetails->availability = $request->availability == 'Set date & time' ? 1 : ($request->availability == 'Unavailable' ? 2 : 0);
            $UpdatePublishDetails->from_date = $request->availability == 'Set date & time' ? $request->from_date : '';
            $UpdatePublishDetails->to_date = $request->availability == 'Set date & time' ? $request->to_date : '';
            $UpdatePublishDetails->reviewAnswer =  $request->reviewAnswer == true ? 1 : 0;
            $UpdatePublishDetails->showAnswer =  $request->showAnswer == true ? 1 : 0;
           
            
            if($request->showAnswer == true){
                $UpdatePublishDetails->showAnswerType = $request->showAnswerType == 'Set Date' ? 1 : 0;
                $UpdatePublishDetails->showDateFrom = $request->showAnswerType == 'Set Date' ? $request->showDateFrom : '';
                $UpdatePublishDetails->showDateTo = $request->showAnswerType == 'Set Date' ? $request->showDateTo : '';
            }
            $UpdatePublishDetails->response_late = $request->response_late == true ? 1 : 0;
            $UpdatePublishDetails->grading_criteria = $request->grading_criteria;
            $UpdatePublishDetails->save();

           
           /*  if($request->availability == 'Set date & time'){
                $checkJobs = DB::table('jobs')->get();
                if($checkJobs){
                    $count = 0;
                    foreach($checkJobs as $item){
                        $payload = json_decode( $item->payload);
                        $tempPayload =  unserialize($payload->data->command);
                        try {
                            if($tempPayload->class_id == $UpdatePublishDetails->class_id && $tempPayload->classwork_id == $UpdatePublishDetails->classwork_id){
                                DB::table('jobs')->where('id', $item->id)->update(['available_at' => Carbon::parse($request->from_date)->timestamp]);
                                $count++;
                            }
                         }
                        catch (Exception $e) {
                            continue;
                        }    

                        if($count == 2){
                            goto StopLoop;
                        }
                    }
                }
            }
            StopLoop: */
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
            $classworkDetails = tbl_classwork::where('tbl_classworks.id',$id)
            ->where('tbl_classworks.user_id', $userId)
            ->where('tbl_classworks.deleted_at', null)
            ->first();

            if(!$classworkDetails){
                return response()->json([
                    "message" => "Classwork not found!",
                    "success" => false,
                ]);
            }

            if($classworkDetails->type == "Objective Type"){
                $tmpPoint = 0;
                $totoalPoints = tbl_Questions::where('tbl_questions.classwork_id', $id)
                ->select('tbl_questions.points')->get();
                foreach($totoalPoints as $item){
                    $tmpPoint += $item['points'];
                }
                $classworkDetails->points = $tmpPoint;
                $classworkDetails->save();
            }

           
            $submitted_count = tbl_Submission::where('tbl_submissions.classwork_id', $id)->count();
            $classworkDetails->submitted_count =  $submitted_count;
            if(!$classworkDetails){
                return response()->json([
                    "message" => "Classwork not found!",
                    "success" => false
                ]);
            }
           
            $classworkDetails->attachment = $classworkDetails->attachment != null ? unserialize($classworkDetails->attachment) : [];
        }
        else{

            $fetchClass = tbl_userclass::where('course_id', $courseId)
            ->where('user_id', $userId)->first();

            if(!$fetchClass){
                return response()->json([
                    "message" => "You are not join this course!",
                    "success" => false,
                ]);
            }

        
            $checkClassworkFirst = tbl_classClassworks::where('classwork_id', $id)
            ->withTrashed()
            ->where('class_id', $fetchClass->class_id)->first();

            if(!$checkClassworkFirst){
                return response()->json([
                    "message" => "Classwork not found!",
                    "success" => false,
                ]);
            }


            $classworkDetails = tbl_userclass::where(function ($query) use ($userId , $courseId) {
                $query->where('tbl_userclasses.user_id',  $userId)
                      ->Where('tbl_userclasses.course_id', $courseId);
            })
            ->select('tbl_classworks.*', 'tbl_class_classworks.id as class_classwork_id',
            'tbl_class_classworks.availability','tbl_class_classworks.from_date','tbl_class_classworks.to_date','tbl_class_classworks.showAnswer','tbl_class_classworks.reviewAnswer',
            'tbl_class_classworks.showAnswerType','tbl_class_classworks.showDateFrom','tbl_class_classworks.showDateTo', 'tbl_class_classworks.response_late',
            'tbl_submissions.id as Sub_id','tbl_submissions.status','tbl_submissions.graded', 'tbl_submissions.points as score','tbl_submissions.Submitted_Answers', 'tbl_submissions.updated_at as Submitted_at','tbl_userclasses.user_id',
            'tbl_class_classworks.deleted_at as publish')
            ->leftJoin("tbl_classworks", function($join) use ($id){
                $join->on('tbl_classworks.id','=',DB::raw("'".$id."'"));
            })
            ->leftJoin("tbl_class_classworks", function($join){
                $join->on('tbl_class_classworks.classwork_id','=','tbl_classworks.id');
                $join->on('tbl_class_classworks.class_id','=','tbl_userclasses.class_id');
            })
            ->leftJoin("tbl_submissions", function($join) use ($userId){
                $join->on('tbl_submissions.classwork_id','=','tbl_classworks.id');
                $join->on('tbl_submissions.user_id','=',DB::raw("'".$userId."'"));
            })
            ->first();

            

           /*  $classworkDetails = tbl_classwork::where('tbl_classworks.id','=', $id)
            ->select('tbl_classworks.*', 'tbl_class_classworks.id as class_classwork_id','tbl_class_classworks.deleted_at as publish',
            'tbl_class_classworks.availability','tbl_class_classworks.from_date','tbl_class_classworks.to_date','tbl_class_classworks.showAnswer',
            'tbl_class_classworks.showAnswerType','tbl_class_classworks.showDateFrom','tbl_class_classworks.showDateTo',
            'tbl_class_classworks.response_late',
            'tbl_userclasses.user_id')
            ->leftJoin('tbl_class_classworks', 'tbl_class_classworks.classwork_id','=','tbl_classworks.id')
            ->leftJoin('tbl_userclasses', 'tbl_userclasses.user_id','=', 'tbl_classworks.user_id')
            ->where('tbl_class_classworks.class_id', $class_id->class_id)
            ->first(); */

            if(!$classworkDetails){
                return response()->json([
                    "message" => "Classwork not found!",
                    "success" => false,
                ]);
            }

            if($classworkDetails->type == 'Objective Type'){
                if($classworkDetails->reviewAnswer == 1){

                    if($classworkDetails->isNew == null){
                        $TempAnswer = unserialize($classworkDetails->Submitted_Answers);
                        $classworkDetails->Submitted_Answers = $TempAnswer;
                    }
                    else{
                        $submitted_answers = tbl_Submitted_Answer::where('classwork_id', $id)
                        ->select('answer as Answer', 'question_id as Question_id',  'type','Choices_id','isCorrect as check')
                        ->where('user_id', $userId)
                        ->get();
        
                        foreach($submitted_answers as $item){
                            if($item['type'] == 'Matching type'){
                                $item['Answer'] =  unserialize($item['Answer']);
                                $item['Choices_id'] =  unserialize($item['Choices_id']);
                            }
                        }
                        $classworkDetails->Submitted_Answers = $submitted_answers;
                    }
                }
                else{
                    $classworkDetails->Submitted_Answers = null;
                }
            }
            else{
                $TempAnswer = unserialize($classworkDetails->Submitted_Answers);
                if($TempAnswer){
                    $classworkDetails->Submitted_Answers = $TempAnswer;
                }
                else{
                    $EmptyArray = array();
                    $classworkDetails->Submitted_Answers = $EmptyArray ;
                }
                
            }


            $classworkDetails->currentDate = Carbon::now('Asia/Manila');
            $classworkDetails->attachment = $classworkDetails->attachment != null ? unserialize($classworkDetails->attachment) : null;
            $teacher_id = tbl_teacher_course::where('course_id', $courseId)->first();
            
            $PrivateComment = tbl_comment::where("tbl_comments.classwork_id",  $classworkDetails->id)
            ->select("tbl_comments.id","tbl_comments.user_id as u_id","tbl_comments.content",DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),
            "tbl_user_details.profile_pic", "tbl_comments.updated_at as comment_date")
            ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
            ->where('tbl_comments.from_user',  $userId)
            ->Where('tbl_comments.to_user',$teacher_id->user_id )
            ->where('tbl_comments.type', 'Private')
            ->orderBy("tbl_comments.created_at", "ASC")
            ->get();

            $classworkDetails->comments =  $PrivateComment;


        }


        if($classworkDetails->type == 'Objective Type'){
            $points = tbl_Questions::where('classwork_id','=', $id)->sum('tbl_questions.points');
            $count = tbl_Questions::where('classwork_id','=', $id)->count();
            return response()->json([
                "Details"=>$classworkDetails,
                "ItemsCount"=>$count,
                'totalpoints'=>$points,
                "success" => true,
                "is_Joined"=>true,
                "is_Exist" => true,
            ]);
        }
        else if($classworkDetails->type == 'Subjective Type'){
            $rubrics = tbl_subjective_rubrics::where('tbl_subjective_rubrics.classwork_id', $classworkDetails->id)->get();
            $classworkDetails->rubrics = $rubrics;
            return response()->json([
                'Details'=>$classworkDetails,
                "success" => true,
                "is_Joined"=>true,
                "is_Exist" => true,
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
            DB::beginTransaction();
            if($DelCLasswork->type == "Objective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->leftJoin('tbl_questions', 'tbl_questions.classwork_id','=','tbl_class_classworks.classwork_id')
                ->LeftJoin('tbl_choices', 'tbl_choices.question_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_sub_questions', 'tbl_sub_questions.mainQuestion_id','=', 'tbl_questions.id')
                ->LeftJoin('tbl_question_analytics', 'tbl_question_analytics.question_id','=', 'tbl_questions.id')
                ->forceDelete();

                $QuestionList =  tbl_Questions::where('tbl_questions.classwork_id', $id)->get();
                foreach($QuestionList as $item){
                    $DelAnswer = tbl_choice::where('question_id', $item['id'])->delete();
                    $DeleteSubquestion = tbl_SubQuestion::where('mainQuestion_id', $item['id'])->delete();
                    $DeleteQuestion = tbl_Questions::where('id', $item['id'])->delete();
                }

                $Del_rubrics = tbl_subjective_rubrics::where('classwork_id', $id)
                ->forceDelete();

            }
            elseif($DelCLasswork->type == "Subjective Type"){
                $DelClass_Classwork = tbl_classClassworks::where('tbl_class_classworks.classwork_id', $id)
                ->forceDelete();

                $Del_rubrics = tbl_subjective_rubrics::where('classwork_id', $id)
                ->forceDelete();
                //Storage::delete('public/'.$DelCLasswork->attachment);

            }
            $DelCLasswork->forceDelete();
            DB::commit();
            return "Successfully Remove";
        }else{
            return "Classwork not found!";
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

            return response()->json([
                'message'=> 'Classwork put in archive',
                "success" => true
            ]);


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

        return response()->json([
            'message'=> 'Classwork not found!',
            "success" => false
        ]);
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
                array_splice($data, $counter,1);
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
            $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->name);
            $Uploadname = $original_file_name.'_'.time().'.'.$request->extension;
            $upload_file = Storage::disk('DO_spaces')->putFileAs('classworkAttachments/'.$UpdateClasswork->id.'/'.$userId, $file, $Uploadname ,'public');
            
            $path = \Config::get('app.do_url').'/'. $upload_file;
            $tmpdata = ['name'=> $request->name, 'size'=> $request->size,
            'attachment'=> $path , 'extension'=> $request->extension]; 
            array_push($data, $tmpdata);
            $UpdateClasswork->attachment = serialize($data);
        }
        $UpdateClasswork->save();
        return $path;
     }

     public function NewAttachment(Request $request){
        if($request->type == "Announcement"){

            $file = $request->file;
            $upload_file = Storage::disk('DO_spaces')->putFile('announcement'.$request->course_id, $file, 'public');
            $path = \Config::get('app.do_url').'/'.$upload_file;
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

     public function DuplicateClasswork(Request $request){
        $userId = auth('sanctum')->id();
        $request->validate([
            'classwork_id' => ['required'],
            'course_id' => ['required'],
        ]);

        $CheckCourse = tbl_teacher_course::where('course_id', $request->course_id)
        ->where('user_id', $userId)->first();

        if(!$CheckCourse){
            return response()->json([
                "message" => "Course not found!",
                "success" => false,
            ]);
        }


        $checkClasswork = tbl_classwork::where('tbl_classworks.id', $request->classwork_id)
        ->where('tbl_classworks.user_id', $userId)->first();

        if(!$checkClasswork){
            return response()->json([
                "message" => "Classwork not found!",
                "success" => false,
            ]);
        }
        DB::beginTransaction();

        $DuplicateClasswork = new tbl_classwork;
        $DuplicateClasswork->course_id = $request->course_id;
        $DuplicateClasswork->user_id = $userId;
        $DuplicateClasswork->type =  $checkClasswork->type;
        $DuplicateClasswork->title =  $checkClasswork->title;
        $DuplicateClasswork->instruction =  $checkClasswork->instruction;
        $DuplicateClasswork->duration =  $checkClasswork->duration;
        $DuplicateClasswork->points =  $checkClasswork->points;
        $DuplicateClasswork->attachment = $checkClasswork->attachment;
        $DuplicateClasswork->save();


        $fetchCriteria = tbl_subjective_rubrics::where('classwork_id', $checkClasswork->id)->get();

        foreach($fetchCriteria as $criteria){
            $duplicateCriteria = new tbl_subjective_rubrics;
            $duplicateCriteria->classwork_id = $DuplicateClasswork->id;
            $duplicateCriteria->points = $criteria['points'];
            $duplicateCriteria->criteria_name = $criteria['criteria_name'];
            $duplicateCriteria->description = $criteria['description'];
            $duplicateCriteria->save();
        }
        
        if($checkClasswork->type == 'Objective Type'){
            $QuestionList =  tbl_Questions::where('tbl_questions.classwork_id', $checkClasswork->id)->get();

            foreach($QuestionList as $item){

                $newQuestion = new tbl_Questions;
                $newQuestion->classwork_id = $DuplicateClasswork->id;
                $newQuestion->question = $item['question'];
                $newQuestion->type = $item['type'];
                $newQuestion->points = $item['points'];
                $newQuestion->sensitivity = $item['sensitivity'];
                $newQuestion->isNew = $item['isNew'];
                $newQuestion->required = $item['required'];
                $newQuestion->save();

                $QuestionChoiceList = tbl_choice::where('tbl_choices.question_id', $item['id'])->get();
                foreach($QuestionChoiceList as $ques_choice){

                    if($item['type'] != 'Matching type'){
                        $newChoice = new tbl_choice;
                        $newChoice->question_id = $newQuestion->id;
                        $newChoice->Choice = $ques_choice['Choice'];
                        $newChoice->isDestructor = $ques_choice['isDestructor'];
                        $newChoice->save();

                        if($item['isNew']){
                            if($item['answer'] == $ques_choice['id']){
                                $newQuestion->answer = $newChoice->id;
                                $newQuestion->save();
                            }
                        }else{
                            $newQuestion->answer = $item['answer'];
                            $newQuestion->save();
                        }

                    }else{

                        $newChoice = new tbl_choice;
                        $newChoice->question_id = $newQuestion->id;
                        $newChoice->Choice = $ques_choice['Choice'];
                        $newChoice->isDestructor = $ques_choice['isDestructor'];
                        $newChoice->save();

                        $checkSubQuestion = tbl_SubQuestion::where('answer_id', $ques_choice['id'])
                        ->where('mainQuestion_id', $item['id'])
                        ->first();
                        if($checkSubQuestion){
                            $newSubques = new tbl_SubQuestion;
                            $newSubques->mainQuestion_id = $newQuestion->id;
                            $newSubques->answer_id = $newChoice->id;
                            $newSubques->sub_question = $checkSubQuestion->sub_question;
                            $newSubques->save();
                        }

                    }

                }
            }

            $fetchCriteria = tbl_subjective_rubrics::where('classwork_id', $checkClasswork->id)->get();
            foreach($fetchCriteria as $criteria){
                $duplicateCriteria = new tbl_subjective_rubrics;
                $duplicateCriteria->classwork_id = $DuplicateClasswork->id;
                $duplicateCriteria->points = $criteria['points'];
                $duplicateCriteria->criteria_name = $criteria['criteria_name'];
                $duplicateCriteria->description = $criteria['description'];
                $duplicateCriteria->save();
            }
        }

        DB::commit();
        return response()->json([
            "message" => "Classwork Successfully Duplicated!",
            "success" => true,
        ]);
     }
     


     
}
