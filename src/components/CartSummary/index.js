import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartItemsCount = cartList.length

      let totalAmount = 0

      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total:
            <span className="total-amount"> {totalAmount} /-</span>
          </h1>
          <p className="items-in-cart">{cartItemsCount} items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
