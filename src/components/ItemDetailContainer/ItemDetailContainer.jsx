import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "red",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "white",
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price}</ListGroup.Item>
        <ListGroup.Item>{productData.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount />
        {stock >= 5 ? (
          <strong>Dispositivo disponible</strong>
        ) : (
          <strong>Ultimos dispositivos disponibles!</strong>
        )}
        <button
          style={onAdd ? buttonStylesOnAdd : buttonStyles}
          onClick={() => {
            setStock(stock - 1);
            setOnAdd(true);
          }}
        >
          Agregar al carrito 
        </button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
