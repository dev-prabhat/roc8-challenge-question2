import { useCart } from "../../Context/Cart-Context"
import { Link } from "react-router-dom"
import HeaderCSS from "./header.module.css"
export const Header = () => {
   const {cart} = useCart()
   return(
    <header className={HeaderCSS.header__container}>
        <div>
        <Link className={HeaderCSS.brand__link} to="/">CopyCart</Link>
        <Link className={HeaderCSS.products__link} to="/">Products</Link>
        </div>
        <Link to="/cart" className={HeaderCSS.cart__link}>
                    Cart
                    {
                       cart.length > 0 && <span className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">{cart.length}
                        </span>
                    }
        </Link>
    </header>
   )
}