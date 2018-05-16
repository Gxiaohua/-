
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {getSongs} from '@/server/index'
let store = new Vuex.Store({
    state:{
        num:[]
    },
    mutations:{
        changeN(state,params){
            state.num = params.num
        }
    },
    actions:{
        changeName(store){
            // store.commit('changeN',pro)
            getSongs().then(({data})=>{
                // this.list = data.data.list
                store.commit('changeN',{num:data.data.list})
            })
        }
    }

})

export default store