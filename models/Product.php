<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product".
 *
 * @property integer $id
 * @property string $name
 * @property string $name_zh
 * @property string $description
 * @property string $description_zh
 * @property string $keyword
 * @property integer $price
 * @property integer $price_zh
 * @property string $specification
 * @property string $specification_zh
  * @property string $made_in
 * @property string $made_in_zh
 * @property integer $stock
 * @property string $image1
 * @property string $image2
 * @property string $image3
 * @property string $image4
 * @property string $image5
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * @var UploadedFile[]
     */
    public $imageFiles;

    /**
     * @var UploadedFile1
     */
    public $imageFile1;    
    /**
     * @var UploadedFile2
     */
    public $imageFile2;    
    /**
     * @var UploadedFile3
     */
    public $imageFile3;    
    /**
     * @var UploadedFile4
     */
    public $imageFile4;    
    /**
     * @var UploadedFile5
     */
    public $imageFile5;                    
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'product';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['price', 'price_zh', 'stock'], 'integer'],
            [['name', 'name_zh','image1','image2','image3','image4','image5'], 'string', 'max' => 200],
            [['description', 'description_zh', 'keyword','specification','specification_zh','made_in','made_in_zh'], 'string', 'max' => 1000],
            [['name'], 'unique'],
            [['imageFiles'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg,jpeg', 'maxFiles' => 5],
            [['imageFile1'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg,jpeg'],
            [['imageFile2'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg,jpeg'],
            [['imageFile3'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg,jpeg'],
            [['imageFile4'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg,jpeg'],
            [['imageFile5'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg,jpeg'],

        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'name_zh' => Yii::t('app', 'Name Zh'),
            'description' => Yii::t('app', 'Description'),
            'description_zh' => Yii::t('app', 'Description Zh'),
            'keyword' => Yii::t('app', 'Keyword'),
            'price' => Yii::t('app', 'Price'),
            'price_zh' => Yii::t('app', 'Price Zh'),
            'specification' => Yii::t('app', 'Specification'),
            'specification_zh' => Yii::t('app', 'Specification Zh'),
            'made_in' => Yii::t('app', 'Made In'),
            'made_in_zh' => Yii::t('app', 'Made In Zh'),                        
            'stock' => Yii::t('app', 'Stock'),
            'image1' => Yii::t('app', 'Image1'),
            'image2' => Yii::t('app', 'Image2'),
            'image3' => Yii::t('app', 'Image3'),
            'image4' => Yii::t('app', 'Image4'),
            'image5' => Yii::t('app', 'Image5'),
        ];
    }

    public function uploadSeperate() {
        if (true) { 
            if($this->imageFile1) {
                $image = '/uploads/' . $this->id . "/" . $this->imageFile1->baseName . '.' . $this->imageFile1->extension;
                $this->image1 = $image;
                $this->imageFile1->saveAs(Yii::getAlias('@app') . $image);
            }

            if($this->imageFile2) {
                $image = '/uploads/' . $this->id . "/" . $this->imageFile2->baseName . '.' . $this->imageFile2->extension;
                $this->image2 = $image;
                $this->imageFile2->saveAs(Yii::getAlias('@app') . $image);
            }

            if($this->imageFile3) {
                $image = '/uploads/' . $this->id . "/" . $this->imageFile3->baseName . '.' . $this->imageFile3->extension;
                $this->image3 = $image;
                $this->imageFile3->saveAs(Yii::getAlias('@app') . $image);  
            } 

            if($this->imageFile4) {
                $image = '/uploads/' . $this->id . "/" . $this->imageFile4->baseName . '.' . $this->imageFile4->extension;
                $this->image4 = $image;
                $this->imageFile4->saveAs(Yii::getAlias('@app') . $image);   
            }

            if($this->imageFile5) {
                $image = '/uploads/' . $this->id . "/" . $this->imageFile5->baseName . '.' . $this->imageFile5->extension;
                $this->image5 = $image;
                $this->imageFile5->saveAs(Yii::getAlias('@app') . $image);   
            }                           
        }
    }

    public function upload()
    {
        if ($this->validate()) { 
            mkdir (Yii::getAlias('@app') . '/uploads/' . $this->id);
            //$this->image1 = $this->image2 = $this->image3 = $this->image4 = $this->image5 = "";
            foreach ($this->imageFiles as $file) {
                
                $image = '/uploads/' . $this->id . "/" . $file->baseName . '.' . $file->extension;
                if(!$this->image1) {
                    $this->image1 = $image;
                }
                else if(!$this->image2) {
                    $this->image2 = $image;
                }
                else if(!$this->image3) {
                    $this->image3 = $image;
                }
                else if(!$this->image4) {
                    $this->image4 = $image;
                }
                else if(!$this->image5) {
                    $this->image5 = $image;
                }                                                
                $file->saveAs(Yii::getAlias('@app') . $image);
            }
            return true;
        } else {
            return false;
        }
    }    
}
