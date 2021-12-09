
import './App.css';
import imageInSrc from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    
      
<div >
      <div className="checkpoint"  style={{border:"solid 1px black",maxwidth:"100vw"}}> 
         <h1 className={"title red"}>Emir</h1>
          <br />
          <img src={imageInSrc} alt='image in the src folder'/>
            <br />

            <img src="/imageInPublic.jpg" alt='image in the public folkder'/>
          </div>
          <br />
    <video width="500" height="300" controls>
      <source src="myVideo.mp4" type="Video/mp4" />
    </video>

</div>
         

    






    
  
  );
}

export default App;
