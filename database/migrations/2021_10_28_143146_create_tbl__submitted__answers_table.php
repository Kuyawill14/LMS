<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblSubmittedAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_submitted_answers', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('classwork_id');
            $table->integer('question_id');
            $table->longText('answer')->nullable();
            $table->mediumText('Choices_id')->nullable();
            $table->boolean('isCorrect')->nullable();
            $table->string('type')->nullable();
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
        Schema::dropIfExists('tbl_submitted_answers');
    }
}
