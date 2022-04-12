import ShopButton from "./ShopButton";
import ShopInSait from "./ShopInSait";
import { useState } from 'react';
import { dataShop } from './dataShop';
import ButtonAll from "./ButtonAll";
import Contact from "../Home/Contact";

function AllShop () {

const[firstShop, setFirstShop] = useState(dataShop);

const shopFilter = (searchTerm) => {
  const newShopFilter = dataShop.filter(element => element.searchTerm === searchTerm);
setFirstShop(newShopFilter);  
}

const allShopButton = () => {
  setFirstShop(dataShop);
}


    return(
<div> 
        <div className="d"> 
        <ButtonAll itemsButtonAll = {allShopButton} />   
        <ShopButton itemsButton = {shopFilter}  />
        </div> 
          <div> 
        <ShopInSait items = {firstShop} />
        </div> 
        <div> 
          <Contact />
        </div>
</div>
)
}

export default AllShop;
