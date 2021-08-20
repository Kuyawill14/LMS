<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_comment;
use App\Models\tbl_like;

use Illuminate\Support\Facades\DB;

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
        ->select("tbl_comments.id","tbl_comments.post_id","tbl_comments.content","tbl_comments.created_at",
        DB::raw("CONCAT(tbl_user_details.firstName,' ',tbl_user_details.lastName) as name"),"tbl_user_details.profile_pic", "tbl_comments.id")
        ->leftJoin("tbl_user_details", "tbl_user_details.user_id","=","tbl_comments.user_id")
        ->orderBy("tbl_user_details.created_at", "ASC")
        ->get();
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
    public function edit(Request $request, $id)
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
