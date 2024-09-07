import { useDispatch, useSelector } from 'react-redux'
import { ActionTypes } from '../redux/actionTypes'
import { Basket as BasketType, IState } from '../redux/types'

const Basket = () => {
	// Redux-тан себеттегі элементтерді алу
	const basket = useSelector((state: IState) => state.basket)
	console.log('basket', basket)
	const total = basket.reduce((acc, el) => acc + el.price, 0)
	const sum = basket.reduce((acc, el) => acc + el.quantity, 0)
	const totalPrice = basket.reduce((acc, el) => acc + el.price * el.quantity, 0)
	const imageStyle = {
		width: '100px',
		height: '100px',
		marginRight: '10px',
	}
	const dispatch = useDispatch()
	return (
		<div>
			<h2>Себет{sum}</h2>
			{totalPrice}
			{basket.length > 0 ? (
				basket.map((item: BasketType) => (
					<div key={item.id} style={itemStyle}>
						<img src={item.image} alt={item.name} style={imageStyle} />
						<h3>{item.name}</h3>
						<p>Бағасы: {item.price * item.quantity} тг</p>
						<p>Саны: {item.quantity}</p>

						<button
							onClick={() =>
								dispatch({ type: ActionTypes.ADD_TO_CART, payload: item })
							}
						>
							+
						</button>

						<button
							onClick={() =>
								dispatch({
									type: ActionTypes.UPDATE_CART_QUANTITY,
									payload: item,item
								})
							}
						>
							-
						</button>
						<p>{total}</p>
						<button
							onClick={() =>
								dispatch({ type: ActionTypes.DELETE_FROM_CART, payload: item })
							}
						>
							delete
						</button>
					</div>
				))
			) : (
				<p>Себетіңіз бос.</p>
			)}
		</div>
	)
}

// Стильдер
const itemStyle = {
	border: '1px solid #ccc',
	borderRadius: '5px',
	padding: '10px',
	margin: '10px 0',
	display: 'flex',
	alignItems: 'center',
}

const imageStyle = {
	width: '100px',
	height: '100px',
	marginRight: '10px',
}

export default Basket
