import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Basket from './components/basket'
import Header from './components/header'
import AddProduct from './pages/addProduct'
import Home from './pages/home'
import ContainerUpdateComponent from './pages/home/container'
import ContainerWeightCalculator from './pages/home/tara/tara'
import Results from './pages/home/tara/results'

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/basket' element={<Basket />} /> */}
				{/* <Route path='/add_product' element={<AddProduct />} /> */}
				<Route path='/container' element={<ContainerUpdateComponent />} />
				<Route path='/container2' element={<ContainerWeightCalculator />} />
				<Route path='/results' element={<Results/>} />
			</Routes>
		</div>
	)
}

export default App
