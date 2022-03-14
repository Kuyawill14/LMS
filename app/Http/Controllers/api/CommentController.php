<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_comment;
use App\Models\tbl_like;
use App\Models\tbl_userDetails;
use App\Models\tbl_userclass;
use App\Models\tbl_notification;
use App\Models\tbl_teacher_course;
use Illuminate\Support\Facades\DB;
use App\Events\NewNotification;
use App\Models\UserNotification;
use Notification;
use App\Notifications\SendPushNotification;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $Comment = tbl_comment::where("tbl_comments.post_id", $id)
        ->select("tbl_comments.id","tbl_comments.post_id","tbl_comments.user_id as u_id","tbl_comments.content","tbl_comments.created_at",
        DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic", "tbl_comments.id")
        ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
        ->orderBy("tbl_comments.id", "DESC")
        ->paginate(5);
        return $Comment;
    }

    /**
     * Display a listing of the resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function TotalComment($id)
    {
        $CommentCount = tbl_comment::where("tbl_comments.post_id", $id)->count();
        return $CommentCount;
    }

    /**
     * Display a listing of the resource.
     * @param  int  $id
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateComment($id, Request $request)
    {
        $Comment = tbl_comment::find($id);
        if($Comment){
            $Comment->content = $request->comment;
            $Comment->save();
            return "Comment Updated!";
        }
        return "Failed updating the comment";


    }


   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userId = auth("sanctum")->id();
        $NewComment = new tbl_comment;
        $NewComment->post_id = $request->post_id;
        $NewComment->user_id = $userId;
        $NewComment->course_id =  $request->course_id;
        $NewComment->content = $request->content;
        $NewComment->save();

        //if(auth("sanctum")->user()->role == "Student"){
            /* if($NewComment){
                $user = tbl_userDetails::where('user_id', $userId)
                ->select('firstName', 'lastName')
                ->first();
    
                $checkClass = tbl_userclass::where('tbl_userclasses.user_id', $userId)->where('tbl_userclasses.course_id', $request->course_id)
                ->select('tbl_userclasses.id','tbl_userclasses.course_id', 'tbl_subject_courses.course_name','tbl_userclasses.class_id')
                ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
                ->first();
    
                $CheckNotification = tbl_notification::where('course_id', $checkClass->course_id)->where('class_id', $checkClass->class_id)
                ->where('notification_attachments', $request->post_id)
                ->where('notification_type', 'post_reply')->first();
                $tmpCount = tbl_comment::where("tbl_comments.post_id", $request->post_id)->count();
    
                if($CheckNotification){
                    $CheckNotifIfRead = UserNotification::where('notification_id', $CheckNotification->id)->first();
                    if($CheckNotifIfRead){
                        $CheckNotifIfRead->delete();
                    }
    
                    $tmpCount = tbl_comment::where("tbl_comments.post_id", $request->post_id)->count();
    
                    if($tmpCount <= 2){
                        $CheckNotification->message = $user->firstName." ".$user->lastName." replied to your post in ".$checkClass->course_name;
                    }
                    $CommentCount = $tmpCount - 1;
                    $CheckNotification->message = $user->firstName." ".$user->lastName." and ".$CommentCount." others replied to your post in ".$checkClass->course_name;
                    $CheckNotification->save();
                }
                else{
                    $newNotification = new tbl_notification;
                    $newNotification->course_id = $checkClass->course_id;
                    $newNotification->class_id = $checkClass->class_id;
                    $newNotification->from_id = $userId;
                    $newNotification->notification_attachments =  $request->post_id;
                    $newNotification->message = $user->firstName." ".$user->lastName." replied to your post in ".$checkClass->course_name;
                    $newNotification->notification_type = 'post_reply';
                    $newNotification->save();
                    broadcast(new NewNotification($newNotification))->toOthers();



                    if($courseAndClassId->device_key)Notification::send(null,new SendPushNotification('ISUE-ORANGE',$newNotification->message $courseAndClassId->device_key));
                }
            } */
        //}
       
        return $NewComment;
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function likedPost(Request $request)
    {
        $userId = auth("sanctum")->id();
        $NewLike = new tbl_like;
        $NewLike->post_id = $request->post_id;
        $NewLike->user_id = $userId;
        $NewLike->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function RemoveLike($id)
    {
        $userId = auth("sanctum")->id();
        $like = tbl_like::where('post_id', $id)->where('user_id', $userId)->first();
        if($like){
            $like->delete();
        }
    }

    /**
     * Show the form for editing the specified resource.
     * 
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function FetchClassworkPrivateComment($id)
    {
        $PrivateComment = tbl_comment::where("tbl_comments.classwork_id", $id)
        ->select("tbl_comments.id","tbl_comments.content","tbl_comments.created_at",
        DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic", "tbl_comments.id")
        ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
        ->orderBy("tbl_comments.created_at", "ASC")
        ->get();
        return $PrivateComment;
        
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addClassworkPrivateComment(Request $request){
        //return $request;
        $userId = auth("sanctum")->id();

        if(auth('sanctum')->user()->role != 'Student'){
            $NewComment = new tbl_comment;
            $NewComment->classwork_id = $request->classwork_id;
            $NewComment->user_id = $userId;
            $NewComment->from_user =  $request->to_user;
            $NewComment->to_user = $userId;
            $NewComment->type = "Private";
            $NewComment->course_id =  $request->course_id;
            $NewComment->content = $request->comment;
            $NewComment->save();
        }else{
            $teacher_id = tbl_teacher_course::where('course_id',$request->course_id)->first();
            $NewComment = new tbl_comment;
            $NewComment->classwork_id = $request->classwork_id;
            $NewComment->user_id = $userId;
            $NewComment->from_user = $userId;
            $NewComment->to_user =   $teacher_id->user_id;
            $NewComment->type = "Private";
            $NewComment->course_id =  $request->course_id;
            $NewComment->content = $request->comment;
            $NewComment->save();
        }
    
        $details = tbl_userDetails::where('user_id', $NewComment->user_id)->first();
        return response()->json([
            "id"=>$NewComment->id, 
            "comment"=>$NewComment->content, 
            "name"=> $details->firstName.' '.$details->lastName,
            "profile_pic"=>$details->profile_pic
        ]);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePrivateComment($id)
    { 
        $DelComment = tbl_comment::find($id);
        if($DelComment){
            $DelComment->delete();
            return response()->json([
                "message" => 'Comment successfully remove!', 
                "success" => true
            ]);
        }
        return response()->json([
            "message" => 'Comment not found!', 
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    { 
        $DelComment = tbl_comment::find($id);
        if($DelComment){
            $DelComment->delete();
            return "successfully Remove.";
        }
        return "Comment not found";
    }

    /**
     * Display a listing of the resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function TotalLikes($id)
    {
        $likes = tbl_like::where("post_id", );
       /*  $Comment = tbl_comment::where("tbl_comments.post_id", $id)
        ->select("tbl_comments.id","tbl_comments.post_id","tbl_comments.content","tbl_comments.created_at",
         "tbl_user_details.profile_pic", "tbl_comments.id")
         ->selectRaw("CONCAT(tbl_user_details.firstName, " ", tbl_user_details.lastName) as name")
        ->leftJoin("users", "users.id","=","tbl_comments.user_id")
        ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
        ->orderBy("created_at", "ASC")
        ->get();
        return $Comment; */
    }
}
