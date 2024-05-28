import React, { useContext } from 'react'
import "./PlaceOrder.css"
import {StoreContext} from '../../context/StoreContext'
const PlaceOrder = () => {
  const {gettotal,charges} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="placeorderleft">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="Zip Code"/>
          <input type="text" placeholder="Country" />
        </div>
        <input type="text"placeholder="Phone" />

      </div>
      <div className="placeorderright">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${gettotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${charges()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotal()+charges()}</b>
                </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
