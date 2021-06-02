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
            $table->integer("user_id");
            $table->string("type");
            $table->string("title");
            $table->mediumText("description");
            $table->dateTime("due_date");
            $table->integer("status");
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
