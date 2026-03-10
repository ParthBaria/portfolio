import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Learning = lazy(() => import("./pages/Learning"));
const Blogs = lazy(() => import("./pages/Blogs"));

const FallbackLoader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          @keyframes counterSpin {
            to { transform: rotate(-360deg); }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "140px",
            height: "140px",
            border: "6px solid rgba(0,0,0,0.15)",
            borderTop: "6px solid #fb923c",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              animation: "counterSpin 1s linear infinite",
            }}
          >
            PB
          </span>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:pn" element={<Projects />} />
            <Route path="learning" element={<Learning />} />
            <Route path="projects/:pn" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
