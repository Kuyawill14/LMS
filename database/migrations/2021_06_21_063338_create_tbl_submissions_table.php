<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblSubmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_submissions', function (Blueprint $table) {
            $table->id();
            $table->integer('classwork_id');
            $table->integer('class_classwork_id');
            $table->integer('user_id');
            $table->mediumText('Submitted_Answers')->nullable();
            $table->integer('points')->default(0);
            $table->boolean("graded")->default(0);
            $table->string('status');
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
        Schema::dropIfExists('tbl_submissions');
    }
}
