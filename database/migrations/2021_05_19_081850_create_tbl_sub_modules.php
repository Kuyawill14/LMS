<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblSubModules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_sub_modules', function (Blueprint $table) {
            $table->id();
            $table->integer('main_module_id');
            $table->string('sub_module_name');
            $table->mediumText('description');
            $table->string('type');
            $table->string('required_time');
            $table->string('file_attachment')->nullable();
            $table->string('link')->nullable();
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
        Schema::dropIfExists('tbl_sub_modules');
    }
}
