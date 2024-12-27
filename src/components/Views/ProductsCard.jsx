import { useEffect, useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';


const ProductsCard = ({ products }) => {
  const formRef = useRef(null);
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    thumbnail: "",
  });

  const deleteProduct = (idToDelete) =>{
    fetch(`https://dummyjson.com/products/${idToDelete}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data=>console.log(data));
    
    const currentProducts=items
    const productToDelete=currentProducts.find((item)=>item.id === idToDelete)
    const newArray=currentProducts.filter((obj)=> obj !== productToDelete)
    setItems(newArray)
  }

  const handleFormProduct = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: e.target[1].value,
        price: e.target[2].value,
        thumbnail: e.target[0].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data
        setProduct({
          title: e.target[1].value,
          price: e.target[2].value,
          thumbnail: e.target[0].value,
        });
        formRef.current.reset();
      });
  };

  useEffect(() => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.thumbnail === ""
    ) {
      setItems([...products]);
      return
    } else {
      setItems([...products, { ...product, id: uuidv4() }]);
      return
    }
  }, [products, product]);

  return (
    <>
     <div
      style={{
        marginTop:30,
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {items.map((item) => (
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
            <Card.Text>
              <Button onClick={()=>{deleteProduct(item.id)}} variant="secondary">Delete</Button>
            </Card.Text>
          </Card>
        </div>
      ))}
      </div>

      <form style={{ width:'190px'}}
       ref={formRef} onSubmit={handleFormProduct}>
        Add new product
        <Form.Control
          type="text"
          name="thumbnail"
          placeholder="url image"
          required
        />
        <Form.Control
          type="text"
          name="title"
          placeholder="title product"
          required
        />
        <Form.Control
          type="number"
          name="price"
          placeholder="price product"
          required
        />
        <Button type="submit" variant="secondary">
          Add product
        </Button>
      </form>
    </>
  );
};

export default ProductsCard;

