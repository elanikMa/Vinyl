import fotoVinyl from './fotoVinyl.jpg';
import library from './library.jpg';
import turntable from './turntable.jpg';

function FirstPageBlock() {
    return(
        <div> 

<div className='blockAllFoto'> 

<div className='blockTwoFoto'> 
            <div className='positionImage' > 
        <img  src={library} width='480px' height='300px' alt='library' />
        <div className='textBlockInFoto'> 
        <p className='fonTextInFoto'> listening together </p>
        </div>
        <div className='shopVinyl'> 
        <p className='fonTextInFoto'> shop vinyl records </p>
        </div>
            </div>


            <div className='positionImage'> 
            <img src={fotoVinyl} width='480px' height='300px' alt='vinyl' />     
        <div className='shopAccessories'> 
        <p className='fonTextInFoto'> accessories </p>
        </div>
            </div>
</div>

            <div className='positionImage'> 
            <img src={turntable} width='465px' alt='vinyl' />     
        <div className='shopTurntables'> 
        <p className='fonTextInFoto'> shop turntables </p>
        </div>
        <div className='playTogether'> 
        <p className='fonTextInFoto'> Play together </p>
        </div>
            </div>
</div>

        </div>
    )
}

export default FirstPageBlock;
