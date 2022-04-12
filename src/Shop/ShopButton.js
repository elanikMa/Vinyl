import "./Shop.css";
import ButtonAll from "./ButtonAll";

function ShopButton({itemsButton}) {

    return(
        <div> 
<button className="buttonShop" onClick={() => itemsButton('turntables')}> turntables  </button>
<button className="buttonShop" onClick={() => itemsButton('records')}>  vinyl-records  </button>
<button className="buttonShop" onClick={() => itemsButton('accessories')}> accessories </button>
</div> 

    )
}

export default ShopButton;
