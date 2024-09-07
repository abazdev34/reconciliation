import { Link } from 'react-router-dom'
import '../../App.scss' // SCSS файлын импорттау

const Header = () => {
	return (
		<header className='header'>
	
			<div className='nav'>
				
				
						<Link to='/' className='nav-link'>
							Главная
						</Link>
					
				
						{/* <Link to='/basket' className='nav-link'>
							Себет
						</Link>
				 */}
				
						{/* <Link to='/cart' className='nav-link'>
							Сатып алу
						</Link> */}
				
				
						{/* <Link to='/add_product' className='nav-link'>
							Продукт кошуу
						</Link> */}
						{/* <Link to='/container' className='nav-link'>
					тара
						</Link> */}
						<Link to='/container2' className='nav-link'>
					Сверка
						</Link>
						<Link to='/results' className='nav-link'>
					Результат
						</Link>
				
		
			</div>
		</header>
	)
}

export default Header
