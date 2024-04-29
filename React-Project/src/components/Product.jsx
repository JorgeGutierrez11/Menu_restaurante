function Product ({name, url, price}) {
    return(
        <div className="product-card">
            {name} 
            <img src={url} alt={name} />
            {price}
        </div>
    )
}

export default Product 