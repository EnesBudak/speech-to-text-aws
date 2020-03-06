<template>

      <div class="main" style="margin-top:10px">
          <el-row> 
         <el-col :span="12">  
                  <el-form  ref="form" :model="product" label-width="120px">
  <el-form-item label="Ürün Adı">
    <el-input v-model="product.title"></el-input>
  </el-form-item>
  <el-form-item label="Ürün Fiyatı">
    <el-input type="number" v-model="product.price"></el-input>
  </el-form-item>

  <el-form-item label="Satıştamı">
    <el-switch v-model="product.available"></el-switch>
  </el-form-item>
  <el-form-item label="Ürünün Boyutu">
    
    <el-select v-model="product.size" placeholder="Lütfen Seçiniz">
      <el-option label="Medium" value="medium"></el-option>
      <el-option label="Small " value="small"></el-option>
      <el-option label="Large " value="large"></el-option>
      <el-option label="XLarge " value="xlarge"></el-option>
    </el-select>
  </el-form-item>
 
  <el-form-item label="Karekod Verisi">
    <el-input type="textarea" v-model="product.qrCode">
      
    </el-input>
     {{result}}
    <qriously :value="product.qrCode" :size="200" />
     <el-button type="danger" @click="turnCameraOn()">Kamerayı Aç</el-button>

    <div v-if="showCamera" style="height:200px;width:200px">

   
 <qrcode-stream :camera="camera" @decode="onDecode"></qrcode-stream>  
    
    </div>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Ürünü Oluştur</el-button>
    <el-button>İptal</el-button>
  </el-form-item>
</el-form> </el-col>
<el-col :span="6"><div class="" style="margin-left:5px"><h2></h2></div></el-col>

          </el-row>
  
        
        </div> 
</template>

<script>
import axios from 'axios'
export default {
 
  data(){
    return{
     
      product: {
          title: '',
          price: '',
          qrCode:'', 
          size:'',
          available:true,
          

        },
        isCollapse:true,
        result:'deneme',
        camera:'auto',
        showCamera:false
     
    }
  },
  methods:{
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
     
    onSubmit() {
      const url = 'http://localhost:4000/api/product/new'
        axios.post(url,this.product).then((res) =>{
          console.log(this.product);
          if(res.data.success == true){
            this.product = {}
          }
          else{
            this.$notify({
          title: 'Hata!',
          message: 'Ürün eklenirken bir hatayla karşılaşıldı',
          duration: 0
        });
          }
        console.log('submit!');
        })
      },
      onDecode(result){
        this.result = result;
         this.turnCameraOff()
      },
      turnCameraOn(){
        this.camera = 'auto';
        this.showCamera = true;
      },
      turnCameraOff(){
        this.camera = 'off';
        this.showCamera = true;
      }
   
  },
  created(){
     
    }
}
</script>

<style>

</style>