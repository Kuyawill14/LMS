<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use App\Models\User;
use App\Models\tbl_userDetails;
use Illuminate\Support\Str;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = auth('sanctum')->id();
        $userDetails = tbl_userDetails::where('user_id',$userId)
        ->select('users.role','users.firstName','users.middleName','users.lastName','users.email',
        'tbl_user_details.*')
        ->leftJoin('users', 'users.id', '=', 'tbl_user_details.user_id')
        ->get();
        return $userDetails;
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
     * @return \Illuminate\Http\Response
     */
    public function updatePicture(Request $request)
    {
        $userId = auth('sanctum')->id();
        $UpdatePicture = tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
        if($UpdatePicture){
            $UpdatePicture->profile_pic = $request->data;
            $UpdatePicture->save();
            return "Profile Picture Updated";
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateDetails(Request $request)
    {
      
      
        $userId = auth('sanctum')->id();

       /*  //$finalID =  Crypt::decryptString($test);
        $data = User::find($userId);
        $testdata = Crypt::encryptString(json_encode($data));
        return base64_decode($request->data); */

        
        
        $UpdateDetails = User::find($userId);
    
        //tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
        if($UpdateDetails){
            $UpdateDetails->firstName = $request->firstName;
            $UpdateDetails->middleName = $request->middleName;
            $UpdateDetails->lastName = $request->lastName;
            $UpdateDetails->email = $request->email;
            
            $Info = tbl_userDetails::where("tbl_user_details.user_id",$userId)->first();
            if($Info){
                $Info->address = $request->address;
                $Info->cp_no = $request->cp_no;
                $Info->social_account = $request->social_account;
                $Info->save();
                $UpdateDetails->save();
            }
            return "Details Successfully Updated";
        }
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
