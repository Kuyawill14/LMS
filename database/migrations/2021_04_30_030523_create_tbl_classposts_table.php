<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblClasspostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_classposts', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id");
            $table->integer("course_id");
            $table->integer("class_id");
            $table->integer("announcement_id");
            $table->integer("classwork_id");
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
        Schema::dropIfExists('tbl_classposts');
    }
}
