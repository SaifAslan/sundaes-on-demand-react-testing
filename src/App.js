import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "./constexts/OrderDetails";
import OrderEntery from "./pages/entry/OrderEntery";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntery />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
