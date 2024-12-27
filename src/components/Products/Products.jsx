import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/ContextProvider";
import Button from "react-bootstrap/esm/Button";
import ProductsCard from "../Views/ProductsCard";
import ProductCard from "../Views/ProductCard";

const Products = () => {
  const inputRef = useRef(null);

  const {
    products,
    setEmail,
    token,
    setToken,
    productDetail,
    productFound,
    lowerPriceFirst,
    higherPriceFirst,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setEmail(null);
    navigate("/");
  };

  const handleSearch = (e) => {
    const productToFind = products.find(
      (item) => item.title === e.target.value
    );
    if (productToFind) {
      productDetail(productToFind);
    }
  };

  return (
    <>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {productFound && <ProductCard inputRef={inputRef} productFound={productFound} />}
      </div>
      {token ? (
        <>
          <Button
            variant="secondary"
            onClick={() => {
              logOut();
            }}
          >
            Log out
          </Button>
          <input
            ref={inputRef}
            style={{ borderRadius: 10 }}
            type="text"
            placeholder="Search product..."
            onChange={handleSearch}
          />
          <div
            style={{
              marginTop: 100,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            <Button variant="secondary" onClick={higherPriceFirst}>
              From higher prices
            </Button>
            <Button variant="secondary" onClick={lowerPriceFirst}>
              From lower Prices
            </Button>
            <Link to={"/FirstTenProducts"}>
              <Button variant="secondary">First ten products</Button>
            </Link>
            <Link to={"/SecondTenProducts"}>
              <Button variant="secondary">Second ten products</Button>
            </Link>
            <Link to={"/ThirdTenProducts"}>
              <Button variant="secondary">Third ten products</Button>
            </Link>
          </div>
          <ProductsCard products={products} />
        </>
      ) : (
        <>
          <h2> You must log in to view products. </h2>
        </>
      )}
    </>
  );
};

export default Products;
