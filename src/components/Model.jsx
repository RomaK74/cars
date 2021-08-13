export const Model = ({name, price, image}) => {
    return (
        <div className="cars__item">
            <h5>{name}</h5>
            <h6>{price}</h6>
            <img src={image} alt="car"/>
        </div>)
}