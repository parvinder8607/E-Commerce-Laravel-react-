<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   // database/migrations/xxxx_xx_xx_create_addresses_table.php
public function up()
{
    Schema::create('addresses', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
        $table->string('address_line_1');
        $table->string('address_line_2')->nullable();
        $table->string('city');
        $table->string('state');
        $table->string('zip_code');
        $table->string('country');
        $table->boolean('is_default')->default(false);  // To mark the default address
        $table->timestamps();


        $table->index('user_id');    
        $table->index('is_default');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
