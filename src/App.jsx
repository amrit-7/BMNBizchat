import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import AllUsers from "./Routes/Allusers/allusers";
import "./App.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/allusers" element={<AllUsers />} />
      </Route>
    </Routes>
  );
}

export default App;
