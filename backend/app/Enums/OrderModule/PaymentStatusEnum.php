<?php

namespace App\Enums\OrderModule;

enum PaymentStatusEnum: string
{
    case PAID = 'paid';
    case NOT_PAID = 'not_paid';

    public function label(): string
    {
        return match ($this) {
            self::PAID => 'Paid',
            self::NOT_PAID => 'Not Paid',
        };
    }

    public function badge(): string
    {
        return match ($this) {
            self::PAID => '<span class="badge bg-green text-green-fg">'.$this->label().'</span>',
            self::NOT_PAID => '<span class="badge bg-red text-red-fg">'.$this->label().'</span>',
        };
    }
}
