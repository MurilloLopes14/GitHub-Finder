import GlobalStyle from "./Globals";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

function App() {
  return (
    <>
      <GlobalStyle />
      <section className="App">
        <h1>GitHub Finder</h1>
        <Outlet />
      </section>
    </>
  );
}

export default App;
