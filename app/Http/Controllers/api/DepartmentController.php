<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\tbl_department;


class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departmentlist = tbl_department::all();

        return $departmentlist;
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

        $file = $request->logo;
        $upload_file = Storage::disk('DO_spaces')->putFile('Department_Logos', $file, 'public');
        $path = \Config::get('app.do_url').'/'.$upload_file;

        $newDepartment  = new tbl_department;
        $newDepartment->short_name = $request->short_name;
        $newDepartment->name = $request->name;
        $newDepartment->logo = $path;
        $newDepartment->save();
        return response()->json([
            "message" => "Department Added!",
            "success" => true,
            "new_data" => $newDepartment,
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

        //return $request;
        $Department = tbl_department::find($id);
        if($Department){
            $Department->name = $request->name;
            $Department->short_name = $request->short_name;
            
            if($request->old_logo_path == null || $request->old_logo_path == ''){
                $file = $request->logo;
                if($file){
                    $file = $request->logo;
                    $upload_file = Storage::disk('DO_spaces')->putFile('Department_Logos', $file, 'public');
                    $path = \Config::get('app.do_url').'/'.$upload_file;

                    $Department->logo = $path;
                }
            }
            else{
                $file = $request->logo;
                if($file){
                    $Oldpath =  str_replace(\Config::get('app.do_url').'/', "",  $Department->logo);
                    Storage::disk('DO_spaces')->delete($Oldpath);
                    $file = $request->logo;
                    $upload_file = Storage::disk('DO_spaces')->putFile('Department_Logos', $file, 'public');
                    $path = \Config::get('app.do_url').'/'.$upload_file;
                    $Department->logo = $path;
                }
            }

            $Department->save();
            return response()->json([
                "message" => "Department successfully updated!",
                "success" => true,
                "path"=> $path,
            ]);
        }

        return response()->json([
            "message" => "data not found!",
            "success" => false
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Department  = tbl_department::find($id);
        if($Department){
            $Department->delete();
            return response()->json([
                "message" => "Department successfully removed!",
                "success" => true
            ]);
        }

        return response()->json([
            "message" => "data not found!",
            "success" => false
        ]);

        
    }
}
