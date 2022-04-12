import './Category.css'

function Category(props) {
    return (
        <div
        className='category'
        >
            <p>{props.category}</p>
        </div>
    )
}

export default Category;