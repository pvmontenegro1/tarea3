import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
const product = {
  name: "Libros de la Saga de Harry Potter",
  price: "80,00",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdXw5V8rIdyZINojs0Ka2Jbp-Ic_L52z2Iw&s"
};

function App() {
  
  return (

    <div>
     
      <Header/>
    
      <div style={{ padding: '20px' }}>
                <ProductCard product={product} />
            </div>
      <Footer/>
     
    </div>
  );
}

export default App;
