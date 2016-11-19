<?php
namespace app\controllers;

use yii\rest\ActiveController;
use yii\filters\auth\HttpBearerAuth;
use Yii;

class ApiController extends ActiveController
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

    public function actionCatalog() {
    	$headers = Yii::$app->request->headers;
    	$Authorization = $headers->get('Authorization');
    	return [
    		"id" => 111,
    		"username" => "faefawefwa",
    		"Authorization" => $Authorization
    	];
    }

}