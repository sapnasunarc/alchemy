import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { LayoutDefault } from "./layouts/LayoutDefault";
<>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet"/>
</>

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="*" exact element={<LayoutDefault />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
