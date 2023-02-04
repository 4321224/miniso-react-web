import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/footer";
// import Content from "./components/content";
// import CaraouselProduct from "./components/caraousel";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      {/* <CaraouselProduct /> */}
    </div>
  );
}

export default App;
