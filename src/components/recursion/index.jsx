import React, { Component } from 'react';



class Recursion extends Component {
  state = {
    names: [],
    object: {
      inner: [
        {
          name: 'orders',
          inner: [
            { name: 'regular orders', inner: null },
            {
              name: 'auto orders', inner: [
                { name: 'super orders 1', inner: null, visible: false },
                {
                  name: 'super orders 2', inner: [
                    { name: 'last unit', inner: null }
                  ]
                },

              ]
            }
          ]
        },
        {
          name: 'payment',
          inner: null
        },
        {
          name: 'products',
          inner: null
        }
      ]

    }

  }

  toggleShow = (item) => {
    const names = [...this.state.names]
    const index = names.indexOf(item.name)
    if (index === -1) {
      names.push(item.name)
    } else {
      names.splice(index, 1)
    }
    this.setState({ names })
  }

  func = (obj) => {

    if (obj.inner === null) {
      return;
    }
    return <ul>
      {obj.inner.map(item => (
        <li key={item.name} onClickCapture={(e) => this.toggleShow(item)}>
          {item.name}
          {this.state.names.includes(item.name) && this.func(item)}
        </li>
      )
      )}
    </ul>

  }

  render() {
    const { object } = this.state
    return (
      <ul>
        {this.func(object)}
      </ul>


    );
  }
}

export default Recursion;