import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About, Home, Layout, Store } from "./page/public";
import { Header } from "./components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
