import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola buenas"} />
      <ProductCard title={"producto uno"} price={300} />
      <ProductCard title={"producto dos"} price={100} />
      <Footer />
    </div>
  );
}

export default App;
