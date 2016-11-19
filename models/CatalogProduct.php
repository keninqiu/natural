<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "catalog_product".
 *
 * @property integer $id
 * @property integer $catalog_id
 * @property integer $product_id
 */
class CatalogProduct extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'catalog_product';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['catalog_id', 'product_id'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'catalog_id' => Yii::t('app', 'Catalog ID'),
            'product_id' => Yii::t('app', 'Product ID'),
        ];
    }
}
