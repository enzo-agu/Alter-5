import { useContext } from "react";
import { AppContext } from "../../Context/ContextProvider";
import Card from "react-bootstrap/Card";

const FirstTenProducts = () => {
  const { originalProducts } = useContext(AppContext);

  return (
    <div
      style={{
        marginTop:30,
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {originalProducts.slice(0,10).map((item) => (
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
        </div>
      ))}
    </div>
  );
};

export default FirstTenProducts;
