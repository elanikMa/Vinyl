import { useState } from 'react';
import { data } from './data';
import './About.css';

function Picture() {

const [pictureSlaid, setPictureSlaid] = useState(0);
const { id, image } = data[pictureSlaid];

const fuctionButtonNext = () => {
setPictureSlaid((pictureSlaid =>{
    pictureSlaid ++;
    if(pictureSlaid > data.length -1) {
        pictureSlaid = 0; 
    }
    return pictureSlaid;
}))

}

const functionButtonBack = () =>{
    setPictureSlaid((pictureSlaid =>{
        pictureSlaid --;
        if(pictureSlaid < 0) {
            pictureSlaid = data.length -1
        }
        return pictureSlaid;
    }))

}

    return(
        <div key={id}> 
<div className='styleButtonOicture'> 
<img className='pictureCss' src={ image } alt='picture' />
<button className='next buttonNextBack' onClick={fuctionButtonNext}> ⚪ </button>
<button className='back buttonNextBack' onClick={functionButtonBack} > ⚪  </button>
</div>
        </div>
    )
}

export default Picture;