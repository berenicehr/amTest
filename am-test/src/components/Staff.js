import React from 'react'
import Save from '../images/Save.png'
import staff from '../hp-files/hp-staff.json'

export const Staff = () => {
  return (
    <div className="cards-container">
    {staff.map((member) => {
        return ( 
            <div key={member.actor}>
             <div className="cards">
                 <div className="image-container">
                    <img className="image" src={member.image} alt="character" />
                </div>   
                    <div className="card-text">
                        <div className='status-container'>
                        <div className ='status-text'>
                                {member.alive ? <p className="status"> Vivo </p> :  <p className="status">Muerto </p> } 
                                <p> / </p>
                                {member.hogwartsStudent ? <p className="status"> Estudiante </p> :  <p className="status"> Staff </p> }
                                </div>
                            <img className="Save" src={Save}  alt="rectangle-icon"/>
                        </div>
                            <p className="name"> {member.name} </p>
                   
                                <div className="card-detail">
                                        <p className="card-details">Cumpleaños:{member.dateOfBirth}</p>
                                        <p className="card-details"> Género: {member.gender}</p>
                                        <p className="card-details"> Color de ojos: {member.eyeColour}</p>
                                        <p className="card-details"> Color de pelo: {member.hairColour}</p>
                                 </div>    
                    </div>
             </div>
            </div>
        )
    })}
    </div>
  )
}
