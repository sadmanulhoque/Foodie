<?php

use App\Providers\AppServiceProvider;
use App\Providers\Backend\Modules\AuthModule\AuthServiceProvider;

return [
    AppServiceProvider::class,
    AuthServiceProvider::class,
];
