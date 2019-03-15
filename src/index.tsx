import * as React from 'react';
import {render} from 'react-dom';
import Item from './item'

Item.init()

class App extends React.Component {
  clickItem(item: any) {
    console.log(item)
  }
  render () {
    return <ul>
      {Item.records.map((item) =>
        <li key={item.id} onClick={this.clickItem.bind(this, item)}>{item.name}</li>
      )}
    </ul>
  }
}

render(<App/>, document.getElementById('app'));
