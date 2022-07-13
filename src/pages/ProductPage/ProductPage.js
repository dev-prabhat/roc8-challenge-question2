import { Products } from "../../Data"
import { Product } from "../../components"

import ProductPageCSS from "./productPage.module.css"

export const ProductPage = () => {
    return(
        <main>
          <section className={ProductPageCSS.product__container}>
            {Products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
          </section>
        </main>
    )
}