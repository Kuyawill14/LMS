<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblClassClassworksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_class_classworks', function (Blueprint $table) {
            $table->id();
            $table->integer('class_id');
            $table->integer('classwork_id');
            $table->boolean("availability")->default(0);
            $table->dateTime("from_date")->nullable();
            $table->dateTime("to_date")->nullable();
            $table->boolean("showAnswer")->default(0);
            $table->boolean("showAnswerType")->nullable();
            $table->dateTime("showDateFrom")->nullable();
            $table->dateTime("showDateTo")->nullable();
            $table->boolean("response_late")->default(0);
            $table->integer("grading_criteria")->nullable();
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
        Schema::dropIfExists('tbl_class_classworks');
    }
}
