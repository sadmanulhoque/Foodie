<?php

namespace App\Models\Modules\OrderModule;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['order_id', 'name', 'price', 'qty', 'total'])]
class OrderItem extends Model
{
    //
}
