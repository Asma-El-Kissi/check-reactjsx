import './App.css';
import './style.css';
import ImageSource from "./ImageSource.PNG"
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className='title' className='red'>Asma El Kissi</h1>
        <h1 style={{color:'blue'}}> Full stack JavaScript Developer </h1>      
        <br></br>
        <img src={ImageSource} alt='ImageSource' width="320" height="240"/>
        
        <img src="/ImagePublic.png" alt="ImagePublic" width="320" height="240"/>
        <br></br>
        <video style={{ width: "320", height: "240" }} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div> </div>
  );
}
export default App;
