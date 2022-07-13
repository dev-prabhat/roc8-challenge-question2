import { Route,Routes } from "react-router-dom";
import { Header } from "./components";
import { ProductPage,CartPage } from "./pages";
import "./styles.css"

function App() {
  return (
   <> 
     <Header/>
     <Routes>
      <Route path="/" element={ <ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
     </Routes>
   </>
  );
}

export default App;
