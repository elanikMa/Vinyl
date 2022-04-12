
import './Shop.css';

function ShopInSait({items}) {

return(
    <div className='blockShopPosition' >
{items.map((element => {
const {id, price, image, searchTerm, nameShop} = element;    

return(
    <div className='product-card' key={id} > 
        <img src={image} alt='picture' width='300px'   height="240px" />
        <p> { nameShop } </p>
        <p> { price } € </p>
    </div>

)

}))
}
    </div>
    )
}

export default ShopInSait;