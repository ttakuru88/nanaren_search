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
}
