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

  render () {
    let currentItemArea: any = null
    if(this.state.currentItem) {
      currentItemArea = <div>
        {this.state.currentItem.name}
        <ul>
          {this.state.currentItem.enemies().map((enemy) =>
            <li key={enemy.id}>討伐: {enemy.name}</li>
          )}
        </ul>
      </div>
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
