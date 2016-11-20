<?php
namespace app\controllers\api\pri;

use yii\rest\ActiveController;
use yii\filters\auth\HttpBearerAuth;

//curl -i -H "Accept:application/json" -H "Authorization: Bearer 100-token" "http://natural/api/pri/tests"
class TestController extends ActiveController
{
    public $modelClass = 'app\models\catalog';
	public function init()
	{
	    parent::init();
	    \Yii::$app->user->enableSession = false;
	}   
	
	public function behaviors()
	{
	    $behaviors = parent::behaviors();
	    $behaviors['authenticator'] = [
	        'class' => HttpBearerAuth::className(),
	    ];
	    return $behaviors;
	}	 
}