
import './App.css'
import { Routes, Route } from "react-router-dom";
import Card from './components/Card/Card'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
import Navi from './components/Navi'
import Product from './components/Product/Product'
import Products from './components/Products/Products';

function App() {
 

  return (
    <>
   <Navi></Navi>
   <div className='main h-auto  min-h-[1000px]'>
	<div className='flex items-center  justify-center pt-[100px]'>
	
   
   {/* <Product></Product> */}

   {/* <Login></Login> */}

   {/* <SignUp></SignUp> */}

    <Routes>
		
		<Route path="/" element={<Login />} />
		<Route path="/signup" element={<SignUp></SignUp>} />
		<Route path="/products" element={<Products></Products>} />
		<Route path="/product/:id" element={<Product></Product>} />
		
	</Routes>


	</div>
	
    
   </div>
	
    </>
  )
}

export default App
