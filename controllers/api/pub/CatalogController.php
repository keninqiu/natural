<?php
namespace app\controllers\api\pub;

use yii\web\Controller;
use Yii;

class CatalogController extends Controller
{
    public function actionIndex() //http://natural/api/pub/catalogproduct/index?id=1
    {
		$connection = Yii::$app->getDb();
		$command = $connection->createCommand("select * from catalog");

		$result = $command->queryAll();

    	return json_encode($result);
    }
}
