import React from 'react'
import { Button } from 'antd';
import pin from '../../asserts/pin.png'
import remainder from '../../asserts/remainder.jpeg'
import collaborator from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.29 AM (1).jpeg'
import color from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.30 AM.jpeg'
import addImage from '../../asserts/gallery.png'
import archive from '../../asserts/WhatsApp Image 2021-12-14 at 8.26.16 AM.jpeg'
import more from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.29 AM.jpeg'
import undo from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.31 AM (1).jpeg'
import redo from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.30 AM (1).jpeg'
import { Input } from 'antd';
import './takenote2.css'
import  { addNote } from '../../services/userservices'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TransitionsPopper from '../ColorPoper/colorpoper';

function TakeNote2(props) {

    const[noteObj , setNoteObj]= React.useState({UserID:parseInt(localStorage.getItem("userid")),Title:"",AddNotes:"",Archieve:false,Color:"",Trash:false})
    const handleClickAway = () =>{
        props.listentotakenote1(false)
    }

    const IsArchive = () =>{
        console.log("Archive")
        setNoteObj({...noteObj,Archieve:!noteObj.Archieve})
    }
    const IsTrash =()=>{
        console.log("Note Trash")
        setNoteObj({...noteObj,Trash:!noteObj.Trash})
    }

    const takeTitle= (e) => {
        setNoteObj({...noteObj, Title:e.target.value})
    }
    const takeDesciption= (e) =>{
        setNoteObj({...noteObj, AddNotes:e.target.value})
    }
    const submit= () => {
        addNote(noteObj).then((resp) => {
            console.log(resp)
            props.listentotakenote1(false)
        }).catch((err) => {
            console.log(err)
        })       
    }

    const TakeColor =(data)=>{
        console.log("Take Color")
        setNoteObj({...noteObj, Color:data})
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className="noteTwo" style={{backgroundColor:noteObj.Color.toString()}}>
        <div className="title">
        <input  onChange={takeTitle} style={{border:'none',outline:'none',backgroundColor:'transparent',width: 328}} placeholder="Title"/>
            <img src={pin} id="item1" alt="pin"/>                              
        </div>
        <input onChange={takeDesciption} style={{border:'none',outline:'none',backgroundColor:'transparent',width: 328}} placeholder="Take a note..."/> 
        <div className="Options">
            <div className="unit1">
            <img src={remainder} id="image" alt="one"/>
                <img src={collaborator} id="image" alt="two"/>
                 {/* <img src={color}  id="image" alt="three"/> */}
                 <TransitionsPopper action="create" noteObj={noteObj}  setNoteObj={setNoteObj} />
                <img src={addImage} id="image" alt="four"/>
                <img src={archive} onClick={IsArchive} id="image" alt="five"/>
                <img src={more} onClick={IsTrash} id="image" alt="six"/>
                <img src={undo} id="image" alt="seven"/>
                <img src={redo} id="image" alt="eight"/> 
            </div>
            <div className="unit2">
            <Button onClick={submit} style={{color:'black'}} id="button" type="link">Close</Button>
            </div>           
        </div>        
    </div>
    </ClickAwayListener>
    )
}

export default TakeNote2
