import {createBrowserRouter,RouterProvider,Route, createRoutesFromElements} from "react-router-dom";
import HomePage from "./Pages/HomePgae/HomePage";
import BeatPage from "./Pages/Beat/BeatPage";
function App() {


  const router = createBrowserRouter(

    createRoutesFromElements(
<>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Beat" element={<BeatPage/>} />
</>
    )
  );

  return (
    <div className="App" dir="rtl">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
