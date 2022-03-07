<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_main_modules;
use Illuminate\Support\Facades\DB;
class MainModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
     
        $allMainModules = DB::table('tbl_main_modules')
        ->select('tbl_main_modules.*',DB::raw("(SELECT COUNT(*) FROM tbl_student_sub_module_progress WHERE tbl_student_sub_module_progress.main_module_id = tbl_main_modules.id) as student_progress_count"))

        ->leftJoin('tbl_subject_courses', 'tbl_main_modules.course_id', '=', 'tbl_subject_courses.id')
        ->where('tbl_main_modules.course_id', $id )
        ->orderBy('position')
        ->get();
        return $allMainModules;
    }
    
    public function fetchMainAndSubModule($id ) {
        

        $data =[];

        $data['main_module']= $this->fetchMainModule($id);
        $data['sub_module']= $this->fetchSubmodule($id);


        return $data;


    

                    
    }

    public function fetchMainModule($id)
    {
     
        $allMainModules = DB::table('tbl_main_modules')
        ->select('tbl_main_modules.*',DB::raw("(SELECT COUNT(*) FROM tbl_student_sub_module_progress WHERE tbl_student_sub_module_progress.main_module_id = tbl_main_modules.id) as student_progress_count"))

        ->leftJoin('tbl_subject_courses', 'tbl_main_modules.course_id', '=', 'tbl_subject_courses.id')
        ->where('tbl_main_modules.course_id', $id )
        ->orderBy('position')
        ->get();
        return $allMainModules;
    }

    public function removeCDN($link) {
        $txt = explode('.',$link);
        $new = '';
        for($i = 0; $i < count($txt) ; $i++) {

            if($i !=2) {
            $new .= '.' .$txt[$i];

         }




        }

        return  ltrim($new, '.');
    }

    public function fetchSubmodule($id ) {
        //
        $allSubModules = DB::table('tbl_sub_modules')
        ->select('tbl_sub_modules.*', "course_id")
        ->leftJoin('tbl_main_modules', 'tbl_main_modules.id', '=', 'tbl_sub_modules.main_module_id')
        ->where('tbl_main_modules.course_id', $id )
        ->orderBy('tbl_sub_modules.id', 'ASC')
        
        ->get();




        foreach ($allSubModules as  $submodule) {
            $submodule->required_time = $submodule->required_time/ 60;


            $submodule->file_attachment = $this->removeCDN($submodule->file_attachment);
          
        }
        return $allSubModules;
}

public function countSubmoduleOnMainModule($id ) {
    //
    $count = DB::table('tbl_sub_modules')
    ->select('tbl_sub_modules.id')
    ->where('tbl_sub_modules.main_module_id', $id )
    
    ->count();
    return $count;
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
    public function newArrangement(Request $request) {

        $mainModulesReq =  $request->mainModules;
//  return $mainModulesReq ;
        $mainModule  = new tbl_main_modules;
        for($i =0 ; $i < count($mainModulesReq); $i++) {
            DB::table('tbl_main_modules')
            ->where('id', $mainModulesReq[$i]['id'])  // find your user by their email
            ->limit(1)  // optional - to ensure only one record is updated.
            ->update(['position' => $i  ]);
        }

        



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

         $mainModule  = new tbl_main_modules;
         $mainModule->module_name = $request->moduleForm['module_name'];
         $mainModule->description = $request->moduleForm['description'];
         $mainModule->course_id = $request->moduleForm['course_id'];
         $mainModule->position = $request->moduleForm['course_id'] + 1;
         $mainModule->created_by = $userId;
         $mainModule->save();
         return $mainModule;

    }

    public function publishModule(Request $request, $id) {
        $mainModule = tbl_main_modules::find($id);
        if($mainModule){
            // return $request->publishSettings;
                $mainModule->isPublished = $request->publishSettings['isPublished'];
                $mainModule->date_to =$request->publishSettings['date_to'];
                $mainModule->date_from =$request->publishSettings['date_from'];
        
   
            $mainModule->save();
            return $request->publishSettings['isPublished'] == 1 ? 'published' : 'unpublished';
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
        $mainModule = tbl_main_modules::find($id);
        if($mainModule){
            $mainModule->module_name = $request->moduleForm['module_name'];
            $mainModule->description = $request->moduleForm['description'];
            $mainModule->course_id = $request->moduleForm['course_id'];
            $mainModule->save();
            return $mainModule;
        }
     

    }
    public function deleteModule($id)
    {
       $subModuleCount =  $this->countSubmoduleOnMainModule($id);
        $message = array();
        $allSubModulesProgressCount = DB::table('tbl_student_sub_module_progress')
        ->select('tbl_student_sub_module_progress.*')
        ->leftJoin('tbl_sub_modules', 'tbl_sub_modules.id', '=', 'tbl_student_sub_module_progress.sub_module_id')
        ->where('tbl_student_sub_module_progress.main_module_id', $id )
        ->orderBy('tbl_sub_modules.id', 'ASC')
        ->count();

        $mainModule = tbl_main_modules::find($id);

        if($mainModule) {
            if( $allSubModulesProgressCount > 0 || $subModuleCount > 0) {
                $message = [ 'status'=> 0, 'message' => 'Unable to delete this module, It already have Items on it, 
                        You can still edit the title and description input.'];
            } else {
                $mainModule->delete();
                $message = [ 'status'=> 1, 'message' => 'Module deleted successfully'];
            }
     
           
    
        }

        return  $message ;
    
       
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
