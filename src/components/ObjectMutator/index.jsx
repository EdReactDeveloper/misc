import React, { Component } from 'react';

class Obj extends Component {

  state = {
    boards: [
      { title: 'react', id: '1222', active: false, list: [{ id: '122', active: false }, { id: '212', active: false }] },
      { title: 'redux', id: '2334', active: false, list: [{ id: '222', active: false }, { id: '232', active: false }] },
      { title: 'mongo', id: '1134', active: false, list: [{ id: '322', active: false }, { id: '242', active: false }] },
      { title: 'js', id: '1244', active: false, list: [{ id: '422', active: false }, { id: '237', active: false }] },
    ],
    options: []
  }

  changeProps = function (array, board, listItem) {
    const boards = [...array]
    const boardIndex = boards.findIndex(i => i.id === board.id)
    boards[boardIndex] = { ...boards[boardIndex], ...board }
    if (listItem) {
      const listItemIndex = boards[boardIndex].list.findIndex(k => k.id === listItem.id)
      if (listItemIndex !== -1) {
        boards[boardIndex].list[listItemIndex] = { ...boards[boardIndex][listItemIndex], ...listItem }
      }
    }
    return
  }

  onChangeHandler = (e) => {
    let options = Array.from(e.target.options)
    console.log(options)
    const value = options.filter(o=> o.selected).map(o=> o.value)
    this.setState({ options: value })

  }


  render() {
    console.log(this.state.options)
    return (
      <div>
        {this.state.boards.map(item => <div
          key={item.id}
          style={{ color: item.active ? 'red' : '' }}
        >
          {item.title}
          <button onClick={() => {
            const newItem = { ...item, active: true, title: 'removed' }
            const listItem = { id: '122', active: true }
            this.changeProps(this.state.boards, newItem, listItem)
          }
          }>change title</button>
        </div>)}
        <form onSubmit={this.submitOnptions}>
          <select multiple={true} value={this.state.options} onChange={(e) => this.onChangeHandler(e)}>
            <option value="coconut" selected>кокос</option>
            <option value="apple">яблоко</option>
            <option value="mango">манго</option>
            <option value="orange">апельсин</option>
          </select>
          <button type="submit">submit</button>
        </form>

      </div>
    );
  }
}

export default Obj;