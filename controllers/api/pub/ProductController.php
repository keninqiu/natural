<?php
namespace app\controllers\api\pub;

use yii\rest\ActiveController;

class ProductController extends ActiveController
{
    public $modelClass = 'app\models\product';
}