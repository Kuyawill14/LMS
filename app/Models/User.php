<?php

namespace App\Models;

use App\Notifications\VerifyNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

use Carbon\Carbon;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, LogsActivity;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role',
        'student_id_number',
        'email',
        'password',
        'email_verified_at',
        'device_key',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function tbl_userDetails()
    {
        return $this->hasOne(tbl_userDetails::class, 'user_id');
    }

    public function tbl_user_departments()
    {
        return $this->hasOne(tbl_user_departments::class, 'user_id');
    }

    // /**
    //  * The accessors to append to the model's array form.
    //  *
    //  * @var array
    //  */
    // protected $appends = [
    //     'photo_url',
    // ];

    // /**
    //  * Get the profile photo URL attribute.
    //  *
    //  * @return string
    //  */
    // public function getPhotoUrlAttribute()
    // {
    //     return vsprintf('https://www.gravatar.com/avatar/%s.jpg?s=200&d=%s', [
    //         md5(strtolower($this->email)),
    //         $this->name ? urlencode("https://ui-avatars.com/api/$this->name") : 'mp',
    //     ]);
    // }

    public function sendEmailVerificationNotification() {
        $now = now()->addSeconds(2);
        $this->notify((new VerifyNotification())->delay($now));
    }
}
