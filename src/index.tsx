import * as React from 'react';
import {render} from 'react-dom';
import Item from './item'
import Enemy from './enemy'
import Recipe from './recipe'

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

  itemEl(item: Item, deps = 0, amount?: number): any {
    let itemlist = <ul>
      {item.adventures().map((adventure) =>
        <li key={`${deps}-adventure-${adventure.id}`}>探索: {adventure.place().name} -> {adventure.name}</li>
      )}
      {item.enemies().map((enemy) =>
        <li key={`${deps}-enemy-${enemy.id}`}>討伐: {enemy.name}</li>
      )}
      {this.recipeEl(item.recipe(), deps)}
    </ul>

    if(deps > 0) {
      return <details>
        <summary>{item.name} {`× ${amount}`}</summary>
        {itemlist}
      </details>
    }
    else {
      return <div>
        {item.name}
        {itemlist}
      </div>
    }
  }

  recipeEl(recipe: Recipe, deps = 0): any {
    if(recipe) {
      return <div>
        <p>錬成 {recipe.price} Rin</p>
        {recipe.materials().map((material) =>
          <div key={`${deps}-material-${recipe.id}-${material.item.id}`}>
            {this.itemEl(material.item, deps + 1, material.amount)}
          </div>
        )}
      </div>
    }
    else {
      return null
    }
  }

  render () {
    let currentItemArea: any = null
    if(this.state.currentItem) {
      currentItemArea = this.itemEl(this.state.currentItem)
    }

    return <div>
      <div>
        {Item.records.map((item) =>
          <span key={item.id}>・<a href="#" onClick={this.clickItem.bind(this, item)}>{item.name}</a></span>
        )}
      </div>
      {currentItemArea}
    </div>
  }
}

render(<App/>, document.getElementById('app'));
