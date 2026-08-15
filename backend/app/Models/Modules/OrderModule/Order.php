<?php

namespace App\Models\Modules\OrderModule;

use App\Enums\CommonModule\IsFeaturedEnum;
use App\Enums\CommonModule\StatusEnum;
use App\Enums\OrderModule\OrderStatusEnum;
use App\Enums\OrderModule\PaymentStatusEnum;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['grand_total', 'sub_total', 'discount', 'delivery_charge', 'name', 'email', 'phone', 'address', 'payment_method', 'payment_status', 'order_status'])]
class Order extends Model
{
    protected function casts(): array
    {
        return [
            'status' => StatusEnum::class,
            'is_featured' => IsFeaturedEnum::class,
            'order_status' => OrderStatusEnum::class,
            'payment_status' => PaymentStatusEnum::class,
        ];
    }
}
