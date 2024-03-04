<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class River extends Model
{
    use HasFactory;

    protected $fillable = [
        'lokasi',
        'tautan',
        'ec',
        'tds',
        'salinitas',
        'ph',
        'orp',
        'sg',
        'suhu',
        'kualitas'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
