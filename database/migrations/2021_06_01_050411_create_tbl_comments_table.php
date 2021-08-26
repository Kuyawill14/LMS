<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_comments', function (Blueprint $table) {
            $table->id();
            $table->integer('post_id')->nullable();
            $table->integer('classwork_id')->nullable();
            $table->integer('user_id');
            $table->integer('from_user')->nullable();
            $table->string('type')->nullable();
            $table->integer('to_user')->nullable();
            $table->integer('course_id');
            $table->mediumText('content');
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
        Schema::dropIfExists('tbl_comments');
    }
}
