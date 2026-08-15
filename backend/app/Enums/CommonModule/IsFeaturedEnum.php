<?php

namespace App\Enums\CommonModule;

enum IsFeaturedEnum: string
{
    case YES = 'yes';
    case NO = 'no';

    public function label(): string
    {
        return match ($this) {
            self::YES => 'Yes',
            self::NO => 'No',
        };
    }

    public function badge(): string
    {
        return match ($this) {
            self::YES => '<span class="badge bg-green text-green-fg">'.$this->label().'</span>',
            self::NO => '<span class="badge bg-red text-red-fg">'.$this->label().'</span>',
        };
    }
}
