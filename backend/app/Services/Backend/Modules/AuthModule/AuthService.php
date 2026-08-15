<?php

namespace App\Services\Backend\Modules\AuthModule;

use App\Interfaces\Backend\Modules\AuthModule\AuthInterface;
use App\Models\User;

class AuthService
{
    public function __construct(
        protected AuthInterface $authRepository
    ) {}

    public function registerUser(array $data): User
    {
        return $this->authRepository->register($data);
    }
}
