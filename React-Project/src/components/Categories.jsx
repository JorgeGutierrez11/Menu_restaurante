import { IoFastFood,IoCafe } from "react-icons/io5"

const categories = {
    "fast_food": {
        name: "Fast Food",
        icon: () => IoFastFood()
    },
    "cafeteria": {
        name: "Bakery",
        icon: () => IoCafe()
    }
}

function Categories () {
    const submit = (event) => {
        event.preventDefault()
        const category = event.nativeEvent.submitter.value
        
        // filterByCategory(category) <- filtra los productos por la categoria que se le pasa en ´category´
    }
    return(
        <form onSubmit={submit} className="categories">
            {
                Object.entries(categories).map(([id, category]) => {
                    return (
                        <button key={id} value={category.name} type="submit">  
                            {category.icon()}
                            {category.name}
                        </button>
                    )
                })
            }
        </form>
    )
}

export default Categories