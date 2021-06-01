<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_comment;
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
        $Comment = tbl_comment::where('tbl_comments.course_id', $id)
        ->select('tbl_comments.id','tbl_comments.post_id','tbl_comments.content','tbl_comments.created_at',
         DB::raw('CONCAT(users.firstname, " ", users.lastName) as name'),
         'tbl_user_details.profile_pic')
        ->leftJoin('users', 'users.id','=','tbl_comments.user_id')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id','=','tbl_comments.user_id')
        ->orderBy('created_at', 'ASC')
        ->get();

        foreach($Comment as $cl){
            
        }
        return $Comment;
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
        $userId = auth('sanctum')->id();
        $NewComment = new tbl_comment;
        $NewComment->post_id = $request->post_id;
        $NewComment->user_id = $userId;
        $NewComment->course_id =  $request->course_id;
        $NewComment->content = $request->content;
        $NewComment->save();
        return $NewComment;
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
        //
    }
}
