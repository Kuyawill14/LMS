<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_sub_modules;
use Illuminate\Support\Facades\DB;
use Validator,Redirect,Response,File;


class SubModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        //
        $allSubModules = DB::table('tbl_sub_modules')
        ->select('tbl_sub_modules.*', "course_id")
        ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
       
        ->where('tbl_main_modules.course_id', $id )
        ->get();
        return $allSubModules;
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
   
    //     $validator = Validator::make($request->sub_module['file_attachment']->all(), 
    //     [ 
        
    //     'file' => 'required|mimes:doc,docx,pdf,txt|max:2048',
    //    ]);   

    //     if ($validator->fails()) {          
    //         return response()->json(['error'=>$validator->errors()], 401);                        
    //     }  


        if ($files = $request->file('file')) {
                    
            //store file into document folder
            $file = $request->file->store('public/biliupload/courses/' .$request->main_module_id);

            //store your file into database
            $subModule  = new tbl_sub_modules;
            $subModule->sub_module_name = $request->sub_module_name;
            $subModule->type = $request->type;
            $subModule->main_module_id = $request->main_module_id;
            $subModule->description = $request->description;
            $subModule->file_attachment = $file;
            $subModule->save();
            return $file;
            
            // return response()->json([
            //     "success" => true,
            //     "message" => "File successfully uploaded",
            //     "file" => $file
            // ]);
        }

        
 
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
