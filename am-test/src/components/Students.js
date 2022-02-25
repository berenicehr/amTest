import React from 'react'
import students from '../hp-files/hp-students.json'
import Save from '../images/Save.png'

export const Students = () => {
  return (
    <div className="cards-container">
        {students.map((student) => {
            return ( 
                <div key={student.actor}>
                 <div className="cards">
                     <div className="image-container">
                        <img className="image" src={student.image} alt="character" />
                    </div>   
                        <div className="card-text">
                            <div className='status-container'>
                            <div className ='status-text'>
                                {student.alive ? <p className="status"> Vivo </p> :  <p className="status">Muerto </p> } 
                                <p> / </p>
                                {student.hogwartsStudent ? <p className="status"> Estudiante </p> :  <p className="status"> Staff </p> }
                                </div>
                                <img className="Save" src={Save}  alt="rectangle-icon"/>
                            </div>
                                <p className="name"> {student.name} </p>
                       
                                    <div className="card-detail">
                                            <p className="card-details">Cumpleaños:{student.dateOfBirth}</p>
                                            <p className="card-details"> Género: {student.gender}</p>
                                            <p className="card-details"> Color de ojos: {student.eyeColour}</p>
                                            <p className="card-details"> Color de pelo: {student.hairColour}</p>
                                     </div>    
                        </div>
                </div>
                </div>
            )
        })}
        </div>
  )

}

