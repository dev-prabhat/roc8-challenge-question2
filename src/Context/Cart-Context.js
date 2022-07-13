import {createContext,useContext,useState} from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCartItems] = useState([])
    
    const addToCart = (product) => {
        setCartItems(prev => [...prev, product])
    } 

    const removeFromCart = (productId) => {
       setCartItems(prev => prev.filter(product => product.id !== productId))
    }

    const increaseQty = (productId) => {
       setCartItems(products => products.map(product => {
        if(product.id === productId) 
            product = {...product,qty:product.qty+1}
        return product
       }))
    }

    const decreaseQty = (productId) => {
        setCartItems(products => products.map(product => {
         if(product.id === productId) 
         product = {...product,qty:product.qty-1}
         return product
        }))
    }

    const emptyCart = () => {
        setCartItems([])
    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,increaseQty,decreaseQty,emptyCart}}>
         {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart}