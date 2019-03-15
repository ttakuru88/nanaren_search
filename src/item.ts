import Model from './model'
import Enemy from './enemy'
import Adventure from './adventure'
import Recipe from './recipe'
// kind: mat: 0, anima: 1, aroma: 2, acs: 3

export default class Item extends Model {
  name: string
  kind: number
  rea: number
  dropBy: number[]
  treasureFrom: number[]

  constructor(data: any) {
    super(data)
    this.name = data.name
    this.kind = data.kind
    this.rea = data.rea
    this.dropBy = data.dropBy
    this.treasureFrom = data.treasureFrom
  }

  enemies(): Enemy[] {
    return this.dropBy.map((enemyId) => {
      return Enemy.find(enemyId)
    })
  }

  adventures(): Adventure[] {
    return this.treasureFrom.map((adventureId) => {
      return Adventure.find(adventureId)
    })
  }

  recipe(): Recipe {
    return Recipe.findBy('itemId', this.id)
  }

  static data() : any[] {
    return [
      {id: 1, name: 'わらの束', kind: 0, rea: 1, dropBy: [], treasureFrom: [2, 6, 10, 11, 12, 13, 21] },
      {id: 2, name: '木の枝', kind: 0, rea: 1, dropBy: [26], treasureFrom: [1, 2, 4, 6, 9, 12, 21, 22, 23, 21] },
      {id: 3, name: '丈夫な縄', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 4, name: '葉の雫', kind: 0, rea: 1, dropBy: [], treasureFrom: [3, 4, 5, 22] },
      {id: 5, name: 'ヒワリの種', kind: 0, rea: 1, dropBy: [], treasureFrom: [3] },
      {id: 6, name: '試験管', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 7, name: '蒸留水', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 8, name: 'ガラスの破片', kind: 0, rea: 1, dropBy: [], treasureFrom: [6, 7] },
      {id: 9, name: '黒焦げのなにか', kind: 0, rea: 1, dropBy: [], treasureFrom: [7] },
      {id: 10, name: '石ころ', kind: 0, rea: 1, dropBy: [], treasureFrom: [1, 13, 14, 15, 16, 20] },
      {id: 11, name: 'ベル水晶', kind: 0, rea: 1, dropBy: [], treasureFrom: [7, 9, 13, 14, 15, 18, 19] },
      {id: 12, name: 'ベル星水晶', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 13, name: 'トモシキノコ', kind: 0, rea: 1, dropBy: [], treasureFrom: [13] },
      {id: 14, name: 'オノキの丸太', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 15, name: '野犬の爪', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 16, name: 'グラフ石筆', kind: 0, rea: 2, dropBy: [], treasureFrom: [14] },
      {id: 17, name: '力拳の指南書', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 18, name: 'モミデの樹液', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 19, name: '回復の指南書', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 20, name: 'メテオ石', kind: 0, rea: 2, dropBy: [], treasureFrom: [16] },
      {id: 21, name: '速上の指南書', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 22, name: '緑柱石', kind: 0, rea: 2, dropBy: [], treasureFrom: [14] },
      {id: 23, name: '亜鉛鉱', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 24, name: 'ビーカー', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 25, name: 'ゴルナイト', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 26, name: '発火灰', kind: 0, rea: 2, dropBy: [], treasureFrom: [15, 16] },
      {id: 27, name: 'ヘボナ隕鉄', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 28, name: '硫黄塊', kind: 0, rea: 2, dropBy: [], treasureFrom: [15] },
      {id: 29, name: '幽か火', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 30, name: 'メニスの炎', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 31, name: '巫樹の落葉', kind: 0, rea: 2, dropBy: [], treasureFrom: [22] },
      {id: 32, name: '獣の抜け毛', kind: 0, rea: 1, dropBy: [], treasureFrom: [12] },
      {id: 33, name: '斑らな毛皮', kind: 0, rea: 2, dropBy: [], treasureFrom: [] },
      {id: 34, name: 'お手製魔法薬', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 35, name: '攻上の指南書', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 36, name: '防上の指南書', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 37, name: 'ハゼクルミ', kind: 0, rea: 3, dropBy: [], treasureFrom: [7] },
      {id: 38, name: '麻の布', kind: 0, rea: 1, dropBy: [], treasureFrom: [22] },
      {id: 39, name: 'コルブオイル', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 40, name: '丸磨サボテン', kind: 0, rea: 3, dropBy: [], treasureFrom: [17] },
      {id: 41, name: 'オルド水銀', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 42, name: 'アマルガム', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 43, name: '丙蹄の大角', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 44, name: 'クシダの葉', kind: 0, rea: 1, dropBy: [], treasureFrom: [9] },
      {id: 45, name: 'オークの厚板', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 46, name: '妖精の薄羽', kind: 0, rea: 1, dropBy: [], treasureFrom: [] },
      {id: 47, name: '粘土', kind: 0, rea: 1, dropBy: [], treasureFrom: [2, 6, 7, 8, 9, 10, 23] },
      {id: 48, name: 'リバーシャボン', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 49, name: '天藍石', kind: 0, rea: 3, dropBy: [], treasureFrom: [16] },
      {id: 50, name: 'ロズライト', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 51, name: '透蟹の甲羅', kind: 0, rea: 3, dropBy: [], treasureFrom: [5] },
      {id: 52, name: '玉虫色の翅', kind: 0, rea: 3, dropBy: [], treasureFrom: [19] },
      {id: 53, name: 'フラスコ', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 54, name: 'ミツバ苔', kind: 0, rea: 2, dropBy: [], treasureFrom: [23] },
      {id: 55, name: 'アカイバラ', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 56, name: 'マナプラント', kind: 0, rea: 4, dropBy: [], treasureFrom: [] },
      {id: 57, name: '星の砂', kind: 0, rea: 2, dropBy: [], treasureFrom: [20] },
      {id: 58, name: 'イブンの粉末', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
      {id: 59, name: 'グラビティメタル', kind: 0, rea: 3, dropBy: [], treasureFrom: [16] },
      {id: 60, name: 'オリハルコン', kind: 0, rea: 3, dropBy: [], treasureFrom: [] },
    ]
  }
}

Item.init()
