import React from 'react'
import './takenote3.css'
import pin from '../../asserts/pin.png'
import remainder from '../../asserts/remainder.jpeg'
import collaborator from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.29 AM (1).jpeg'
import addImage from '../../asserts/gallery.png'
import archive from '../../asserts/WhatsApp Image 2021-12-14 at 8.26.16 AM.jpeg'
import more from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.29 AM.jpeg'
import undo from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.31 AM (1).jpeg'
import redo from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.30 AM (1).jpeg'
import { Input } from 'antd';
import TransitionsPopper from '../ColorPoper/colorpoper'
import { updateArchive } from '../../services/userservices'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { UpdateNote } from '../../services/userservices'
import { updateTrash } from '../../services/userservices'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
  };

function TakeNote3({note3,listenToArchive,listToColor,listenToUpdateNote,listenToTrash}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[addNotes,setAddNotes]=React.useState(note3.addNotes)
  const [title,setTittle]=React.useState(note3.title);

  const takeDescription =(e) => {
    setAddNotes(e.target.value)
}

const takeTitle =(e) => {
    setTittle(e.target.value)
}
const update =()=>{
    let obj={noteID:note3.noteID,
        title: title,
        addNotes:addNotes}
    UpdateNote(obj).then((res) => {
        console.log(res)
        handleClose();
        listenToUpdateNote(true)
    }).catch((e) => {
        console.log(e)
    })
}

    const listenToPopper = (data)=>{
       if(data===true)
       {
         listToColor(true);
       }
    }

    const submit= () => {
      let noteArchive=note3.noteID
      updateArchive(noteArchive).then((resp) => {
          console.log(resp)
          listenToArchive(true)
      }).catch((err) => {
          console.log(err)
      })  
    } 
    const TrashNoteClick =() =>{
      let noteTrash=note3.noteID
      updateTrash(noteTrash).then((resp) => {
          console.log(resp)
          listenToTrash(true)
      }).catch((err) => {
          console.log(err)
      }) 
    }    

    return (
    <div className="note3"  style={{backgroundColor:note3.color}}>
        <div class="note3a">
         <div id="noteProps"  onClick={handleOpen}> {note3.title} </div>
         <div><img src={pin} id="item1" alt="pin"/>   </div>                                    
        </div>
        <div class="note3b">
        <div id="noteProps" onClick={handleOpen}>{note3.addNotes}</div>
        </div>
        <div class="note3c">
              <img src={remainder} id="image1" alt="one"/>
                <img src={collaborator} id="image1" alt="two"/>
                 {/* <img src={color} id="image1" alt="three"/> */}
                 <TransitionsPopper listenToPopper={listenToPopper} action="update"  noteid={note3.noteID}/>
                <img src={addImage} id="image1" alt="four"/>
                <img src={archive} onClick={submit}  id="image1" alt="five"/>
                <img src={more} onClick={TrashNoteClick}  id="image1" alt="six"/>
        </div>    
        <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <Box sx={style}>
               <div>
                 <div className="noteTwoA"  style={{backgroundColor:note3.color}}>
        <div className="titleA">
        <input   style={{border:'none',outline:'none',backgroundColor:'transparent',width: 328}} onChange={takeTitle} defaultValue={title} placeholder="Title"/>
            <img src={pin} id="item1" alt="pin"/>                              
        </div>
        <input  style={{border:'none',outline:'none',backgroundColor:'transparent',width: 328}} onChange={takeDescription}  defaultValue= {addNotes} placeholder="Take a note..."/> 
        <div className="OptionsA">
            <div className="unit1A">
            <img src={remainder} id="image" alt="one"/>
                <img src={collaborator} id="image" alt="two"/>
                 {/* <img src={color}  id="image" alt="three"/> */}
                 <TransitionsPopper listenToPopper={listenToPopper} action="create"  noteid={note3.noteID} />
                <img src={addImage} id="image" alt="four"/>
                <img src={archive} onClick={submit} id="image" alt="five"/>
                <img src={more} onClick={TrashNoteClick} id="image" alt="six"/>
                <img src={undo} id="image" alt="seven"/>
                <img src={redo} id="image" alt="eight"/> 
            </div>
            <div className="unit2a">
            <Button onClick={update} style={{color:'black'}} id="button" type="link">Close</Button>
            </div>           
        </div>        
        </div>
        </div>
        </Box>
        </Modal>
    </div>
    
    )
}

export default TakeNote3
