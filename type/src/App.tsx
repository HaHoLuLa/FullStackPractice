import { Route, Routes } from "react-router-dom"
import Data from "./pages/Data"

const App = () => {
  return (
    <Routes>
      <Route index element={<Data />} />
    </Routes>
  )
}

export default App