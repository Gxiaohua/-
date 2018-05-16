<template>
  <div id="app">
    <h1 class="top">音乐</h1>
     <header class="head">
            <nav class="wrap">
                <!-- <a href="javascript:;">音乐人</a>
                <a href="javascript:;">歌单</a>
                <a href="javascript:;">排行榜</a>
                <a href="javascript:;">专题</a> -->
                <router-link :to = "{name:'singer'}">歌手</router-link>
                <router-link :to = "{name:'edit'}">歌单</router-link>
                <router-link :to= "{name:'newsongs'}">新歌</router-link>
                 <!-- <input type="text" class="inp-val" placeholder="搜索">
                  -->
                  <search></search>
            </nav>
        </header>
     <router-view></router-view>
  </div>    
</template>

<script>
import search from '@/views/search/search'
export default {
  name: 'App',
  components:{
    search
  }

}
</script>

<style>

</style>
