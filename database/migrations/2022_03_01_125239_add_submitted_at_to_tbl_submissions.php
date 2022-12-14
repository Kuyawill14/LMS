<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubmittedAtToTblSubmissions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tbl_submissions', function (Blueprint $table) {
            $table->timestamp('submitted_at')->after('timeSpent')->nullable();
            $table->timestamp('allow_resubmit')->after('submitted_at')->default(0);
            $table->integer('current_question')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_submissions', function (Blueprint $table) {
            $table->dropColumn('submitted_at');
            $table->dropColumn('allow_resubmit');
            $table->dropColumn('current_question');
        });
    }
}
