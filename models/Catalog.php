<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "catalog".
 *
 * @property integer $id
 * @property integer $parent_id
 * @property string $name
 * @property string $name_zh
 * @property integer $sequence
 */
class Catalog extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'catalog';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['parent_id', 'sequence'], 'integer'],
            [['name', 'name_zh'], 'required'],
            [['name', 'name_zh'], 'string', 'max' => 50],
            [['name'], 'unique'],
            [['name_zh'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'parent_id' => Yii::t('app', 'Parent ID'),
            'name' => Yii::t('app', 'Name'),
            'name_zh' => Yii::t('app', 'Name Zh'),
            'sequence' => Yii::t('app', 'Sequence'),
        ];
    }
}
