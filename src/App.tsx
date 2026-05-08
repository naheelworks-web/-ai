import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#050505] text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
