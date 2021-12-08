import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import MyDialog from "./MyDialog";
import PaymentModal from "./components/PaymentModal";

function App() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div class="flex h-screen justify-center items-center">
      <div class="text-center">
        <h1 class="text-3xl">Yelow Demo</h1>
        {/* <button className="">
          Checkout With Yelow
        </button>{" "} */}
        <PaymentModal />
      </div>
    </div>
  );
}

export default App;
