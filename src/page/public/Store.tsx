import { Row, Col } from "react-bootstrap";
import { ItemCard } from "../../components";
import items from "../../data/items.json";
function Store() {
  return (
    <div className="">
      <Row xs={1} md={2} lg={5} className="g-3">
        {items?.map((item) => (
          <Col key={item?.id}>
            <ItemCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Store;
