<template>

  <div>
 <div class='wrapper'>
    <tabs :mode="mode">
      <tab title="Create">
        <div>
          <form @submit.prevent @submit="register">
             <p><b>Register a new wallet</b></p>
             <label for="fname">Accont Name{{account}}</label>
    <input type="text" placeholder="Acount Name.." class="form-input" v-model="account">
     <label for="fname">Upload Image</label>
    <input type="file" placeholder="Your name.." class="form-input" @change="carregarImagem($event)"> 
    <button class="button" type="submit" >Register</button>
          </form>
        </div>
      </tab>
      <tab title="Import">
         <form @submit.prevent @submit="onSubmit">
            <p><b>Import another wallet</b></p>
            
             <label for="fname">Accont Name</label>
    <input type="text" placeholder="Acount Name.." class="form-input" v-model="account">
     <label for="fname">Upload Image</label>
    <input type="file" @change="carregarImagem($event)">
          </form>
      </tab>
      <tab title="Connect">
        <p><b>Connect to your wallet</b></p>
         <form @submit.prevent @submit="onSubmit">
             <label for="fname">Accont Name</label>
    <input type="text" placeholder="Acount Name.." class="form-input">
     <label for="fname">Upload Image</label>
    <input type="file" placeholder="Your name.." class="form-input">
          </form>
      </tab>
    </tabs>
  </div>
</div>
</template>

<script>
var Kairos = require('kairos-api');
import * as fb from "../firebase";
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
export default {
  name: 'HelloWorld',
  visible:false,
  components:{
    Tab,
    Tabs
  },
   data () {
    return {
      mode: 'dark',
      account:"",
      image:null
    }
  },
  methods:{
     carregarImagem(e){
                this.image= e.target.files
                console.log(this.image[0])
            },
   onSubmit(){
     console.log("submited successfully",this.account,this.image)
   },
    async register(){
      const ref = fb.storage.ref();
      const url = await ref
        .child(this.image[0].name)
        .put(this.image[0], this.image[0].type)
        .then((snapshot) => snapshot.ref.getDownloadURL());
      console.log("camera on",url)
       var client = new Kairos('0c934715', '4b9075694c2bca085e5b02efe63e7e1d');
      var params = {
        image: url,
        subject_id:this.account,
        gallery_name: 'gallerytest1',
        selector: 'SETPOSE'
      };
      client.enroll(params)   
    // return Promise
  //  result: {
  //    status: <http status code>,
  //    body: <data>
  //  }
  .then((result)=>{
    console.log(result)

  })
  .catch((err)=>{
    console.log(err)
  });
    },
   async login(){
      const ref = fb.storage.ref();
      const url = await ref
        .child(this.image[0].name)
        .put(this.image[0], this.image[0].type)
        .then((snapshot) => snapshot.ref.getDownloadURL());
       var client = new Kairos('0c934715', '4b9075694c2bca085e5b02efe63e7e1d');
      var params = {
       "image":url,
    "gallery_name":"gallerytest1",
    "subject_id":"Elizabeth"
      };
      client.recognize(params) // return Promise
  //  result: {
  //    status: <http status code>,
  //    body: <data>
  //  }
  .then((result)=>{
    console.log(result.body.images[0].candidates[0])

  })
  .catch((err)=>{
    console.log(err)
  });

    }
  },
  mounted () {
    browser.runtime.sendMessage({
      "name":"warren ochieng"
    })
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  }
}
</script>

<style scoped>
.form-input{
 width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

box-sizing: border-box
}
.button {
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 400 !important;
    background-color: #e63946ff;
    color: #fff;
    padding: 23px 50px;
    margin: auto;
    text-align: center;
    display: inline-block !important;
    text-decoration: none;
    border: 0px;
    width: max-content;
    cursor: pointer;
    transition: all 0.3s 0s ease-in-out;
}

.button:hover {
    transform: scale(1.04, 1);
    background-color: rgb(216, 10, 27);
    text-decoration: none;
}

/* add extra functionality in button*/


/*button sizes*/
.btn_sm {
    padding: 17px 40px !important;
}

.btn_md {
    padding: 20px 50px !important;
}

.btn_lg {
    padding: 23px 60px !important;
}


/*make your button block level*/
.btn_block {
    width: 100% !important;
    padding: 22px 30px !important;
}
</style>
