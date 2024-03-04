<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('rivers', function (Blueprint $table) {
            $table->dropColumn('message');
            $table->string('lokasi');
            $table->string('tautan');
            $table->integer('ec');
            $table->integer('tds');
            $table->float('salinitas');
            $table->float('ph');
            $table->integer('orp');
            $table->integer('sg');
            $table->float('suhu');
            $table->string('kualitas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('rivers', function (Blueprint $table) {
            Schema::dropIfExists('rivers');
        });
    }
};
