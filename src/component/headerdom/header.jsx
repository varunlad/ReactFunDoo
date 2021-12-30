import React from 'react'
import img1 from '../../asserts/menu.svg'
import img2 from '../../asserts/goolekeeplogo.svg'
import img3 from '../../asserts/search.svg'
import img4 from '../../asserts/refresh.svg'
import img5 from '../../asserts/icons8-view-module-24.png'
import img6 from '../../asserts/settings.svg'
import img7 from '../../asserts/icons8-view-module-24.png'
import img8 from '../../asserts/image2.png'
import { Input } from 'antd';
import './header.css'
import { useHistory } from 'react-router-dom'


function HeaderDOM(props) {
  
    let history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push("/")
    }
    const menuClick = ()=> {
 
        console.log("Onclick of Menu")
        if(props.status==false)
        {
            props.headerToDashboard(true)
        }
        else{
            props.headerToDashboard(false)
        }
    }

    return (
        <div className="header-Content">              
        <div className="logo-Content">
        <img src={img1} onClick={menuClick} alt="menu" id="menu"/>
           <img src={img2} id="smallchild1" alt="keeplogo"/>
           <div className="Keep-Text" >keep</div>     
       </div>
        <div className="aa">
          <img  id="aa1" src={img3} alt="searchlogo"/>
          <Input placeholder="Search"  style={{height:30,borderRadius:5,borderColor:'whitesmoke',backgroundColor:'whitesmoke'}}/>
       </div>
       <div className="bb">
           <img  src={img4} id="last-view" alt="search"/> 
           <img src={img5}  id="last-view" alt="search"/> 
           <img src={img6}  id="setting1" alt="search"/> 
       </div>
       <div className="cc">
           <img  src={img7}  id="last-view" alt="search"/> 
           <img src={img8}  onClick={logout} id="profile" alt="search"/> 
       </div>
</div>
    )
}

export default HeaderDOM
