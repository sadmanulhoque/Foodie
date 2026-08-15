<?php

namespace App\Models\Modules\CategoryModule;

use App\Enums\CommonModule\IsFeaturedEnum;
use App\Enums\CommonModule\StatusEnum;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'slug', 'image', 'is_featured', 'order', 'status'])]
class Category extends Model
{
    protected function casts(): array
    {
        return [
            'status' => StatusEnum::class,
            'is_featured' => IsFeaturedEnum::class,
        ];
    }
}
