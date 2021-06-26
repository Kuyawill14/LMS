<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblClassworksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_classworks', function (Blueprint $table) {
            $table->id();
            $table->integer("course_id");
            $table->integer("module_id")->nullable();
            $table->integer("user_id");
            $table->string("type");
            $table->string("title");
            $table->mediumText("instruction");
            $table->mediumText("attachment_name")->nullable();
            $table->string("attachment_size")->nullable(); 
            $table->mediumText("attachment")->nullable(); 
            $table->integer("duration")->nullable();
            $table->integer("points")->nullable();
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
        Schema::dropIfExists('tbl_classworks');
    }
}
