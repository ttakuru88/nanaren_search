import Model from './model'

export default class Place extends Model {
  static data() : any[] {
    return [
      {id: 1, name: '錬金都市アルケミナ'},
      {id: 2, name: '移動中'},
      {id: 3, name: 'ミッドキャンプ'},
      {id: 4, name: '鉱山街ロックベル'},
      {id: 5, name: '古の遺跡'},
      {id: 6, name: 'スノーリース'},
      {id: 7, name: '聖樹イグドラシル'},
    ]
  }
}
