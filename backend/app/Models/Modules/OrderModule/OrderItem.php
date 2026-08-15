<?php

namespace App\Models\Modules\OrderModule;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['order_id', 'name', 'price', 'qty', 'total'])]
class OrderItem extends Model
{
    //
}
