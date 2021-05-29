<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblStudentSubModuleProgress extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_student_sub_module_progress', function (Blueprint $table) {
            $table->id();
            $table->integer('sub_module_id');
            $table->integer('main_module_id');
            $table->integer('class_id');
            $table->integer('course_id');
            $table->integer('student_id')->nullable();
            $table->integer('completed');
            $table->string('type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_student_sub_module_progress');
    }
}
