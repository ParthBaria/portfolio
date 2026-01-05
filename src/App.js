import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Learning = lazy(() => import("./pages/Learning"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:pn" element={<Projects />} />
            <Route path="learning" element={<Learning />} />
            <Route path="projects/:pn" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
