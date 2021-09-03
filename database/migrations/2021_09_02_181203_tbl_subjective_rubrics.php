<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblSubjectiveRubrics extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('tbl_subjective_rubrics', function (Blueprint $table) {
            $table->id();
            $table->integer('classwork_id');
            $table->integer('points');
            $table->string('criteria_name');
            $table->string('description');
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
        //
        Schema::dropIfExists('tbl_subjective_rubrics');
    }
}
