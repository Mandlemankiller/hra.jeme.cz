import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Members from "./routes/members/members";
import NotFound from "./routes/not-found/not-found";
import About from "./routes/about/about";

export default function Page() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};