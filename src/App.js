import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppWideContextProvider from "./components/contexts/AppWideContext";
import {
  PlpPage,
  HomePage,
  Register,
  Login,
  Minicart,
} from "./components/pages/index";
import { Footer, Header } from "./components/molecules";

function App() {
  return (
    <BrowserRouter>
      <AppWideContextProvider>
        <div className="App">
          <Header />
          <div className="dynamic-content">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cartItems" element={<Minicart />}></Route>
              <Route path="/products" element={<PlpPage />}></Route>
              <Route path="/products/:categoryID" element={<PlpPage />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </AppWideContextProvider>
    </BrowserRouter>
  );
}
export default App;
