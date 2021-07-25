<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblSubjectCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_subject_courses', function (Blueprint $table) {
            $table->id()->startingValue(1);
            $table->string('course_code');
            $table->string('course_name');
            $table->string('v_classroom_link')->length(1024);;
            $table->longtext('course_description')->nullable() ;
            $table->mediumText('course_picture');
            $table->tinyInteger('completed')->default(0);
            $table->softDeletes();
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
        Schema::dropIfExists('tbl_subject_courses');
    }
}
