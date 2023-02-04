import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./stores";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
