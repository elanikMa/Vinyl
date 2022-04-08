import ShopButton from "./ShopButton";
import ShopInSait from "./ShopInSait";
import { useState } from 'react';
import { dataShop } from './dataShop';



function AllShop () {

const[firstShop, setFirstShop] = useState(dataShop);

const shopFilter = (searchTerm) => {
  const newShopFilter = dataShop.filter(element => element.searchTerm === searchTerm);
setFirstShop(newShopFilter);  
}

    return(
        <div> 
            
         <ShopButton itemsButton = {shopFilter}  />
         <ShopInSait items = {firstShop} />
         
        </div>
    )
}

export default AllShop;