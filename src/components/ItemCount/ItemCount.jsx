import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    
    const add = () => counter < stock && setCounter(counter + 1);

    const reduce = () => counter > 1 && setCounter(counter - 1);
  return (
    <div className=''>
        <button className='btn btn-dark mx-1' onClick={() => reduce()}>-</button>
        {counter}
        <button className='btn btn-dark mx-1' onClick={() => add()}>+</button>
        <button className='btn btn-dark mx-1'>Add Car</button>
    </div>
  )
}

export default ItemCount;
