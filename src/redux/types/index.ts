import { ActionTypes } from '../actionTypes'

interface IState {
	product: Product[]
basket: Basket[]

}


interface Product 
		{
			id:number,
			title: string,
			description: string,
			price: number,
			countInStock: number,
			rating: number,
			image: string, 
		}
		interface Basket
		{
			id:number,
			title: string,
		name: string,
			price: number,
			countInStock: number,	
			rating: number,
			image: string, 
			quantity: number
				
		
		}


		interface GET_PRODUCTS{
  type: typeof ActionTypes.GET_PRODUCTS,
  payload: Product[]
}

interface ADD_TO_CART{
  type: typeof ActionTypes.ADD_TO_CART,
  payload: Product[]  

}

interface DELETE_FROM_CART{
  type: typeof ActionTypes.DELETE_FROM_CART,
  payload: Product[]
}
interface ActionTypes {
	GET_PRODUCTS: typeof ActionTypes.GET_PRODUCTS
	ADD_TO_CART: typeof ActionTypes.ADD_TO_CART
	DELETE_FROM_CART: typeof ActionTypes.DELETE_FROM_CART	
	
	
}
		export type IActionTypes = GET_PRODUCTS | ADD_TO_CART | DELETE_FROM_CART 
		export type {IState, Product, Basket, }