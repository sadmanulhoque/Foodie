<?php

namespace App\Providers\Backend\Modules\AuthModule;

use App\Interfaces\Backend\Modules\AuthModule\AuthInterface;
use App\Repositories\Backend\Modules\AuthModule\AuthRepository;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            AuthInterface::class,
            AuthRepository::class
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
