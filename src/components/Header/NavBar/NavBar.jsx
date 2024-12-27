import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Context/ContextProvider";

const NavBar = () => {
  
  const { userEmailAuth,resetOrder } = useContext(AppContext);

  return (
    <>
      {
        <>
          <p>{userEmailAuth}</p>
        </>
      }

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"/"}>
          <Button variant="secondary">Home</Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="secondary">Login</Button>
        </Link>
        <Link to={"/products"}>
          <Button onClick={resetOrder} variant="secondary">All Products</Button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
