<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblVaccinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_vaccinations', function (Blueprint $table) {
            $table->id();
            $table->string('student_id')->nullable();
            $table->string('name')->nullable();
            $table->string('program')->nullable();
            $table->string('year_level')->nullable();
            $table->string('vaccine_status')->nullable();
            $table->string('vaccine_brand')->nullable();
            $table->string('first_dose')->nullable();
            $table->string('second_dose')->nullable();
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
        Schema::dropIfExists('tbl_vaccinations');
    }
}
