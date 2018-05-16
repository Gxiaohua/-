import jsonp from 'jsonp';

/*
  http://searchtip.kugou.com/getSearchTip
  ?MusicTipCount=5
  &MVTipCount=2
  &albumcount=2
  &keyword=${this.value}
*/ 
// 根据关键字搜索下拉框使用
let searchTipUrl = `http://searchtip.kugou.com/getSearchTip`
export const searchTip = (params={}) => {
  // 默认参数
  let defaults = {
    MusicTipCount: 5,
    MVTipCount: 2,
    albumcount: 2,
    keyword: ''
  }
  Object.assign(defaults,params)

  return new Promise((resolve,reject) => {
    jsonp(searchTipUrl,{
      param: formatObjectToString(defaults) + '&callback'
    },(e,d) => {
      if(e) reject(e)
      resolve(d)
    })
  })
}

// http://songsearch.kugou.com/song_search_v2?
//callback=jQuery112402722116304235871_1525314503909
//&keyword=纸短情长&page=1&pagesize=30&userid=-1
//&clientver=&platform=WebFilter&tag=em&filter=2
//&iscorrection=1&privilege_filter=0&_=1525314

// 根据歌曲名字获取到相关歌曲
let songSearchUrl = `http://songsearch.kugou.com/song_search_v2`
export const songSearch = (params={}) => {
  // 默认参数
  let defaults = {
    format: "jsonp",
    keyword:'',
    page: 1,
    pagesize:30,
    platform:"WebFilter",
    //tag:"em",
    filter:2,
    iscorrection:1,
    privilege_filter:0
  }
  Object.assign(defaults,params);
  
  return new Promise((resolve,reject) => {
    jsonp(songSearchUrl,{
      param: formatObjectToString(defaults) + '&callback'
    },(e,d) => {
      if(e) reject(e)
      resolve(d)
    })
  })
}


//歌词
/*
  http://www.kugou.com/yy/index.php?r=play/getdata&hash=歌曲hash
*/
let WordOfSong = `http://www.kugou.com/yy/index.php?r=play/getdata`
export const WordSong = (params={}) => {
  let defaults = {
    hash:''
  }
  Object.assign(defaults,params);
  return new Promise((resolve,reject) => {
    jsonp(WordOfSong,{
      param: formatObjectToString(defaults) + '&callback'
    },(e,d) => {
      if(e) reject(e)
      resolve(d)
    })
  })

}


// 格式化对象为&连接
function formatObjectToString(obj){
  return Object.keys(obj).map((item) => {
    return item + '=' + obj[item]
  }).join('&')
}