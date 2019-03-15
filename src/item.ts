import Model from './model'

// kind: mat: 0, anima: 1, aroma: 2, acs: 3

export default class Item extends Model {
  static data() : any[] {
    return [
      {id: 1, name: 'わらの束', kind: 0, rea: 1, dropBy: [], tresureFrom: [2, 6, 10, 11, 12, 13] },
      {id: 2, name: '木の枝', kind: 0, rea: 1, dropBy: [], tresureFrom: [1, 2, 4, 6, 9, 12, 21, 22, 23] },
      {id: 3, name: '丈夫な縄', kind: 0, rea: 1, dropBy: [], tresureFrom: [] },
      {id: 4, name: '葉の雫', kind: 0, rea: 1, dropBy: [], tresureFrom: [3, 4, 5, 22] },
      {id: 5, name: 'ヒワリの種', kind: 0, rea: 1, dropBy: [], tresureFrom: [3] },
      {id: 6, name: '試験管', kind: 0, rea: 1, dropBy: [], tresureFrom: [] },
      {id: 7, name: '蒸留水', kind: 0, rea: 1, dropBy: [], tresureFrom: [] },
      {id: 8, name: 'ガラスの破片', kind: 0, rea: 1, dropBy: [], tresureFrom: [6, 7] },
      {id: 9, name: '黒焦げのなにか', kind: 0, rea: 1, dropBy: [], tresureFrom: [7] },
      {id: 10, name: '石ころ', kind: 0, rea: 1, dropBy: [], tresureFrom: [1, 13, 14, 15, 16, 20] },
    ]
  }
}
