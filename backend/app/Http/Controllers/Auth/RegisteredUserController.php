<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\Backend\Modules\AuthModule\AuthService;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    public function __construct(
        protected AuthService $service
    ) {}

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(RegisterRequest $request): JsonResponse
    {
        try {
            $user = $this->service->registerUser($request->validated());

            event(new Registered($user));

            Auth::login($user);

            return response()->json([
                'message' => 'User registered successfully.',
            ], 201);
        } catch (Exception $e) {
            Log::error('Error registering user: '.$e->getMessage());

            return response()->json([
                'message' => 'Something went wrong while registering the user.',
            ], 500);
        }
    }
}
