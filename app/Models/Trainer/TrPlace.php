<?php

namespace App\Models\Trainer;

use Illuminate\Database\Eloquent\Model;

class TrPlace extends Model
{
    protected $table = 'trainers_places';
    protected $hidden = ['trainer_id','created_at','updated_at'];

    public function trainer(){
        return $this->belongsTo('Trainer');
    }
}
