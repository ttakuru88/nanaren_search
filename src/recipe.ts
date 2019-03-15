import Model from './model'
import Item from './item'

export default class Recipe extends Model {
  itemId: number
  price: number
  rank: number
  materialsData: {itemId: number, amount: number}[]

  constructor(data: any) {
    super(data)
    this.itemId = data.itemId
    this.price = data.price
    this.rank = data.rank
    this.materialsData = data.materials
  }

  materials(): {item: Item, amount: number}[] {
    return this.materialsData.map((material) => {
      return {item: Item.find(material.itemId), amount: material.amount}
    })
  }

  static data() : any[] {
    return [
      {id: 1, itemId: 3, price: 50, rank: 1, materials: [
        {itemId: 1, amount: 1},
        {itemId: 2, amount: 2},
      ]},
      {id: 2, itemId: 7, price: 50, rank: 1, materials: [
        {itemId: 4, amount: 2},
        {itemId: 5, amount: 2},
        {itemId: 6, amount: 1},
      ]},
      {id: 3, itemId: 6, price: 50, rank: 1, materials: [
        {itemId: 8, amount: 3},
        {itemId: 9, amount: 1},
        {itemId: 10, amount: 5},
      ]},
      {id: 4, itemId: 12, price: 200, rank: 1, materials: [
        {itemId: 11, amount: 1},
        {itemId: 6, amount: 1},
      ]},
      {id: 5, itemId: 14, price: 50, rank: 1, materials: [
        {itemId: 13, amount: 1},
        {itemId: 2, amount: 3},
      ]},
      {id: 6, itemId: 17, price: 300, rank: 1, materials: [
        {itemId: 15, amount: 2},
        {itemId: 16, amount: 1},
        {itemId: 6, amount: 3},
      ]},
      {id: 7, itemId: 19, price: 300, rank: 1, materials: [
        {itemId: 18, amount: 2},
        {itemId: 16, amount: 1},
        {itemId: 6, amount: 3},
      ]},
      {id: 8, itemId: 21, price: 300, rank: 1, materials: [
        {itemId: 20, amount: 2},
        {itemId: 16, amount: 1},
        {itemId: 6, amount: 3},
      ]},
      {id: 9, itemId: 25, price: 300, rank: 1, materials: [
        {itemId: 22, amount: 1},
        {itemId: 23, amount: 1},
        {itemId: 24, amount: 1},
      ]},
      {id: 10, itemId: 24, price: 300, rank: 1, materials: [
        {itemId: 26, amount: 5},
        {itemId: 6, amount: 5},
      ]},
    ]
  }
}

Recipe.init()
