<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_sub_modules;
use Illuminate\Support\Facades\DB;
use Validator,Redirect,Response,File;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

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
        ->orderBy('tbl_sub_modules.id', 'ASC')
        
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


    public function RemoveUploadedFile(Request $request, $id)
    {

        // return $request;
        $removeUpload =  tbl_sub_modules::find($id);
        if($removeUpload){
            Storage::delete('public/'.$request->file);
                $removeUpload->file_attachment = -1;
                $removeUpload->save();
        }
    }


    public function deleteSubmodule( $id) {
        $submodule =  tbl_sub_modules::find($id);

        if($submodule) {
            $submodule->delete();
            return array( 
                'message' => 'Successfully Deleted'
            );
    
        }

    
    }


    public function store(Request $request)
    {

        $currentTime = Carbon::now()->format('YmdHs');
        $file = null;
       $itemType = $request->type == 'Video' || $request->type == 'Document';
        $id = $request->submodule_id;

            $subModule =  tbl_sub_modules::find($id);
            
            if($subModule) {
                if( $itemType) {
                    
                    if($request->file != 'null') {
                        $file_extension = $request->file->extension();
                        $file_mime_type = $request->file->getClientMimeType();
                        $original_file_name = $request->file->getClientOriginalName();

                        //name_time.extension
                        $filename =  $request->sub_module_name . '_' . $currentTime . '.' .  $file_extension ;

                        $file = $request->file->storeAs('public/upload/courses/' .$request->main_module_id,$filename );
                        $subModule->file_attachment = preg_replace('/\bpublic\/\b/', '', $file);;
                    }
                  
                    $subModule->sub_module_name = $request->sub_module_name;
                    $subModule->type = $request->type;
                    $subModule->description = $request->description;
                    $subModule->required_time = $request->required_time  * 60;
     
                    $subModule->save();
                    return $subModule;
                } else {
                    $subModule->sub_module_name = $request->sub_module_name;
                    $subModule->type = $request->type;
                    // $subModule->main_module_id = $request->main_module_id;
                    $subModule->description = $request->description;
                    $subModule->required_time = $request->required_time  * 60;
                    $subModule->link =  $request->link;
                    $subModule->save();
                    return $subModule;  
                }

           
            } else {
                if( $itemType) { 
                    if ($files = $request->file('file')) { 
                        $file_extension = $request->file->extension();
                        $file_mime_type = $request->file->getClientMimeType();
                        $original_file_name = $request->file->getClientOriginalName();

                         //name_time.extension
                        $filename =  $request->sub_module_name . '_' . $currentTime . '.' .  $file_extension ;

                        $file = $request->file->storeAs('public/upload/courses/' .$request->main_module_id,$filename );
                        $subModule = new tbl_sub_modules;
                        $subModule->sub_module_name = $request->sub_module_name;
                        $subModule->type = $request->type;
                        $subModule->main_module_id = $request->main_module_id;
                        $subModule->description = $request->description;
                        $subModule->required_time = $request->required_time * 60;
                        $subModule->file_attachment = preg_replace('/\bpublic\/\b/', '', $file);;
                        $subModule->save();
                        return $subModule;
                         }
                } else {
                    $subModule  = new tbl_sub_modules;
                    $subModule->sub_module_name = $request->sub_module_name;
                    $subModule->type = $request->type;
                    $subModule->main_module_id = $request->main_module_id;
                    $subModule->description = $request->description;
                    $subModule->required_time = $request->required_time * 60;
                    $subModule->link =  $request->link;
                    $subModule->save();
                    return $subModule;
                }
              

            }
        
            return array(
                status => 'error',
                message => 'Something Went Wrong'
            );
          

        
 
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
            
        
    if($request->type == 'Video' || $request->type == 'Document') {
        //     $validator = Validator::make($request->sub_module['file_attachment']->all(), 
            //     [ 
                
            //     'file' => 'required|mimes:doc,docx,pdf,txt|max:2048',
            //    ]);   

            //     if ($validator->fails()) {          
            //         return response()->json(['error'=>$validator->errors()], 401);                        
            //     }  

        
            if ($files = $request->file('file')) {
                        
                //store file into document folder
                $file = $request->file->store('public/upload/courses/' .$request->main_module_id);

                //store your file into database
                $subModule  = new tbl_sub_modules;
                $subModule->sub_module_name = $request->sub_module_name;
                $subModule->type = $request->type;
                $subModule->main_module_id = $request->main_module_id;
                $subModule->description = $request->description;
                $subModule->required_time = $request->required_time;
                $subModule->file_attachment = preg_replace('/\bpublic\/\b/', '', $file);;
                $subModule->save();
                return $subModule;
                
                // return response()->json([
                //     "success" => true,
                //     "message" => "File successfully uploaded",
                //     "file" => $file
                // ]);
            }

        } else  if($request->type == 'Link') {
            $subModule  = new tbl_sub_modules;
            $subModule->sub_module_name = $request->sub_module_name;
            $subModule->type = $request->type;
            $subModule->main_module_id = $request->main_module_id;
            $subModule->description = $request->description;
            $subModule->required_time = $request->required_time * 60;
            $subModule->link =  $request->link;
            $subModule->save();
            return $subModule;
        }
        

    

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
