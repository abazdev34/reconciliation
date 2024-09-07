import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../../Card.module.css'
import { Product } from '../../redux/types'
// import Basket from '../../components/basket'

interface ProductCardProps {
	
	product: Product
}

// eslint-disable-next-line react-refresh/only-export-components
const Cart: React.FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch()
	const basket = useSelector((state: any) => state.basket)

	const isAdded = basket.find((el: any) => el.id === product.id)
	console.log('basket', isAdded)
	useEffect(() => {}, [])
	return (
		<div className={styles.card}>
			<img src={product.image} alt={product.title} className={styles.image} />
			<div className={styles.content}>
				<h2 className={styles.title}>{product.title}</h2>
				<p className={styles.description}>{product.description}</p>
				<p className={styles.price}>${product.price.toFixed(2)}</p>
				{isAdded ? (
					<Link to={'/basket'}>
						<button style={{background:"red"}}>Себетке баруу </button>
					</Link>
				) : (
					<button
						onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
						className={styles.addToCart}
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	)
}

export default Cart
