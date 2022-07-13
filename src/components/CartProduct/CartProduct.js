import { useCart } from "../../Context/Cart-Context"
import CartProductCSS from "./cartProduct.module.css"

export const CartProduct = ({product}) => {
    const {removeFromCart,decreaseQty,increaseQty} = useCart()

    const qtyHandler = (id) => {
      if(product.qty > 1)  decreaseQty(id)
      else removeFromCart(id)
    } 
    return(
        <div className={CartProductCSS.cart__product}>
            <div className="width-2xl height-xl">
              <img
                className="img-responsive"
                src={product.img}
                alt="black_jacket"
              />
              <div className={CartProductCSS.qty__controller__container}>
                <button onClick={()=>qtyHandler(product.id)} className={CartProductCSS.increase__qty__btn}>-</button>
                <p>{product.qty}</p>
                <button onClick={()=>increaseQty(product.id)} className={CartProductCSS.decrease__qty__btn}>+</button>
              </div>
            </div>
            <div className="margin-xs">
                <p className="text-md font-weight-bold margin-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="text-sm font-weight-bold margin-xs">Price:{product.price}</p>
                <p className="text-sm margin-xs">Brand:{product.brand}</p>
                <p className="text-sm margin-xs">Size: {product.size}</p>
                <button className={CartProductCSS.remove__from__cart__btn} onClick={()=>removeFromCart(product.id)}>
                   Remove From Cart
                </button>
            </div>
        </div>
    )
}