export default class Model {
  static records : any[]

  static init() {
    this.records = this.data()
  }

  static data() : any[] {
    return []
  }

  constructor() {

  }
}
