import video from './vinyl.mp4';
import './App.css';
import FirstPageBlock from './FirstPageBlock';


function FirstPage() {

    return( <div> 

            <div> 
<video autoPlay muted loop> 
<source src={video} type='video/mp4' />
</video>
</div> 
<div className='textMariaBlock'> 
<p className='textStyle'> 
If I want to remember something, I just have to put on the right
record, and everything sits in front of me </p>
<h5 className='textStyle'> Erich Maria Remarque</h5> 
</div> 

 </div>
    )

}

export default FirstPage;
