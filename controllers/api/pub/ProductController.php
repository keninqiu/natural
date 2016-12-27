<?php
namespace app\controllers\api\pub;

use yii\web\Controller;
use Yii;
class ProductController  extends Controller
{
    public function actionIndex($id) //http://natural/api/pub/catalogproduct/index?id=1
    {
		$connection = Yii::$app->getDb();
		$command = $connection->createCommand("select * from product where id=$id");

		$result = $command->queryAll();

		if($result) {
			$result = $result[0];
		}
    	return json_encode($result);
    }
}