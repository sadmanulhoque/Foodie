<?php

namespace App\Enums\CommonModule;

enum StatusEnum: string
{
    case ACTIVE = 'active';
    case INACTIVE = 'inactive';

    public function label(): string
    {
        return match ($this) {
            self::ACTIVE => 'Active',
            self::INACTIVE => 'Inactive',
        };
    }

    public function badge(): string
    {
        return match ($this) {
            self::ACTIVE => '<span class="badge bg-green text-green-fg">'.$this->label().'</span>',
            self::INACTIVE => '<span class="badge bg-red text-red-fg">'.$this->label().'</span>',
        };
    }
}
