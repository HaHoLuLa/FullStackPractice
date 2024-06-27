import { Route, Routes } from "react-router-dom";
import Data from "./pages/Data";
import Board from "./pages/Board";
// import Mouse from "./pages/Mouse"
import AppXY from "./pages/Keep";
// import MouseEasy from "./pages/MouseEasy"
import NewLayout from "./pages/NewLayout";
import { Link } from "react-router-dom";

const App = () => {
  return (
    // <MouseEasy>
    // <Mouse>

    <Routes>
      <Route
        index
        element={
          <div className="flex justify-center items-center w-screen h-screen bg-black">
            <Link to={"/layout"}>
              <span className="hover-target text-white text-5xl">
                Hello World!
              </span>
            </Link>
          </div>
        }
      />
      <Route path="/subway" element={<Data />} />
      <Route path="/board" element={<Board />} />
      <Route path="/keep" element={<AppXY />} />
      <Route path="/layout" element={<NewLayout />} />
      <Route
        path="*"
        element={
          <div className="flex justify-center items-center w-screen h-screen bg-black">
            <span className="hover-target text-white text-5xl">
              404 Not Found
            </span>
          </div>
        }
      />
    </Routes>
    // </Mouse>
    // </MouseEasy>
  );
};

export default App;
