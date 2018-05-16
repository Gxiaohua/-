import axios from 'axios'

let oneLeve = axios.create({
  responseType: 'json',
  transformResponse(data){
    let o = {}
    if(data.list) {
      o.data = data.list;
      o.origin = 'singer'
    }else if(data.banner){
      o.data = data.data;
      o.banner = data.banner
      o.origin = 'home'
    }else if(data.rank){
      o.data = data.rank.list;
      o.origin = 'rank'
    }else if(data.plist){
      o.data = data.plist.list.info;
      o.origin = 'plist'
    }
    return o;
  }
})

// 获取banner和新歌
export const getNewSongs = () => {
  return oneLeve('/proxy/?json=true')
}

export const getGoodSongsInfo = () => {
  return oneLeve('/proxy/plist/index&json=true')
}

export const getRankList = () => {
  return oneLeve('/proxy/rank/list&json=true')
}


export const getHotSinger = () => {
  return oneLeve('/proxy/singer/class&json=true')
}
