import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { removeCountry } from '../../redux/actions'
import './cart.scss'

export default function Cart() {
  const cartItems = useSelector((state) => state.countries.inCart)
  const dispatch = useDispatch()

  const handleCountryDelete = (element) => {
    dispatch(removeCountry(element))
  }
  if (cartItems.length === 0)
    return <p style={{ margin: '10px' }}>No Item Added.</p>

  return (
    <div className="cart">
      {cartItems.map((element) => (
        <div className="cart__details" key={element.name}>
          <img src={element.flag} alt="item flag" className="cart__img" />

          <p key={element.name} className="cart__name">
            {element.name}
          </p>
          <IconButton
            className="cartBtn"
            color="primary"
            onClick={() => handleCountryDelete(element)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  )
}
