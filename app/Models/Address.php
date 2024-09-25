<?php
// app/Models/Address.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'user_id', 'address_line_1', 'address_line_2', 'city', 'state', 'zip_code', 'country', 'is_default'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
