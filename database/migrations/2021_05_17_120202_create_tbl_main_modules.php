<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblMainModules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_main_modules', function (Blueprint $table) {
            $table->id();
            $table->integer('course_id');
       
            $table->integer('created_by');
            $table->string('module_name');
            $table->string('description');
            $table->integer('position');
            $table->integer('isPublished');
            $table->date('date_from');
            $table->date('date_to');
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
        Schema::dropIfExists('tbl_main_modules');
    }
}
