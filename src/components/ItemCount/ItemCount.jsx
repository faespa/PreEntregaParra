import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    
    const add = () => counter < stock && setCounter(counter + 1);

    const reduce = () => counter > 1 && setCounter(counter - 1);
  return (
    <div>
        <button className='btn btn-dark' onClick={() => add()}>+</button>
        {counter}
        <button className='btn btn-dark' onClick={() => reduce()}>-</button>
        <button className='btn btn-dark'>Add Car</button>
    </div>
  )
}

export default ItemCount;
