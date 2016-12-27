<?php
namespace app\controllers\api\pub;

use yii\web\Controller;
use Yii;
class CatalogproductController extends Controller
{
    public function actionIndex($id) //http://natural/api/pub/catalogproduct/index?id=1
    {
		$connection = Yii::$app->getDb();
		$command = $connection->createCommand("select product.* from product,catalog_product where catalog_product.catalog_id=$id and catalog_product.product_id=product.id");

		$result = $command->queryAll();

		$command2 = $connection->createCommand("select * from catalog where id=$id");

		$result2 = $command2->queryAll();

		$return = [
			"catalog" => $result2?$result2[0]:"",
			"products" => $result
		];
    	return json_encode($return);
    }
}