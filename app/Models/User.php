<?php 

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'name', 'email', 'password', 'phone_number', 'address', 'role'
    ];

    protected $hidden = ['password'];
    
    public function orders() {
        return $this->hasMany(Order::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }

  
public function addresses() {
    return $this->hasMany(Address::class);
}

public function defaultAddress() {
    return $this->hasOne(Address::class)->where('is_default', true);
}

}
