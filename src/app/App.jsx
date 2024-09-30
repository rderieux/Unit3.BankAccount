import { Provider } from "react-redux";

import "./app.css";
import store from "./store.js";
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
};

export default App;
