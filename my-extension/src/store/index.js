import Vue from 'vue'
import Vuex from 'vuex'
var Kairos = require('kairos-api');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    register(){
      var client = new Kairos('471b9862', '0fe4de936fd2fca91f9093ba836091ba');
      var params = {
        image: 'http://media.kairos.com/kairos-elizabeth.jpg',
        subject_id: 'antony kimani',
        gallery_name: 'gallerytest1',
        selector: 'SETPOSE'
      };
      client.enroll(params)   // return Promise
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

    }
  },
  modules: {
  }
})
