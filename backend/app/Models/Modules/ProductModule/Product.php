<?php

namespace App\Models\Modules\ProductModule;

use App\Enums\CommonModule\IsFeaturedEnum;
use App\Enums\CommonModule\StatusEnum;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'slug', 'desc', 'price', 'qty', 'image', 'is_featured', 'order', 'status'])]
class Product extends Model
{
    protected function casts(): array
    {
        return [
            'status' => StatusEnum::class,
            'is_featured' => IsFeaturedEnum::class,
        ];
    }
}
