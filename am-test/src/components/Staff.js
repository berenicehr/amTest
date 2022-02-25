import React from 'react'
import Save from '../images/Save.png'
import staff from '../hp-files/hp-staff.json'

export const Staff = () => {
  return (
    <div className="cards-container">
    {staff.map((info) => {
        return ( 
            <div key={info.actor} className="container">
             <div className="cards">
                 <div className="image-container">
                    <img className="image" src={info.image} alt="character"  />
                </div>   
                    <div className="card-text">
                       <div className="mobileText"> 
                            <div className='status-container'>
                                <div className ='status-text'>
                                    {info.alive ? <p className="status"> Vivo </p> :  <p className="status">Muerto </p> } 
                                    <p className="status"> / </p>
                                    {info.hogwartsStudent ? <p className="status"> Estudiante </p> :  <p className="status"> Staff </p> }
                                </div>
                                <img className="Save" src={Save}  alt="rectangle-icon"/>
                            </div>
                            <p className="name"> {info.name} </p>
                        </div>
                                <div className="card-detail">
                                        <p className="card-details">Cumpleaños:{info.dateOfBirth}</p>
                                        <p className="card-details"> Género: {info.gender}</p>
                                        <p className="card-details"> Color de ojos: {info.eyeColour}</p>
                                        <p className="card-details"> Color de pelo: {info.hairColour}</p>
                                 </div>    
                    </div>
            </div>
            </div>
        )
    })}
</div> 
  )
}
