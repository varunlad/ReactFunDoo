import * as React from 'react';
import Box from '@mui/material/Box';
import color from '../../asserts/WhatsApp Image 2021-12-14 at 8.27.30 AM.jpeg'
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import './colorpoper.css'
import { Key } from '@mui/icons-material';
import { updateColor } from '../../services/userservices';

export default function TransitionsPopper({action,noteObj,setNoteObj,noteid,listenToPopper}) {

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const colorsList = [{colorId:0,name:'white',hexValue:'#fff'},
  {colorId:1, name:'Red', hexValue:'#f28b82'},
  {colorId:2, name:'Orange', hexValue:'#fbbc04'},
  {colorId:3, name:'Yellow', hexValue:'#fff475'},
  {colorId:4, name:'Green', hexValue:'#ccff90'},
  {colorId:5, name:'Teel', hexValue:'#a7ffeb'},
  {colorId:6, name:'Blue', hexValue:'#cbf0f8'},
  {colorId:7, name:'Dark blue', hexValue:'#aecbfa'},
  {colorId:8, name:'Purple', hexValue:'#d7aefb'},
  {colorId:9, name:'Pink', hexValue:'#fdcfe8'},
  {colorId:10, name:'Brown', hexValue:'#e6c9a8'},
  {colorId:11, name:'Grey', hexValue:'#e8eaed'},]

  const TakeColor = (e) => {
      let a=e.target.id
      a=a.replace('#','%23')
    let ColorObjDemo={noteId:noteid,colour:a}
   console.log(e.target)
     if(action == "create")
     {
         console.log("Color")
         console.log(e.target.id)
         setNoteObj({...noteObj,Color:e.target.id})
     }
     else{
         console.log(noteid)
         console.log(ColorObjDemo)    
      updateColor(ColorObjDemo).then((resp) => {
            console.log(resp)
            listenToPopper(true)
            setOpen(false)
        }).catch((err) => {
            console.log(err)
        }) 
     }

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div className="BgColorMain">
      <img src={color} onClick={handleClick} id="image" alt="three"/>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className='BgColor'>{
                   colorsList.map(color => <div title={color.hexValue} className="Bgcolor2" id={color.hexValue} style={{backgroundColor:color.hexValue}} key={color.colorId} onClick={TakeColor} ></div>)
                }               
                </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
}