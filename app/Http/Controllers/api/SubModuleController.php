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
        ->select('tbl_sub_modules.*','tbl_sub_modules.required_time/60', "course_id")
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
        $subModule =  tbl_sub_modules::find($id);

       
        if($subModule){
            $path =  str_replace(\Config::get('app.do_url').'/', "", $subModule['file_attachment']);
         
                   
                    if(Storage::disk('DO_spaces')->delete($path)) {
                        $subModule->file_attachment = -1;
                        $subModule->save();
                        return array( 
                            'message' => 'Successfully Deleted'
                        );
                   
                    }
                   
        }
    }


    public function deleteSubmodule( $id) {

        $message = array();
        $allSubModulesProgressCount = DB::table('tbl_student_sub_module_progress')
        ->select('tbl_student_sub_module_progress.*')
        ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
        ->where('tbl_student_sub_module_progress.sub_module_id', $id )
        ->orderBy('tbl_sub_modules.id', 'ASC')
        ->count();

        $submodule =  tbl_sub_modules::find($id);

        if($submodule) {
            if( $allSubModulesProgressCount > 0) {
                $message = [ 'status'=> 0, 'message' => 'Unable to delete! some students have already progress on this item, 
                        You can still edit the title, file/link, description  and the required time input.'];
            } else {
                $submodule->delete();
                $message = [ 'status'=> 1, 'message' => 'Item deleted successfully'];
            }
     
           
    
        }

        return  $message;

    
    }


    public function store(Request $request)
    {
        $userId = auth('sanctum')->id();
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

                        // //  //name_time.extension
                        // $filename =  $request->sub_module_name . '_' . $currentTime . '.' .  $file_extension ;

                        // // $file = $request->file->storeAs('public/upload/courses/' .$request->main_module_id,$filename );
                        $filename =  $request->sub_module_name . '_' . $currentTime . '.' .  $file_extension ;
                        
                        
                        $file = $request->file('file');
                        // $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->fileName);
                        // $Uploadname = $original_file_name.'_'.time().'.'. $file_extension;
                        $upload_file = Storage::disk('DO_spaces')->putFileAs('modules/'.$request->main_module_id.'/'.$userId, $file,  $filename , 'public');
                        $path = \Config::get('app.do_url').'/'. $upload_file;

                        $subModule->file_attachment = $path;
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

                        // //  //name_time.extension
                        // $filename =  $request->sub_module_name . '_' . $currentTime . '.' .  $file_extension ;

                        // // $file = $request->file->storeAs('public/upload/courses/' .$request->main_module_id,$filename );
                        $filename =  $request->sub_module_name . '_' . $currentTime . '.' .  $file_extension ;
                        
                        
                        $file = $request->file('file');
                        // $original_file_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $request->fileName);
                        // $Uploadname = $original_file_name.'_'.time().'.'. $file_extension;
                        $upload_file = Storage::disk('DO_spaces')->putFileAs('modules/'.$request->main_module_id.'/'.$userId, $file,  $filename , 'public');
                        $path = \Config::get('app.do_url').'/'. $upload_file;


                        $subModule = new tbl_sub_modules;
                        $subModule->sub_module_name = $request->sub_module_name;
                        $subModule->type = $request->type;
                        $subModule->main_module_id = $request->main_module_id;
                        $subModule->description = $request->description;
                        $subModule->required_time = $request->required_time * 60;
                        $subModule->file_attachment =  $path;
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
                    $subModule->link =  $this->checkLink($request->link);
                    $subModule->save();
                    return $subModule;
                }
              

            }
        
            return array(
                status => 'error',
                message => 'Something Went Wrong'
            );
          

        
 
    }
    public function checkLink($link) {
        if (strpos($link, 'youtube') > 0 || strpos($link, 'youtu.be') > 0) {
            preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $link, $match);
            $youtube_id = $match[1];
            return "https://www.youtube.com/watch?v=" . $youtube_id;
        }

            return $link;
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
            $subModule->link = $this->checkLink($request->link);
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
