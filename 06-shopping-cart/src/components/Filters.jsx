import { useState, useId } from 'react'
import './Filters.css'
import { useFilter } from '../Hooks/useFilters.js'
import logo from '../Images/CafeteriaLogo.png';

export function Filters({ onChange }) {
    const { filters, setFilters } = useFilter() // Filtros

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            {/* <label htmlFor={categoryFilterId}>Categoria</label> */}
            <img src={logo} alt="Logo de fresas" />
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div id={categoryFilterId} className='button-category'>
                <button onClick={handleChangeCategory} value='all'>Todas</button >
                <button onClick={handleChangeCategory} value='laptops'>Laptops</button >
                <button onClick={handleChangeCategory} value='smartphones'>Smartphones</button >
                <button onClick={handleChangeCategory} value='fragrances'>Perfumes</button >
            </div>

        </section>
    )
}
