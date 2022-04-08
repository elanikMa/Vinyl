import "./Shop.css";
import ButtonAll from "./ButtonAll";

function ShopButton({itemsButton}) {

    return(
        <div className="blockButtonStyle" > 
        <div className="blockButton"> 
        
<button className="buttonShop buttonAll"> <a className="allA" href="http://localhost:3000/shop" > All </a> </button>
<button className="buttonShop" onClick={() => itemsButton('turntables')}> turntables  </button>
<button className="buttonShop" onClick={() => itemsButton('records')}>  vinyl-records  </button>
<button className="buttonShop" onClick={() => itemsButton('accessories')}> accessories </button>
</div> 

       
    </div>
    )
}

export default ShopButton;
