<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblQuestionAnalyticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_question_analytics', function (Blueprint $table) {
            $table->id();
            $table->integer('question_id');
            $table->integer('correct_count')->nullable();
            $table->integer('wrong_count')->nullable();
            $table->integer('shortest_time')->nullable();
            $table->integer('longest_time')->nullable();
            $table->integer('average_time')->nullable();
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
        Schema::dropIfExists('tbl_question_analytics');
    }
}
