import { useContext, useState } from "react";
import { AppContext } from "../../Context/ContextProvider";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ productFound,inputRef }) => {
  const [product, setProduct] = useState(productFound);

  const { productDetail } = useContext(AppContext);

  const clearProduct = () => {
    setProduct([]);
    productDetail(product);
    inputRef.current.value=''
  };

  return (
    <>
      {product != [] && (
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {product.map((item) => (
            <div key={item.id}>
              <Card>
                <Card.Img src={item.thumbnail} />
                <Card.Text>
                  <strong>Title: </strong>
                  {item.title}
                </Card.Text>
                <Card.Text>
                  <strong>Price: </strong>
                  {item.price}
                </Card.Text>
              </Card>
              <Button
                onClick={clearProduct}
                style={{ marginTop: 10 }}
                variant="secondary"
              >
                Clear
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductCard;
