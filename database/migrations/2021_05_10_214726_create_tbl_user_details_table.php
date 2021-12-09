<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_user_details', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('firstName');
            $table->string('middleName')->nullable();
            $table->string('lastName');
            $table->integer('student_id')->nullable();
            $table->string('address')->nullable();
            $table->string('cp_no')->nullable();
            $table->mediumText('profile_pic')->nullable();
            $table->string('social_account')->nullable();
            $table->string('info')->nullable();
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
        Schema::dropIfExists('tbl_user_details');
    }
}
