import Model from './model'

export default class Recipe extends Model {
  itemId: number
  price: number
  rank: number
  items: {itemId: number, amount: number}[]

  constructor(data: any) {
    super(data)
    this.itemId = data.itemId
    this.price = data.price
    this.rank = data.rank
    this.items = data.items
  }

  static data() : any[] {
    return [
      {id: 1, itemId: 3, price: 50, rank: 1, items: [
        {itemId: 2, amount: 1},
        {itemId: 3, amount: 2},
      ]},
      {id: 2, itemId: 7, price: 50, rank: 1, items: [
        {itemId: 4, amount: 2},
        {itemId: 5, amount: 2},
        {itemId: 6, amount: 1},
      ]},
      {id: 3, itemId: 6, price: 50, rank: 1, items: [
        {itemId: 8, amount: 3},
        {itemId: 9, amount: 1},
        {itemId: 10, amount: 5},
      ]},
    ]
  }
}

Recipe.init()
