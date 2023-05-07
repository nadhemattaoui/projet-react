import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function Cart() {
  const shop= useSelector(state=>state.shop)
  const total=shop.reduce((sum,acc)=>acc.price+sum,0)
  console.log(total)
  return (
    <>
  <div className='final'>
  <br></br><br></br>
   <h1> You only have to pay {total} dt <br></br>
   <br></br>
   "Thank you for choosing us every time and i hope we will meet soon"</h1>
  </div>
    <div className="cards">

{shop.map(element=><Product name={element.name} price={element.price} image={element.image} id={element.id} type='delete' key={element.id}/>) }


</div>
</>

  )
}

export default Cart
