import Model from './model'

export default class Recipe extends Model {
  static data() : any[] {
    return [
      {id: 'mat1', itemId: 3, price: 50, rank: 1, items: [
        {itemId: 2, amount: 1},
        {itemId: 3, amount: 2},
      ]},
      {id: 'mat2', itemId: 7, price: 50, rank: 1, items: [
        {itemId: 4, amount: 2},
        {itemId: 5, amount: 2},
        {itemId: 6, amount: 1},
      ]},
      {id: 'mat3', itemId: 6, price: 50, rank: 1, items: [
        {itemId: 8, amount: 3},
        {itemId: 9, amount: 1},
        {itemId: 10, amount: 5},
      ]},
    ]
  }
}
