import {createBrowserRouter,RouterProvider,Route, createRoutesFromElements} from "react-router-dom";
import HomePage from "./Pages/HomePgae/HomePage";
import Products from "./Pages/Products/Products";
import ProductPage from './Pages/ProductPage/ProductPage'
import Articles from "./Pages/Articles/Articles";
import ArticlePage from './Pages/ArticlePage/ArticlePage'
import LoginPage from './Pages/Admin/LoginPage'
import PanelPage from './Pages/Admin/PanelPage'

function App() {


  const router = createBrowserRouter(

    createRoutesFromElements(
<>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductPage/>} />

          <Route path="/articles" element={<Articles/>} />
          <Route path="/article/:id" element={<ArticlePage/>} />
          
          <Route path="/admin" element={<LoginPage/>} />
          <Route path="/admin/panel" element={<PanelPage/>} />

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
