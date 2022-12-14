<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Tbl_class;
use App\Models\tbl_classpost;
use App\Models\tbl_userclass;
use App\Models\tbl_classAnnouncement;
use App\Models\tbl_notification;
use App\Events\NewPost;
use App\Events\NewNotification;
use App\Models\tbl_comment;
use App\Models\tbl_like;
use App\Models\tbl_subject_course;



class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     
    }

    
    public function allClassPost($id)
    {
        $userId = auth("sanctum")->id();
        $allClassPost;
        if(auth("sanctum")->user()->role != "Student")
        {
            $classes = Tbl_class::where('tbl_classes.course_id', $id)->get();
            $list = array();
            foreach($classes as $item){
                $list[] = $item->id;
            }

            $allClassPost = tbl_classpost::where("tbl_classposts.course_id", $id)
            ->orWhereIn("tbl_classposts.class_id", $list)
            ->select("tbl_classposts.id as post_id","tbl_classposts.user_id as u_id", "tbl_classposts.class_id","tbl_classposts.course_id", "tbl_class_announcements.id as announcement_id","tbl_class_announcements.content","tbl_class_announcements.file","tbl_class_announcements.created_at","tbl_class_announcements.updated_at",
             DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic")
            ->leftJoin("tbl_classworks", "tbl_classposts.classwork_id", "=", "tbl_classworks.id")
            ->leftJoin("tbl_class_announcements", "tbl_classposts.announcement_id", "=", "tbl_class_announcements.id")
            ->leftJoin("tbl_comments", "tbl_classposts.id", "=", "tbl_comments.post_id")
            ->leftJoin("tbl_likes", "tbl_classposts.id", "=", "tbl_likes.post_id")
            ->leftJoin("users", "tbl_classposts.user_id", "=", "users.id")
            ->leftJoin("tbl_user_details", "users.id", "=", "tbl_user_details.user_id")
            ->orderBy("tbl_classposts.created_at", "DESC")
            ->groupBy("tbl_classposts.id","tbl_class_announcements.id","tbl_class_announcements.content","tbl_class_announcements.file","tbl_class_announcements.created_at","tbl_class_announcements.updated_at","tbl_user_details.profile_pic","tbl_user_details.firstName","tbl_user_details.lastName")
            ->paginate(10);
        }
        else{
            $Class_id = tbl_userclass::where("course_id", $id)
            ->where("user_id", $userId)->first();
            if($Class_id ){
                $allClassPost = tbl_classpost::where("tbl_classposts.class_id", $Class_id->class_id)
                ->orWhere("tbl_classposts.course_id", $id)
                ->select("tbl_classposts.id as post_id", "tbl_classposts.user_id as u_id","tbl_class_announcements.id as announcement_id","tbl_class_announcements.content","tbl_class_announcements.file","tbl_class_announcements.created_at","tbl_class_announcements.updated_at",
                DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic")
                ->leftJoin("tbl_classworks", "tbl_classposts.classwork_id", "=", "tbl_classworks.id")
                ->leftJoin("tbl_class_announcements", "tbl_classposts.announcement_id", "=", "tbl_class_announcements.id")
                ->leftJoin("tbl_comments", "tbl_classposts.id", "=", "tbl_comments.post_id")
                ->leftJoin("tbl_likes", "tbl_classposts.id", "=", "tbl_likes.post_id")
                ->leftJoin("users", "tbl_classposts.user_id", "=", "users.id")
                ->leftJoin("tbl_user_details", "users.id", "=", "tbl_user_details.user_id")
                ->orderBy("tbl_classposts.created_at", "DESC")
                ->groupBy("tbl_classposts.id","tbl_class_announcements.id","tbl_class_announcements.content","tbl_class_announcements.file","tbl_class_announcements.created_at","tbl_class_announcements.updated_at","tbl_user_details.profile_pic","tbl_user_details.firstName","tbl_user_details.lastName")
                ->paginate(10);
            }
        }        
        foreach ($allClassPost as $post) {
            $Comment = tbl_comment::where("tbl_comments.post_id", $post->post_id)->count();
            $post->comment_count = $Comment;
            $post->isCommented = tbl_comment::where("tbl_comments.post_id", $post->post_id)->where('tbl_comments.user_id', $userId)->exists();

            $post->liked = tbl_like::where('post_id', $post->post_id) ->where('user_id', $userId)->exists();
            $post->likes_count =  $LikeCount = tbl_like::where('post_id', $post->post_id)->count();

            
        }
        return $allClassPost;       
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ImageUploader()
    {
        //


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   

    public function store(Request $request)
    {
        //
        $userId = auth("sanctum")->id();

        $username = User::where("users.id", $userId)
        ->select("tbl_user_details.profile_pic","tbl_user_details.firstName","tbl_user_details.lastName")
        ->leftJoin("tbl_user_details", "users.id", "=", "tbl_user_details.user_id")
        ->first();

          $NewAnnouncement = new tbl_classAnnouncement;
          $NewAnnouncement->content = $request->announcement["content"];
          $NewAnnouncement->file = $request->announcement["file"];
          $NewAnnouncement->save();
  
          
          //New Post
          $Class_id = tbl_userclass::where("course_id", $request->announcement["course_id"])
          ->where("user_id", $userId)->first();

          $NewPost  = new tbl_classpost;
          $NewPost->course_id = auth("sanctum")->user()->role != "Student" ? $request->announcement["course_id"] : null;
          $NewPost->class_id = auth("sanctum")->user()->role != "Student" ? $request->announcement["class_id"] : $Class_id->class_id;
          $NewPost->announcement_id =$NewAnnouncement->id;
          $NewPost->classwork_id = 0;
          $NewPost->user_id = $userId ;
          $NewPost->save();

          $NewPost->course_id =  $request->announcement["course_id"];


          //broadcast(new NewPost($NewPost))->toOthers();
          return response()->json([
            "post_id"=>$NewPost->id, 
            "announcement_id"=>$NewPost->announcement_id, 
            "content"=>$NewAnnouncement->content, 
            "created_at"=>$NewAnnouncement->created_at, 
            "updated_at"=>$NewAnnouncement->updated_at, 
            "name" => $username->firstName." ".$username->lastName,
            "profile_pic" => $username->profile_pic,
            "comment_count" => 0,
            "likes_count" => 0,
            "class_id" => $NewPost->class_id,
            "u_id"=> $userId
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
        $updateAnnouncement = tbl_classAnnouncement::find($request->announcement_id);
        if($updateAnnouncement){
            $updateAnnouncement->content = $request->content;
            $updateAnnouncement->save();

            return response()->json([
                "success"=>true,
                "message"=> 'Post updated successfully'
            ]);
        }

        return response()->json([
            "success"=>false,
            "message"=> 'Post does not exist!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $classpost = tbl_classpost::where('announcement_id', $id)->delete();
        $announcement = tbl_classAnnouncement::where('id', $id)->delete();
        $comment = tbl_comment::where('post_id', $id)->delete();
        $comment = tbl_like::where('post_id', $id)->delete();
        return "Deleted!";
    }
}
