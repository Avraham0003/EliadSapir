import {createBrowserRouter,RouterProvider,Route, createRoutesFromElements} from "react-router-dom";
import HomePage from "./Pages/HomePgae/HomePage";
import BeatPage from "./Pages/Beat/BeatPage";
import ProductsPage from "./Pages/Products/Products";
function App() {


  const router = createBrowserRouter(

    createRoutesFromElements(
<>
          <Route path="/" element={<HomePage/>} />
          <Route path="/beat" element={<BeatPage/>} />
          <Route path="/products" element={<ProductsPage/>} />

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
