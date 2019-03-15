import * as React from 'react';
import {render} from 'react-dom';
import Item from './item'
import Enemy from './enemy'

interface AppProps {}
interface AppState {
  currentItem: Item
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      currentItem: null
    }
  }

  clickItem(item: Item) {
    this.setState({currentItem: item})
  }

  itemElement(item: Item): any {
    return <div>
      {item.name}
      <ul>
        {item.adventures().map((adventure) =>
          <li key={adventure.id}>探索: {adventure.place().name} -> {adventure.name}</li>
        )}
        {item.enemies().map((enemy) =>
          <li key={enemy.id}>討伐: {enemy.name}</li>
        )}
      </ul>
    </div>
  }

  render () {
    let currentItemArea: any = null
    if(this.state.currentItem) {
      currentItemArea = this.itemElement(this.state.currentItem)
    }

    return <div>
      <ul>
        {Item.records.map((item) =>
          <li key={item.id}><a href="#" onClick={this.clickItem.bind(this, item)}>{item.name}</a></li>
        )}
      </ul>
      {currentItemArea}
    </div>
  }
}

render(<App/>, document.getElementById('app'));
