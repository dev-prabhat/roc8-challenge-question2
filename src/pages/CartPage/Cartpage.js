import { CartProduct } from "../../components/CartProduct/CartProduct"
import { useCart } from "../../Context/Cart-Context"
import CartPageCSS from "./cartpage.module.css"

export const CartPage = () => {
  const {cart,emptyCart} = useCart()

  const initialState = {
    price: 0,
    qty: 0,
    delivery: 0
}

const checkout = cart.reduce((acc, currentProduct) => ({
    ...acc,
    qty: acc.qty + currentProduct.qty,
    price: acc.price + currentProduct.price * currentProduct.qty,
    delivery:(acc.delivery + 40) * currentProduct.qty
}), initialState)

    return(
        <main className={CartPageCSS.grid__container}>
            {
                cart.length > 1 ?
                <>
                        <div className={CartPageCSS.product__container}>
                {cart.map(product => (
                    <CartProduct key={product.id} product={product}/>
                ))}
                </div>
                <div className={CartPageCSS.cart__summary}>
                <h3 className={CartPageCSS.price__heading}>Price Details</h3>
                    <div className={CartPageCSS.price}>
                        <p className={CartPageCSS.price__title}>Price</p>
                        <span>Rs.{checkout.price}</span>
                    </div>
                    <div className={CartPageCSS.delivery}>
                        <p className={CartPageCSS.delivery__title}>Delivery Charges</p>
                        <span>Rs{checkout.delivery}</span>
                    </div>
                    <div className={CartPageCSS.total}>
                        <h3 className="head-md">Total Amount</h3>
                        <span>Rs{checkout.price + checkout.delivery}</span>
                    </div>
                        <button onClick={emptyCart} className={CartPageCSS.order__btn}>
                            Place Order
                        </button>
                </div>
                </>:
                <h1>
                    Empty Cart ({cart.length})
                </h1>
            }          
        </main>
    )
}