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
        $allClassPost = tbl_classpost::where('tbl_classposts.class_id', $id)
        ->select('tbl_classposts.id as post_id', 'tbl_class_announcements.id as announcement_id','tbl_class_announcements.*','tbl_user_details.profile_pic', DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'))
        ->leftJoin('tbl_classworks', 'tbl_classposts.classwork_id', '=', 'tbl_classworks.id')
        ->leftJoin('tbl_class_announcements', 'tbl_classposts.announcement_id', '=', 'tbl_class_announcements.id')
        ->leftJoin('users', 'tbl_classposts.user_id', '=', 'users.id')
        ->leftJoin('tbl_user_details', 'users.id', '=', 'tbl_user_details.user_id')
        ->orderBy('created_at', 'DESC')
        ->withCount(['comments'])
        ->get();

        

        return $allClassPost;

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
       /*  $username = DB::table('users')
        ->select(DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'))
        ->where('id', $userId)
        ->value('name'); */

        $username = DB::table('users')
        ->select(DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'), 'tbl_user_details.profile_pic')
        ->leftJoin('tbl_user_details', 'users.id', '=', 'tbl_user_details.user_id')
        ->where('users.id', $userId)
        ->get();

          //
          $NewAnnouncement = new tbl_classAnnouncement;
          $NewAnnouncement->content = $request->announcement['content'];
          $NewAnnouncement->file = $request->announcement['file'];
          $NewAnnouncement->save();
  
  
  
          //New Post
          $NewPost  = new tbl_classpost;
          $NewPost->class_id =$request->announcement['class_id'];
          $NewPost->announcement_id =$NewAnnouncement->id;
          $NewPost->classwork_id = 0;
          $NewPost->user_id = $userId ;
          $NewPost->save();
        
          //New notification
          $userInClass = DB::table('tbl_userclasses')
          ->select('tbl_userclasses.id','tbl_userclasses.user_id', 'tbl_subject_courses.course_name','tbl_classes.class_name')
          ->leftJoin('tbl_subject_courses', 'tbl_userclasses.course_id', '=', 'tbl_subject_courses.id')
          ->leftJoin('tbl_classes', 'tbl_classes.id', '=', 'tbl_userclasses.class_id')
          ->where('tbl_userclasses.class_id', $NewPost->class_id)
          ->get();

        foreach($userInClass as $us_id){
            
            if($us_id->user_id != $userId){
                $newNotification = new tbl_notification;
                $newNotification->userid_from = $userId;
                $newNotification->userid_to = $us_id->user_id;
                $newNotification->class_id = $NewPost->class_id;
                $newNotification->message = "Posted new announcement in ".$us_id->course_name;
                $newNotification->event_type = 1;
                $newNotification->notification_type = $NewPost->id;
                $newNotification->status = 0;
                $newNotification->save();
            }
           
        }

          


 
        

        



          //broadcast(new NewNotification($newNotification))->toOthers();
          broadcast(new NewPost($NewPost))->toOthers();


          return response()->json([
            'post_id'=>$NewPost->id, 
            'announcement_id'=>$NewPost->announcement_id, 
            'content'=>$NewAnnouncement->content, 
            'created_at'=>$NewAnnouncement->created_at, 
            'updated_at'=>$NewAnnouncement->updated_at, 
            'name' => $username[0]->name,
            'profile_pic' => $username[0]->profile_pic
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
