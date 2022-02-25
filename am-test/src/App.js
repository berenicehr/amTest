import './App.css';
import wordmark from '../src/images/wordmark.png'
import Rectangle from '../src/images/Rectangle.png'
import User from '../src/images/User.png'
import { Characters } from './components/Characters';
import { Students } from './components/Students';
import { Staff } from './components/Staff';
import { useState } from 'react';
import Modal from './components/Modal';


function App() {

  const [studentsToggled, setStudentsToggled] = useState(false);
  const [staffToggled, setStaffToggled] = useState(false);
  const [modal, setModal] =useState(false);

  const verify = () => {
    setModal(!modal)
    console.log(modal)
  }


  return (
    <div className="App">
      
      <nav>
        <ul className="nav-buttons">
          <li><button className="nav-button add" onClick={ () => setModal(!modal)} > AGREGAR 
          <img src={User} alt="UserAdd-icon" />
          </button></li>
          <li><button className="nav-button favorites"> FAVORITOS
          <img src={Rectangle} alt="favorites-icon" /></button></li>
          {modal ? <Modal 
            closeModal={setModal}
        />: null } 
        </ul>
       
      </nav>
      <div className="harry-potter-logo">
        <img src={wordmark} alt="harry-potter-logo" className='wordmark'/>
      </div>
      <div className="filter-menu">
        <p className="filter-label">Selecciona tu filtro</p>
        <div className="filter-buttons">
          <button className="filter-button" onClick={()=>setStudentsToggled(!studentsToggled)}> ESTUDIANTES </button>
          <button className="filter-button" onClick={()=>setStaffToggled(!staffToggled)}>STAFF</button>
        </div>
        <main>
          {staffToggled ? <Staff/> : <Characters /> && studentsToggled ? <Students/> : <Characters /> } 
        
        
        
        </main>
      </div>
      <div className="mobileNav" >
        <ul className="nav-buttons">
          <li><button className="nav-button add" onClick={ () => setModal(!modal)} > AGREGAR 
          <img src={User} alt="UserAdd-icon" />
          </button></li>
          <li><button className="nav-button favorites"> FAVORITOS
          <img src={Rectangle} alt="favorites-icon" /></button></li>
          {modal ? <Modal 
            closeModal={setModal}
        />: null } 
        </ul>
       
      </div>
    </div>
  );
}

export default App;
