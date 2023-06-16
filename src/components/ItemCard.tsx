import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItem = {
  id: number;
  name: string;
  urlImage: string;
  price: number;
};

function ItemCard({ id, name, urlImage, price }: StoreItem) {
  const { increaseQuantity } = useShoppingCart();
  return (
    <Card>
      <Card.Img
        variant="top"
        height="200px"
        src={urlImage}
        style={{ objectFit: "cover" }}
      />
      <div className="p-2">
        <h6 className="text-truncate">{name}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <span className="text-warning">
            {price.toLocaleString("vi", { style: "currency", currency: "VND" })}
          </span>
          <Button
            className="btn btn-light text-dark border-white"
            onClick={() => increaseQuantity(id)}
          >
            Add cart
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
