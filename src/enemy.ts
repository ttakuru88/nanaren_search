import Model from './model'

// form: 魔0, 形1, 獣2, 無3, 龍4
export default class Enemy extends Model {
  name: string
  placeId: number
  lv: number
  formation: number[]
  aromaId: number

  constructor(data: any) {
    super(data)
    this.name = data.name
    this.placeId = data.placeId
    this.lv = data.lv
    this.formation = data.formation
    this.aromaId = data.aromaId
  }

  static data() : any[] {
    return [
      {id: 1, placeId: 1, name: '?', lv: 5, formation: [2], aromaId: null},
      {id: 2, placeId: 1, name: '?', lv: 7, formation: [1], aromaId: null},
      {id: 3, placeId: 1, name: '?', lv: 10, formation: [2], aromaId: null},
      {id: 4, placeId: 1, name: '?', lv: 16, formation: [3], aromaId: null},
      {id: 5, placeId: 1, name: '?', lv: 21, formation: [0, 0, 0], aromaId: null},
      {id: 6, placeId: 1, name: '?', lv: 32, formation: [0], aromaId: null},
      {id: 7, placeId: 1, name: '?', lv: 45, formation: [1], aromaId: null},
      {id: 8, placeId: 1, name: '?', lv: 53, formation: [1], aromaId: null},
      {id: 9, placeId: 2, name: '?', lv: 8, formation: [2], aromaId: null},
      {id: 10, placeId: 2, name: 'ベテラン野盗', lv: 28, formation: [2, 2, 2], aromaId: null},
      {id: 11, placeId: 3, name: '?', lv: 7, formation: [0], aromaId: null},
      {id: 12, placeId: 3, name: '?', lv: 12, formation: [2, 2], aromaId: null},
      {id: 13, placeId: 3, name: '?', lv: 22, formation: [2], aromaId: null},
      {id: 14, placeId: 4, name: '?', lv: 14, formation: [1, 1, 1], aromaId: null},
      {id: 15, placeId: 4, name: '?', lv: 24, formation: [1], aromaId: null},
      {id: 16, placeId: 4, name: '?', lv: 43, formation: [0], aromaId: null},
      {id: 17, placeId: 5, name: '?', lv: 26, formation: [1], aromaId: null},
      {id: 18, placeId: 5, name: '?', lv: 30, formation: [1, 1, 1], aromaId: null},
      {id: 19, placeId: 5, name: '?', lv: 35, formation: [0, 0], aromaId: null},
      {id: 20, placeId: 5, name: '?', lv: 41, formation: [0], aromaId: null},
      {id: 21, placeId: 5, name: '?', lv: 72, formation: [3], aromaId: null},
      {id: 22, placeId: 5, name: '?', lv: 39, formation: [4], aromaId: null},
      {id: 23, placeId: 6, name: '?', lv: 1, formation: [2], aromaId: null},
      {id: 24, placeId: 6, name: '?', lv: 1, formation: [2], aromaId: null},
      {id: 25, placeId: 7, name: '?', lv: 67, formation: [0], aromaId: null},
      {id: 26, placeId: 7, name: '?', lv: 88, formation: [2, 2, 0], aromaId: null},
    ]
  }
}

Item.init()
