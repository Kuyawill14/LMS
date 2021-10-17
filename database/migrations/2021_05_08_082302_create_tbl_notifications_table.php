<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_notifications', function (Blueprint $table) {
            $table->id();
            $table->integer('course_id')->nullable();
            $table->integer('class_id')->nullable();
            $table->integer('from_id');
            $table->integer('user_id_to')->nullable();
            $table->integer('from_course')->nullable();
            $table->string('message');
            $table->string('notification_attachments')->nullable();
            $table->integer('notification_type');
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
        Schema::dropIfExists('tbl_notifications');
    }
}
