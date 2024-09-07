import { useState, useEffect } from 'react'

const AddProduct = () => {
    const [product, setProduct] = useState({
        countInStock: 0,
        description: '',
        id: '',
        image: '',
        price: 0,
        rating: 0,
        title: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setProduct(prevProduct => ({
            ...prevProduct,
            [id]: id === 'price' || id === 'countInStock' || id === 'rating' ? Number(value) : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Локалдык сактагычтан учурдагы data массивин алуу
        const existingData = JSON.parse(localStorage.getItem('data')) || []

        // Жаңы продуктту кошуу
        const updatedData = [...existingData, product]

        // Жаңыртылган data массивин локалдык сактагычка сактоо
        localStorage.setItem('data', JSON.stringify(updatedData))

        // Форманы тазалоо
        setProduct({
            countInStock: 0,
            description: '',
            id: '',
            image: '',
            price: 0,
            rating: 0,
            title: '',
        })

        console.log('Product added:', product)
        console.log('Updated data in localStorage:', updatedData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Продукттун аты </label>
                    <input type="text" id="title" value={product.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Продукттун баасы </label>
                    <input type="number" id="price" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="image">Продукттун сүрөтү </label>
                    <input type="text" id="image" value={product.image} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="rating">Продукттун рейтинги </label>
                    <input type="number" id="rating" value={product.rating} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="countInStock">Продукттун складтагы саны </label>
                    <input type="number" id="countInStock" value={product.countInStock} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="id">Продукттун ID си </label>
                    <input type="text" id="id" value={product.id} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Продукттун мүнөздөмөсү </label>
                    <input type="text" id="description" value={product.description} onChange={handleChange} />
                </div>

                <button type="submit">Кошуу</button>
            </form>
        </div>
    )
}

export default AddProduct