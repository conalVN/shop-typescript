import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};
function CartItem({ id, quantity }: CartItemProps) {
  const { removeQuantity, increaseQuantity, decreaseQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.urlImage}
        style={{ width: "100px", height: "75px", objectFit: "contain" }}
      />
      <div className="">
        <h6 className="">{item?.name}</h6>
        <p className="">
          <span>
            {item?.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </span>
          <span className="d-flex align-items-center gap-4">
            <span
              className="user-select-none d-flex align-items-center justify-content-center"
              onClick={() => decreaseQuantity(item.id)}
            >
              <span className="material-symbols-outlined">remove</span>
            </span>
            <span className="user-select-none">{quantity}</span>
            <span
              className="user-select-none d-flex align-items-center justify-content-center"
              onClick={() => increaseQuantity(item.id)}
            >
              <span className="material-symbols-outlined">add</span>
            </span>
          </span>
        </p>
      </div>
      <Button
        className="btn btn-light d-flex align-items-center justify-content-center"
        onClick={() => removeQuantity(item.id)}
      >
        <span className="material-symbols-outlined">delete</span>
      </Button>
    </Stack>
  );
}

export default CartItem;
