<?php

namespace App\Repositories\Backend\Modules\AuthModule;

use App\Interfaces\Backend\Modules\AuthModule\AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthRepository implements AuthInterface
{
    public function register(array $data): User
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => 'user',
        ]);
    }
}
