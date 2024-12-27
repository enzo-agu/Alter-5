import { useEffect, useState } from "react";
import { ContextCreator } from "./ContextCreator";
import PropTypes from "prop-types";

export const AppContext = ContextCreator;

const ContextProvider = ({ children }) => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [productFound, setProduct] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userEmailAuth, setEmail] = useState("");

  useEffect(() => {
    token &&
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products)
          setOriginalProducts(data.products);
        }
      );
  }, [token]);


  const resetOrder = () => {
    setProducts(originalProducts); // Restaura los productos originales
  };

  const lowerPriceFirst = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const higherPriceFirst = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const productDetail = (product) => {
    if (product != null) {
      const productFound = products.filter((item) => item.id === product.id);
      setProduct(productFound);
    }
  };

  const userEmail = (email) => {
    if (token) {
      setEmail(email);
    }
  };

  return (
    <AppContext.Provider
      value={{
        originalProducts,
        products,
        setProducts,
        userEmailAuth,
        setEmail,
        userEmail,
        token,
        setToken,
        productDetail,
        productFound,
        lowerPriceFirst,
        higherPriceFirst,
        resetOrder
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
