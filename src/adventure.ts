import Model from './model'
import Place from './place'

export default class Adventure extends Model {
  placeId: number
  name: string
  minutes: number

  constructor(data: any) {
    super(data)
    this.placeId = data.placeId
    this.name = data.name
    this.minutes = data.minutes
  }

  place(): Place {
    return Place.find(this.placeId)
  }

  static data() : any[] {
    return [
      {id: 1, placeId: 1, name: 'はじまりの森', minutes: 3},
      {id: 2, placeId: 1, name: 'そよ風の丘', minutes: 3},
      {id: 3, placeId: 1, name: 'ヒワリ畑', minutes: 10},
      {id: 4, placeId: 1, name: '水鏡の湖畔', minutes: 20},
      {id: 5, placeId: 1, name: '地下水路', minutes: 50},
      {id: 6, placeId: 2, name: '横穴の洞窟', minutes: 5},
      {id: 7, placeId: 2, name: '野盗のアジト', minutes: 45},
      {id: 8, placeId: 3, name: 'デコボコ山道', minutes: 5},
      {id: 9, placeId: 3, name: '急流渓谷', minutes: 15},
      {id: 10, placeId: 3, name: '崖下の滝壺', minutes: 90},
      {id: 11, placeId: 3, name: '断層の窪地', minutes: 90},
      {id: 12, placeId: 3, name: '森の獣道', minutes: 90},
      {id: 13, placeId: 4, name: '鉄床トンネル', minutes: 15},
      {id: 14, placeId: 4, name: '緑脈坑道', minutes: 20},
      {id: 15, placeId: 4, name: '硫黄泉', minutes: 30},
      {id: 16, placeId: 4, name: '噴火火口', minutes: 60},
      {id: 17, placeId: 5, name: 'カラサ砂丘', minutes: 35},
      {id: 18, placeId: 5, name: '石畳の回廊', minutes: 45},
      {id: 19, placeId: 5, name: '祭典の広場', minutes: 60},
      {id: 20, placeId: 5, name: '白砂の涸れ川', minutes: 55},
      {id: 21, placeId: 6, name: '静寂の森', minutes: 15},
      {id: 22, placeId: 7, name: '巡礼口', minutes: 90},
      {id: 23, placeId: 7, name: '聖樹下部', minutes: 120},
    ]
  }
}

Adventure.init()
