<?php

namespace App\Models\Modules\CartModule;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['cart_id', 'product_id', 'price', 'qty'])]
class CartItem extends Model
{
    //
}
