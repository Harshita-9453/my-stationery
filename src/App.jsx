// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Data from "./components/dataApi.js";
import PriceFilter from "./components/PriceFilter.jsx";

let uniqueCat = [
  ...new Set(
    Data.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

function App() {
  let [productData, setProductData] = useState(Data);
  let [NavData, setNavData] = useState(uniqueCat);
  let PriceFilterData;
  const filterProduct = (clickedCategoryName) => {
    if (clickedCategoryName === "All") {
      setProductData(Data);
      return;
    }

    const updatedProduct = Data.filter((currElem) => {
      return clickedCategoryName === currElem.category;
    });
    setProductData(updatedProduct);
  };

  const  sortPrice=()=> {
    const filterValue=document.getElementById('sort').value;
    console.log(filterValue)
    if (filterValue==='highest'){
      const highestPrice=productData.map(item=>item).sort((a,b)=>b.price-a.price);
      setProductData(highestPrice);
    }
    if (filterValue==='lowest'){
      const lowestPrice=productData.map(item=>item).sort((a,b)=>a.price-b.price);
      setProductData(lowestPrice);
    }
  }
  return (
    <>
      <Navbar NavData={NavData} filterProduct={filterProduct} />
      <div className="container mt-5">
        <PriceFilter sortPrice={sortPrice}/>
        <div className="d-flex flex-wrap">
          <ProductCard productData={productData} />
        </div>
      </div>
    </>
  );
}

export default App;
