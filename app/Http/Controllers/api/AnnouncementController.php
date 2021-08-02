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
        $userId = auth('sanctum')->id();
        //$userId = 3;
        if(auth('sanctum')->user()->role != 'Student')
        {
            $allClassPost = tbl_classpost::where('tbl_classposts.course_id', $id)
            ->select('tbl_classposts.id as post_id', 'tbl_class_announcements.id as announcement_id','tbl_class_announcements.*','tbl_user_details.profile_pic', DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),'tbl_userclasses.class_id')
            ->selectRaw('count(tbl_comments.id ) as comment_count')
            ->selectRaw('count(tbl_likes.id ) as likes_count')
            ->leftJoin('tbl_classworks', 'tbl_classposts.classwork_id', '=', 'tbl_classworks.id')
            ->leftJoin('tbl_class_announcements', 'tbl_classposts.announcement_id', '=', 'tbl_class_announcements.id')
            ->leftJoin('tbl_comments', 'tbl_classposts.id', '=', 'tbl_comments.post_id')
            ->leftJoin('tbl_likes', 'tbl_classposts.id', '=', 'tbl_likes.post_id')
            ->leftJoin('users', 'tbl_classposts.user_id', '=', 'users.id')
            ->leftJoin('tbl_user_details', 'users.id', '=', 'tbl_user_details.user_id')
            ->leftJoin('tbl_userclasses', 'users.id', '=', 'tbl_userclasses.user_id')
            ->orderBy('created_at', 'DESC')
            ->groupBy('tbl_classposts.id','tbl_class_announcements.id','tbl_class_announcements.content','tbl_class_announcements.file','tbl_class_announcements.created_at','tbl_class_announcements.updated_at','tbl_user_details.profile_pic','users.firstName','users.lastName','tbl_userclasses.class_id')
            ->paginate(10);
            return $allClassPost;
        }
        else{
            $Class_id = tbl_userclass::where('course_id', $id)
            ->where('user_id', $userId)->first();
            if($Class_id ){
                $allClassPost = tbl_classpost::where('tbl_classposts.class_id', $Class_id->class_id)
                ->orWhere('tbl_classposts.class_id', $id)

                ->select('tbl_classposts.id as post_id', 'tbl_class_announcements.id as announcement_id','tbl_class_announcements.*','tbl_user_details.profile_pic', DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'))
                ->selectRaw('count(tbl_comments.id ) as comment_count')
                ->selectRaw('count(tbl_likes.id ) as likes_count')
                ->leftJoin('tbl_classworks', 'tbl_classposts.classwork_id', '=', 'tbl_classworks.id')
                ->leftJoin('tbl_class_announcements', 'tbl_classposts.announcement_id', '=', 'tbl_class_announcements.id')
                ->leftJoin('tbl_comments', 'tbl_classposts.id', '=', 'tbl_comments.post_id')
                ->leftJoin('tbl_likes', 'tbl_classposts.id', '=', 'tbl_likes.post_id')
                ->leftJoin('users', 'tbl_classposts.user_id', '=', 'users.id')
                ->leftJoin('tbl_user_details', 'users.id', '=', 'tbl_user_details.user_id')
                ->orderBy('created_at', 'DESC')
                ->groupBy('tbl_classposts.id','tbl_class_announcements.id','tbl_class_announcements.content','tbl_class_announcements.file','tbl_class_announcements.created_at','tbl_class_announcements.updated_at','tbl_user_details.profile_pic','users.firstName','users.lastName')
                ->paginate(10);
                //return $allClassPost->toArray();
                return $allClassPost;
            }
        }
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        $userId = auth('sanctum')->id();
        $username = User::where('users.id', $userId)
        ->select(DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'), 'tbl_user_details.profile_pic')
        ->leftJoin('tbl_user_details', 'users.id', '=', 'tbl_user_details.user_id')
        ->get();

          //
          $NewAnnouncement = new tbl_classAnnouncement;
          $NewAnnouncement->content = $request->announcement['content'];
          $NewAnnouncement->file = $request->announcement['file'];
          $NewAnnouncement->save();
  
          
  
          //New Post
          $Class_id = tbl_userclass::where('course_id', $request->announcement['course_id'])
          ->where('user_id', $userId)->first();

          $NewPost  = new tbl_classpost;
          $NewPost->course_id = $request->announcement['course_id'];
          $NewPost->class_id = auth('sanctum')->user()->role != 'Student' ? $request->announcement['class_id'] : $Class_id->class_id;
          $NewPost->announcement_id =$NewAnnouncement->id;
          $NewPost->classwork_id = 0;
          $NewPost->user_id = $userId ;
          $NewPost->save();


        
          //New notification
         $userInClass = tbl_subject_course::where('tbl_subject_courses.id', $NewPost->course_id)
          ->first();

        $newNotification = new tbl_notification;
        $newNotification->course_id = $request->announcement['course_id'];
        $newNotification->class_id = $NewPost->class_id;
        $newNotification->from_id =  $userId;
        $newNotification->message = "Posted new announcement in ".$userInClass->course_name;
        $newNotification->notification_type = 1;
        $newNotification->save();
          

          broadcast(new NewNotification($newNotification))->toOthers();
          //broadcast(new NewPost($NewPost))->toOthers();


          return response()->json([
            'post_id'=>$NewPost->id, 
            'announcement_id'=>$NewPost->announcement_id, 
            'content'=>$NewAnnouncement->content, 
            'created_at'=>$NewAnnouncement->created_at, 
            'updated_at'=>$NewAnnouncement->updated_at, 
            'name' => $username[0]->name,
            'profile_pic' => $username[0]->profile_pic,
            'comment_count' => 0,
            'likes_count' => 0
        ]);
     
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
