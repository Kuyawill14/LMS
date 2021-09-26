<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        $newDepartment  = new tbl_department;
        $newDepartment->name = $request->name;
        $newDepartment->description = $request->description;
        $newDepartment->save();
        return $newDepartment;
       
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
        $Department = tbl_department::find($id);
        if($Department){
            $Department->name = $request->name;
            $Department->description = $request->description;
            $Department->save();
            return response()->json([
                "message" => "Department successfully updated!",
                "success" => true
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
