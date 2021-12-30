import React from 'react'
import { Input, Space } from 'antd';
import { Button } from 'antd';
import './login.css'
import img from '../../asserts/googlepic.png';
import { login } from '../../services/userservices';
import "antd/dist/antd.css";
import { useHistory } from 'react-router-dom'; // version 5.2.0

const emailRegex=/^[a-zA-Z0-9]+([.#_$+-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$/
const passwordRegex=/^[a-zA-Z0-9]{1,}[A-Z]*[0-9]*[@&#%$_-]*[a-zA-Z0-9]$/

function Login() {

    let history=useHistory()
    const[totalError,setTotalError]=React.useState({emailBorder:"",emailMessage:"",passwordBorder:"",passwordMessage:""})

    const[loginObj,setLoginObj]=React.useState({email:"",password:""})

    const takeEmail=(e) => {
        setLoginObj({...loginObj,email:e.target.value})
    }
    const takePassword=(e) => {
        setLoginObj({...loginObj,password:e.target.value})
    }

      const next=() => {
        console.log(loginObj)
        if(emailRegex.test(loginObj.email)) {
            console.log(true)
            setTotalError("")
        }
        else {
            console.log(false)
            setTotalError({emailBorder:"1px solid red",emailMessage:"Invalid email"})
        }

        if(passwordRegex.test(loginObj.password)) {
            console.log(true)
            setTotalError("")
        }
        else {
            console.log(false)
            setTotalError({passwordBorder:"1px solid red",passwordMessage:"Invalid email"})
        }

        if(emailRegex.test(loginObj.email) && passwordRegex.test(loginObj.password)) {
            console.log(true)
         setTotalError("")
         login(loginObj).then((resp) => {
            console.log(resp)
            localStorage.setItem("token",resp.data.token);
            localStorage.setItem("userid",resp.data.data.userID)
            history.push('/dashboard')
        }).catch((err) => {
            console.log(err)
        })
        }
         else {
          console.log(false)
           setTotalError({emailMessage:"Enter correct Email",emailBorder:"1px solid red",passwordMessage:"Enter correct password",passwordBorder:"1px solid red"})
         }
            }
    return (
        <div class="main-container">
            <div class="group" >
                <div class="group1">
                     <div><img src={img} alt="" class="googlelogo"/></div>
                     <div class="signin">Sign in </div>
                     <div class="text"> Use your Google Account</div>
                </div>
                <div class="group2">
                      <div class="input1" style={{border:totalError.emailBorder}} ><Input   onChange={takeEmail}   size="middle" style={{width:300}} placeholder="Email or Phone" /></div>
                      <p class="error">{totalError.emailMessage}</p>
                      <div class="inputpassword" style={{border:totalError.emailBorder}} ><Input  onChange={takePassword} size="middle" style={{width:300}} placeholder="Password" /></div>
                      <p class="error">{totalError.passwordMessage}</p>
                      <div class="forgot"><Button id="forgotpassword" type="text">Forgot Password?</Button></div>
                </div>   
               <div class="group3">
                   <div class="notyourcomp">Not your computer? Use Guest mode to sign in privately.</div>
                   <div class="learn">Learn more</div>
               </div>
               <div class="group4">
                   <div class="create1"><Button onClick={()=>(history.push('/signup'))} id="text" type="text">Create Account</Button></div>
                   <div class="button"><Button onClick={next} type="primary">Next</Button></div>
               </div>
            </div>       
        </div>
    )
}

export default Login
