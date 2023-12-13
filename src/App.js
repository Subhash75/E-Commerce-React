import store from "store";
import Routes from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
