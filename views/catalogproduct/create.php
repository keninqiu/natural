<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\CatalogProduct */

$this->title = Yii::t('app', 'Create Catalog Product');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Catalog Products'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="catalog-product-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
