import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { containers, ingredients } from '../../../redux/data/index'
import './tara.scss'
// Контейнер салмагын эсептөө компоненти
const ContainerWeightCalculator = () => {
	const dispatch = useDispatch()
	const [id, setId] = useState('')
	const [category, setCategory] = useState('')
	const [weight, setWeight] = useState('')

	const [totalWeight, setTotalWeight] = useState(0)
	const arrFromLocalStorage = JSON.parse(
		localStorage.getItem('calculations') || '[]'
	)
	const resultsLocalStorage = JSON.parse(
		localStorage.getItem('results') || '[]'
	)
	const handleAddCalculation = () => {
		const isAdded = arrFromLocalStorage.find((el) => el.id === id)

		if (isAdded) {
			alert('Текшерилген ')
		} else if (id && weight) {
			const tare = containers[id]
			console.log('tare', tare)
			const newWeight = Number(weight) - tare

			setId('')
			setWeight('')
			localStorage.setItem(
				'calculations',
				JSON.stringify([
					...arrFromLocalStorage,
					{ id, weight: Number(weight), tare, newWeight },
				])
			)
		} else {
			alert('Контейнер ID же салмак туура эмес. Текшерип көрүңүз.') // Эскертүү
		}
	}

	const handleFinish = () => {
		const date = new Date()
		if (arrFromLocalStorage.length === 0) {
			alert('Эсептөөлөр жок. Алгач эсептөөлөрдү кошуңуз.') // Эскертүү
			return // Эгер эсептөөлөр жок болсо, функцияны токтотуу
		}

		localStorage.setItem(
			'results',
			JSON.stringify([...resultsLocalStorage, { totalWeight, category, date }])
		)

		localStorage.removeItem('calculations')
		window.location.reload()
	}

	useEffect(() => {
		const total = arrFromLocalStorage.reduce(
			(sum, calc) => sum + calc.newWeight,
			0
		)
		setTotalWeight(total)
	}, [id])

	const search =
		ingredients?.filter((el) => el.includes(category.toLowerCase())) || []

	console.log('ingredients', ingredients)
	console.log('search', search)

	return (
		<div className='container2'>
			<h2 className='text '>Контейнер салмагын эсептөө</h2>
			<div className='space'>
				<p className='tara-input-group'>
					<input
						type='text'
						className='tara-input'
						placeholder=' '
						onChange={(e) => setCategory(e.target.value)}
					/>
					<label className='tara-label'>Продуктанын түрү м:тоок</label>
					{search.length > 0 && (
						<div className='tara-search-list'>
							{search.map((el, index) => (
								<p key={index} className='tara-label'>
									{el}
								</p>
							))}
						</div>
					)}
				</p>

				<p className='tara-input-group'>
					<input
						type='text'
						className='tara-input'
						placeholder=' '
						onChange={(e) => setId(e.target.value)}
					/>
					<label className='tara-label'>Мисалы: т10</label>
				</p>
				<p className='tara-input-group'>
					<input
						type='number'
						className='tara-input'
						placeholder=' '
						onChange={(e) => setWeight(e.target.value)}
					/>
					<label className='tara-label'>Салмак м:4000</label>
				</p>
				<button onClick={handleAddCalculation} className='btn'>
					Дагы
				</button>
				<button onClick={handleFinish} className='btn'>
					Аяктады
				</button>
			</div>
			<div className='mt'>
				<h3 className='text'>Эсептөөлөр:</h3>
				{arrFromLocalStorage?.map((calc, index) => (
					<p key={index} className='text-sm text-gray-600'>
						{calc.id}: {calc.weight} - {calc.tare} = {calc.newWeight}
					</p>
				))}
				<p className='text'>Жалпы таза салмак: {totalWeight}</p>
			</div>
		</div>
	)
}

export default ContainerWeightCalculator
