<?php

namespace App\Services\Backend\Modules\AuthModule;

use App\Enums\CommonModule\StatusEnum;
use App\Interfaces\Backend\Modules\AuthModule\AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function __construct(
        protected AuthInterface $authRepository
    ) {}

    public function handleRegster(array $data): User
    {
        $data['password'] = Hash::make($data['password']);
        $data['role'] = 'user';
        $data['status'] = StatusEnum::ACTIVE->value;

        return $this->registerUser($data);
    }

    public function registerUser(array $data): User
    {
        return $this->authRepository->register($data);
    }
}
