
const MenuProduct = ({item}) => {
    
    const {image, price, description, recipe }=item;
    // console.log(image)
    return (
        <div className='flex space-x-4'>
            <img className='w-[100px] rounded-full' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{description}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuProduct;