<?php

namespace App\Interfaces\Backend\Modules\AuthModule;

use App\Models\User;

interface AuthInterface
{
    public function register(array $data): User;
}
