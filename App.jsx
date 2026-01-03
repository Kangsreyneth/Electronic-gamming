import React from 'react'
import Navbar from './components/Header/Navbar'
import BannerSlider from './components/Main/Home/Benner'
import TopCategory from './components/Main/TopCategory/TopCategory'
import BestStellers from './components/Main/BestStellers/BestStellers'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailBestSeller from './components/Main/BestStellers/DetailBestSeller'
import CartContext from './components/CartContext'
import Cate_Controller from './components/Main/TopCategory/Cate_Controller'



const App = () => {
  return (
    // <div>
    //   <Navbar/>
    //   <BannerSlider/>
    //   <TopCategory/>
    //   <BestStellers/>
    //   <Footer/>

    // </div>
    <BrowserRouter>
          <Navbar/>
        <Routes>
          {/* Route home page */}

          <Route path='/'element={    
              <div>
                <BannerSlider/>
                <TopCategory/>
                <BestStellers/>
                <Footer/>
                <DetailBestSeller/>
                <CartContext/>
              </div>
            }/>
            {/* route for product in best seller */}
            <Route path='/category/product/:id' element={<DetailBestSeller/>}/>
            <Route path='/controller/' element={<Cate_Controller/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

{/* element = switch 'case' */}