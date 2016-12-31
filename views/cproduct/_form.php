<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Catalog;
use app\models\Product;
/* @var $this yii\web\View */
/* @var $model app\models\CatalogProduct */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="catalog-product-form">

    <?php $form = ActiveForm::begin(); ?>

	<?= $form->field($model, 'catalog_id')
     ->dropDownList(
            ArrayHelper::map(Catalog::find()->asArray()->all(), 'id', 'name_zh')
            ) ?>

	<?= $form->field($model, 'product_id')
     ->dropDownList(
            ArrayHelper::map(Product::find()->asArray()->all(), 'id', 'name_zh')
            ) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
