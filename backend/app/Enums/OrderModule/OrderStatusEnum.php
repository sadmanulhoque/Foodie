<?php

namespace App\Enums\OrderModule;

enum OrderStatusEnum: string
{
    case PENDING = 'pending';
    case PROCESSING = 'processing';
    case OUT_FOR_DELIVERY = 'out_for_delivery';
    case DELIVERED = 'delivered';
    case COMPLETED = 'completed';
    case CANCELED = 'canceled';

    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'Pending',
            self::PROCESSING => 'Processing',
            self::OUT_FOR_DELIVERY => 'Out for Delivery',
            self::DELIVERED => 'Delivered',
            self::COMPLETED => 'Completed',
            self::CANCELED => 'Canceled',
        };
    }

    public function badge(): string
    {
        return match ($this) {
            self::PENDING => '<span class="badge bg-warning text-warning-fg">'.$this->label().'</span>',
            self::PROCESSING => '<span class="badge bg-warning text-warning-fg">'.$this->label().'</span>',
            self::OUT_FOR_DELIVERY => '<span class="badge bg-info text-info-fg">'.$this->label().'</span>',
            self::DELIVERED => '<span class="badge bg-primary text-primary-fg">'.$this->label().'</span>',
            self::COMPLETED => '<span class="badge bg-success text-success-fg">'.$this->label().'</span>',
            self::CANCELED => '<span class="badge bg-danger text-danger-fg">'.$this->label().'</span>',
        };
    }
}
