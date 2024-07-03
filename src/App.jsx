import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./components/Routes/Routes";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="Contact/*" element={<Contact/>}/>
          </Routes>
        </Layout>
        <Footer />
      </div>
    </>
  );
}

export default App;
