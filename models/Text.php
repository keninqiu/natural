<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "text".
 *
 * @property integer $id
 * @property string $name
 * @property string $value
 * @property string $value_zh
 */
class Text extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'text';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'value', 'value_zh'], 'required'],
            [['name', 'value', 'value_zh'], 'string', 'max' => 50],
            [['name'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'value' => 'Value',
            'value_zh' => 'Value Zh',
        ];
    }
}
