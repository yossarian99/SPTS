<?php

namespace App\Models\Trainer;

use Illuminate\Database\Eloquent\Model;

class TrCertificate extends Model
{
    protected $table = 'trainers_certificates';
    protected $hidden = ['id','trainer_id'];
    protected $fillable = ['name_of_institution','name_of_course', 'begin_date', 'end_date', 'trainer_id'];


    public function trainer(){
        return $this->belongsTo('Trainer');
    }
}
