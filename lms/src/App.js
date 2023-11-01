import { Route, Routes } from "react-router-dom";
import HomeDefault from "./components/demos/HomeDefault";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="App">
        <Main />
      </div>
      <Routes>
        <Route path="/HomeDefault" element={<HomeDefault />} />
      </Routes>
    </>
  );
}

export default App;
