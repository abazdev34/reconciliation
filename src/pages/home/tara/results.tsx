import './tara.scss'
const Results = () => {
	const results = JSON.parse(localStorage.getItem('results') || '[]')
	const deleteResults = () => {
		localStorage.removeItem('results')
		window.location.reload()
	}
	return (
		<div className='tara-results'>
			{results.length > 0 && <h1>{results.length} виды ингредиентов</h1>}
			<button onClick={deleteResults}>Очистить</button>
			<table>
				<tr className='tara-result'>
					<th>Ингредиенты</th>
					<th>Вес</th>
					<th>Дата</th>
				</tr>
				{results.map((result, index) => (
					<tr className='tara-result' key={index}>
						<th>{result.category}</th>
						<th>{result.totalWeight}</th>
						<th>{result.date}</th>
					</tr>
				))}
			</table>
		</div>
	)
}

export default Results
