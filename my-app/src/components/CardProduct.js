import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardProduct({ product }) {
  const navigate = useNavigate(); // error

  // const toProductDetail = (id) => {
  //   navigation(`/Products/${id}`);
  // };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.mainImg} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
          <p>{product.price}</p>
        </Card.Text>
        <Button onClick={() => navigate(`/Products/${product.id}`)}>See Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
