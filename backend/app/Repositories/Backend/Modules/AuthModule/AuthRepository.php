<?php

namespace App\Repositories\Backend\Modules\AuthModule;

use App\Interfaces\Backend\Modules\AuthModule\AuthInterface;
use App\Models\User;

class AuthRepository implements AuthInterface
{
    public function register(array $data): User
    {
        return User::create($data);
    }
}
