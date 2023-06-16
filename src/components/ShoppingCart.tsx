import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components";
import storeItems from "../data/items.json";
type ShoppingCartProps = {
  isOpen: boolean;
};
function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>Cart</Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems?.map((item) => (
            <CartItem key={item?.id} {...item} />
          ))}
        </Stack>
        <div className="fw-bold fs-3 d-flex justify-content-end">
          Total{" "}
          {cartItems
            ?.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
            .toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCart;
