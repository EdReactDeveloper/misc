import React, { useState, useEffect } from 'react';


const SortedArray = () => {
  
  const [array, setArray] = useState(
    [
      { number: 4, city: 'moscow' },
      { number: 1, city: 'london' },
      { number: 5, city: 'warsaw' },
      { number: 3, city: 'berlin' },
      { number: 2, city: 'paris' },
    ]
    )
    
    const [ name, setName ] = useState('')
    
    useEffect(() => {
     setArray(sortArray(array))
    }, [])

  const upItem = item => {
    let newArr = [...array]
    const index = newArr.findIndex(i => i.number === item.number)
    if (index > 0) {
      newArr[index].number -= 1
      newArr[index - 1].number += 1
      newArr=sortArray(newArr)
      setArray(newArr)
    }
  }

  const downItem = item => {
    let newArr = [...array]
    const index = newArr.findIndex(i => i.number === item.number)
    if (index < newArr.length - 1) {
      newArr[index].number += 1
      newArr[index + 1].number -= 1
      newArr=sortArray(newArr)
      setArray(newArr)
     
    }
  }

  const remove = (item) => {
    let newArr = [...array]
    const index = newArr.findIndex(i => i.number === item.number)
    newArr.splice(index, 1)

    for (let i = 0; i < newArr.length; i++) {
      newArr[i].number = i + 1
    }
    newArr=sortArray(newArr)
    setArray(newArr)
  }

  const newName = (e) => {
    setName(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let newArr = [...array]
    const newObj = {
      number: 1,
      city: name
    }
    for (let i = 0; i < newArr.length; i++) {
      newArr[i].number += 1
    }
    newArr.push(newObj)
    newArr = sortArray(newArr)
    setArray(newArr)
  }

  const sortArray = (array) => {
    return [...array.sort((a, b) => (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0))]
  }

  return (
    <div>
      <div>
        {array.map(item => <div key={item.number}>{item.number} {item.city}
          <button onClick={() => upItem(item)}>up</button>
          <button onClick={() => downItem(item)}>down</button>
          <button onClick={() => remove(item)}>delete</button>
        </div>)}
        <form onSubmit={submitHandler}>
          <input type="text" name="name" onChange={(e) => newName(e)} />
          <button type="submit">add</button>
        </form>

      </div>
      <button onClick={() => sortArray(array)}>change</button>
    </div>
  );
};

export default SortedArray;