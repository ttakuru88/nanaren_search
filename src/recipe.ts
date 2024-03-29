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
      {id: 11, itemId: 27, price: 50, rank: 1, materials: [
        {itemId: 23, amount: 1},
        {itemId: 26, amount: 3},
        {itemId: 20, amount: 1},
      ]},
      {id: 12, itemId: 30, price: 50, rank: 1, materials: [
        {itemId: 28, amount: 3},
        {itemId: 29, amount: 2},
        {itemId: 24, amount: 1},
      ]},
      {id: 13, itemId: 33, price: 50, rank: 1, materials: [
        {itemId: 31, amount: 3},
        {itemId: 32, amount: 1},
        {itemId: 7, amount: 1},
      ]},
      {id: 14, itemId: 35, price: 300, rank: 1, materials: [
        {itemId: 34, amount: 2},
        {itemId: 16, amount: 1},
        {itemId: 24, amount: 2},
      ]},
      {id: 15, itemId: 36, price: 300, rank: 1, materials: [
        {itemId: 27, amount: 2},
        {itemId: 16, amount: 1},
        {itemId: 24, amount: 2},
      ]},
      {id: 16, itemId: 39, price: 50, rank: 1, materials: [
        {itemId: 37, amount: 1},
        {itemId: 38, amount: 2},
        {itemId: 5, amount: 1},
        {itemId: 24, amount: 1},
      ]},
      {id: 17, itemId: 34, price: 50, rank: 1, materials: [
        {itemId: 40, amount: 2},
        {itemId: 18, amount: 1},
        {itemId: 7, amount: 2},
        {itemId: 24, amount: 2},
      ]},
      {id: 18, itemId: 42, price: 50, rank: 1, materials: [
        {itemId: 41, amount: 1},
        {itemId: 23, amount: 3},
        {itemId: 24, amount: 1},
      ]},
      {id: 19, itemId: 45, price: 50, rank: 1, materials: [
        {itemId: 43, amount: 1},
        {itemId: 14, amount: 3},
        {itemId: 44, amount: 3},
      ]},
      {id: 20, itemId: 48, price: 50, rank: 1, materials: [
        {itemId: 39, amount: 3},
        {itemId: 46, amount: 3},
        {itemId: 47, amount: 3},
      ]},
      {id: 21, itemId: 50, price: 800, rank: 1, materials: [
        {itemId: 49, amount: 2},
        {itemId: 48, amount: 1},
        {itemId: 24, amount: 1},
      ]},
      {id: 22, itemId: 53, price: 50, rank: 1, materials: [
        {itemId: 51, amount: 2},
        {itemId: 52, amount: 1},
        {itemId: 24, amount: 5},
      ]},
      {id: 23, itemId: 56, price: 50, rank: 1, materials: [
        {itemId: 54, amount: 2},
        {itemId: 55, amount: 2},
        {itemId: 31, amount: 5},
        {itemId: 45, amount: 2},
        {itemId: 53, amount: 1},
      ]},
      {id: 24, itemId: 58, price: 50, rank: 1, materials: [
        {itemId: 57, amount: 5},
        {itemId: 51, amount: 2},
        {itemId: 34, amount: 1},
      ]},
      {id: 25, itemId: 60, price: 50, rank: 1, materials: [
        {itemId: 59, amount: 4},
        {itemId: 42, amount: 2},
        {itemId: 27, amount: 2},
      ]},
      {id: 26, itemId: 63, price: 50, rank: 1, materials: [
        {itemId: 61, amount: 1},
        {itemId: 62, amount: 3},
        {itemId: 59, amount: 3},
      ]},
      {id: 27, itemId: 64, price: 50, rank: 1, materials: [
        {itemId: 52, amount: 2},
        {itemId: 13, amount: 2},
        {itemId: 53, amount: 1},
      ]},
      {id: 28, itemId: 66, price: 1500, rank: 1, materials: [
        {itemId: 65, amount: 2},
        {itemId: 64, amount: 2},
        {itemId: 53, amount: 1},
      ]},
      {id: 29, itemId: 69, price: 50, rank: 1, materials: [
        {itemId: 60, amount: 1},
        {itemId: 67, amount: 1},
        {itemId: 62, amount: 3},
        {itemId: 8, amount: 5},
        {itemId: 68, amount: 3},
      ]},
      {id: 30, itemId: 71, price: 50, rank: 1, materials: [
        {itemId: 64, amount: 1},
        {itemId: 70, amount: 3},
        {itemId: 63, amount: 1},
        {itemId: 30, amount: 1},
        {itemId: 53, amount: 1},
      ]},
      {id: 31, itemId: 73, price: 50, rank: 1, materials: [
        {itemId: 56, amount: 1},
        {itemId: 34, amount: 3},
        {itemId: 58, amount: 1},
        {itemId: 72, amount: 1},
        {itemId: 53, amount: 1},
      ]},
    ]
  }
}

Recipe.init()
