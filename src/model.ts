export default class Model {
  static records : any[]
  id: number

  constructor(data: any) {
    this.id = data.id
  }

  static init() {
    this.records = this.data().map( (data) => new this(data) )
  }

  static data() : any[] {
    return []
  }

  static find(id: number): any {
    return this.findBy('id', id)
  }

  static findBy(attr: string, value: number): any {
    let model
    this.records.forEach((record) => {
      if(record[attr] == value) {
        model = record
        return
      }
    })
    return model
  }
}
