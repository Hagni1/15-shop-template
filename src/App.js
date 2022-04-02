import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import Pages from "./components/Products/Routing";
import Footer from "./components/Home/Footer";
import  AppProvider  from "./context/ShoppingContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AppProvider>
          <Navigation />
          <Pages />
        </AppProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
