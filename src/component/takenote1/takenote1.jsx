import React from 'react'
import { Input } from 'antd';
import './takenote1.css'
import newList from '../../asserts/icons8-checked-checkbox-50.png'
import drawing from '../../asserts/icons8-draw-64.png'
import image from '../../asserts/gallery.png'
function TakeNote1(props) {
    const takeclick =  () => {
        console.log(props)
        props.listentotakenote1(true)
    }
    return (
        <div class="noteone" role="textbox" onClick={takeclick} >
            <Input placeholder="Take a Note ..."  style={{height:35,width:450,borderRadius:5,borderColor:'transparent',backgroundColor:'transparent'}} />     
            <img src={newList} id="item" alt="noteImage"/>  
            <img src={drawing} id="item" alt="noteDraw"/>       
            <img src={image}id="item" alt="noteDraw"/>
            
    </div>
    )
}

export default TakeNote1
