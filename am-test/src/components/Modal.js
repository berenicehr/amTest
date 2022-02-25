import React from 'react'
import styled from 'styled-components'
import exitButton from '../images/exitButton.png'




const Modal = ({closeModal} ) => {



  return (

   

    <>
 
    <Overlay>
        <ModalContainer>
        
        <ModalHeader>
            <Character> Agrega un personaje</Character>
            <Exit onClick={ () => closeModal(false) }><img src={exitButton} alt="exitButton"></img></Exit>   
        </ModalHeader>
              

        <div className="modal-inputs"> 

            <Input id="inputname"></Input>
            <label htmlFor="inputname">NOMBRE</label>
            <Input id="birthday"></Input>
            <label htmlFor="birthday">CUMPLEAÑOS</label>
            <Input id="eyecolour"></Input>
            <label htmlFor="eyecolour">COLOR DE OJOS</label>
            <Input id="haircolour"></Input>
            <label htmlFor="haircolour"> COLOR DE PELO</label>

        </div> 
        <div className ="radiobutton-container">
            <div className="select-gender"> 
                <Gender >GÉNERO</Gender>
                <input className="radiobutton" id="woman"type="radio"></input>
                <label htmlFor="woman">Mujer</label>
                <input className="radiobutton" id="man" type="radio"></input>
                <label htmlFor="man">Hombre</label>
            </div>

            <div className ="select-position">
                <Position>POSICIÓN</Position>
                <input className="radiobutton" id="student"type="radio"></input>
                <label htmlFor="student">Estudiante</label>
                <input className="radiobutton" id="staff" type="radio"></input>
                <label htmlFor="staff">Staff</label>
            </div>         
        </div>

        <div className="imageDownload">
            <input className="image-file" type="file"></input>
        </div>
        <div className="modal-button">
            <button className="filter-button "> Guardar</button>
        </div>
                
        </ModalContainer>
    </Overlay>
    </>
  )
}

export default Modal

const Overlay = styled.div`
width:100vw;
height:100vh;
position:fixed;
top:0;
left:0;
background: rgba(0, 0, 0, .5);
display:flex;
justify-content: flex-end;

`

const ModalContainer =styled.div`
width: 45.4375em;
height: 37.25em;
background: #FFFFFF;
border-radius: 0.625em;
 display:flex;
flex-direction:column;
margin-right: 2em;
margin-top: 1em;

`

const Character = styled.p`
color: rgba(0, 0, 0, 1);
font-size: 1.5em;
font-family: 'Open Sans', sans-serif; 
font-weight: 600;
`

const Input = styled.input`
width: 19.375em;
height: 4.5625em;
background: #263238;
opacity: 0.06;
border-radius: 0.333333125em, 0.333333125em, 0, 0;
margin-left: 2.125em;
margin-top:  1.375em;
margin-bottom:  1.375em;
`


const Gender = styled.p`
font-size: 0.875em;
font-weight: 400;
font-family: 'Open Sans', sans-serif; 
Letter: 1%
`

const Position = styled.p`
font-size: 0.875em;
font-weight: 400;
font-family: 'Open Sans', sans-serif; 
Letter: 1%
`

const ModalHeader = styled.div`
display:flex;
justify-content: space-between;
`

const Exit = styled.button`
background: none;
border:none;
margin-right: 2.125em;
`


