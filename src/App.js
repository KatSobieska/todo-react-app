import Home from "./components/Home/Home.js";
import Container from "./components/Container/Container.js";
import NavBar from "./components/NavBar/NavBar.js";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </main>
  );
};

export default App;
