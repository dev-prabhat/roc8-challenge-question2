import { useCart } from "../../Context/Cart-Context"
import ProductCSS from "./product.module.css"

export const Product = ({product}) => {
    const {addToCart,removeFromCart,cart} = useCart()

    const cartProduct = cart.findIndex(cartProduct => cartProduct.id === product.id) === -1 ? false : true
    return(
        <div className={ProductCSS.product__card}>
             <div className="width-2xl height-2xl">
              <img
                className="img-responsive"
                src={product.img}
                alt="black_jacket"
              />
            </div>
            <div className={ProductCSS.product__info}>
              <p className="text-sm font-weight-bold margin-xs">Price:{product.price}</p>
              <p className="text-sm margin-xs">Brand:{product.brand}</p>
              <p className="text-sm margin-xs">Size: {product.size}</p>
            </div>
            {
              cartProduct?
              <button onClick={()=>removeFromCart(product.id)} className={ProductCSS.add__to__cart__btn}>
              Remove From Cart 
              </button>:
              <button onClick={()=>addToCart(product)} className={ProductCSS.add__to__cart__btn}>
               Add to Cart
              </button>
            }
        </div>
    )
}