import Vue from 'vue'
import Router from 'vue-router'

//歌手信息
import Sort from '@/views/singer/singersort'
//首页
import In from '@/views/index/index'
//歌单信息
import songList from '@/views/edit/songlistsort'
// //歌手
import singer from '@/views/singer/singer'
//歌单
import edit from '@/views/edit/edit'
//新歌
import newsongs from '@/views/newsongs/newsongs'
//播放
// import radio from '@/views/singer/radio'
//每一为歌手相对应的歌曲
import everySinger from '@/views/singer/everySingername'
//搜索相对应的歌曲
import singersName from '@/views/search/singersName'

import songlistsort from '@/views/edit/songlistsort'
//歌词
import SongC from '@/views/SongC/SongC'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
      {
        path:'/',
        name:'In',
        component:In
      },
      {
        path:'/singer',
        name:'singer',
        component:singer
      },
      {
        path:'/newsongs/:n?',
        name:'newsongs',
        component:newsongs
      },
      {
        path:'/edit',
        name:'edit',
        component:edit
      }, 
      {
        path:'/SongC',
        name:'SongC',
        component:SongC
      },
      {
        path:'/Sort/:a?',
        name:'Sort',
        component: Sort,
        props: true  // 给使用的组件传入props，props的key值就是a
      },
      {
        path:'/songList/:b?',
        name:'songList',
        component:songList,
        props: true  // 给使用的组件传入props，props的key值就是b
    },
    {
      path:'/everySinger/:c?',
      name:'everySinger',
      component:everySinger,
      props: true  // 给使用的组件传入props，props的key值就是b
    },
    {
      path:'/singersName/:d?',
      name:'singersName',
      component:singersName,
      props: true  // 给使用的组件传入props，props的key值就是b
    },
    {
      path:'/songlistsort/:l?',
      name:'songlistsort',
      component:songlistsort,
      props: true  // 给使用的组件传入props，props的key值就是b
    },
  ]
})
