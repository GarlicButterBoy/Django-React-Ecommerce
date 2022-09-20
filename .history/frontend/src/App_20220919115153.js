import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {} from "react-router-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
