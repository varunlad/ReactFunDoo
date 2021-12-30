import React from 'react'
import { Input, Space } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { Image } from 'antd';
import img from '../../asserts/googlepic.png';
import './signup.css'
import { register } from '../../services/userservices';
import { useHistory } from 'react-router-dom'; // version 5.2.0

const lnameRegex=/^[A-Z]{1}[a-z]{2,20}$/
const fnameRegex=/^[A-Z]{1}[a-z]{2,20}$/
const signupEmailRegex=/^[a-zA-Z0-9]+[._+]{0,1}[a-zA-Z0-9]*@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.]*[a-zA-Z]*$/
const signupPasswordRegex=/^[a-zA-Z0-9]{1,}[@&*?_-]{1}[a-zA-Z0-9]*$/     

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
function Signup() {
    const history=useHistory()
    const [signUpError, setSignUpError]=React.useState({fNameBorder:"",fNameErrorMsg:"",lNameBorder:"",lNameErrorMsg:"",emailSignUpBorder:"",emailSignUpErrorMsg:"",passwordSignUpBorder:"",passwordSignUpErrorMsg:"",confirmpasswordSignUpBorder:"",confirmpasswordSignUpErrorMsg:""})
    const [signUpObj,setSignUpObj]=React.useState({FirstName:"",LastName:"",Email:"",Password:""})
    const[confirmPasswordobj,setconfirmPasswordobj]=React.useState({confirmPassword : ""})

    const takeFName=(e) => {
        setSignUpObj({...signUpObj,FirstName:e.target.value})
    }
    const takeLName=(e) => {
        setSignUpObj({...signUpObj,LastName:e.target.value})
    }
    const takeEmail=(e) => {
        setSignUpObj({...signUpObj,Email:e.target.value})
    }
    const takePassword=(e) => {
        setSignUpObj({...signUpObj,Password:e.target.value})
    }
    
    const Next=() => {
        console.log(signUpObj)
       
        if(confirmPasswordobj.confirmPassword == signUpObj.Password)
        {
            console.log(true)
            setSignUpError("")
        }
        else{
            console.log(false)
            setSignUpError({confirmpasswordSignUpBorder:"1px solid red",confirmpasswordSignUpErrorMsg:"password do not match"})
        }

        if(fnameRegex.test(signUpObj.FirstName)) {
            console.log(true)
            setSignUpError("")
        }
        else {
            console.log(false)
            setSignUpError({fNameBorder:"1px solid red",fNameErrorMsg:"Invalid firstname"})
        }
        if(lnameRegex.test(signUpObj.LastName)) {
            console.log(true)
            setSignUpError("")
        }
        else {
            console.log(false)
            setSignUpError({lNameBorder:"1px solid red",lNameErrorMsg:"Invalid lastname"})
        }
        if(signupEmailRegex.test(signUpObj.Email)) {
            console.log(true)
            setSignUpError("")
        }
        else {
            console.log(false)
            setSignUpError({emailSignUpBorder:"1px solid red",emailSignUpErrorMsg:"Invalid email"})
        }
        if(signupPasswordRegex.test(signUpObj.Password)) {
            console.log(true)
            setSignUpError("")
        }
        else {
            console.log(false)
            setSignUpError({passwordSignUpBorder:"1px solid red",passwordSignUpErrorMsg:"Invalid password"})
        }

        if(fnameRegex.test(signUpObj.FirstName) && lnameRegex.test(signUpObj.LastName) && signupEmailRegex.test(signUpObj.Email) &&signupPasswordRegex.test(signUpObj.Password)) {
            console.log(true)
            setSignUpError("")
            register(signUpObj).then((resp) => {  
                console.log(resp)
                history.push('/dashboard')
            }).catch((err) => {           
                console.log(err)
            })
        }       
        else {
            console.log(false)
            setSignUpError({fNameBorder:"1px solid red",fNameErrorMsg:"Invalid firstname",lNameBorder:"1px solid red",lNameErrorMsg:"Invalid lastname",emailSignUpBorder:"1px solid red",emailSignUpErrorMsg:"Invalid email",passwordSignUpBorder:"1px solid red",passwordSignUpErrorMsg:"Invalid password",confirmpasswordSignUpBorder:"1px solid red",confirmpasswordSignUpErrorMsg:"password do not match"})
        }
    }
    return (
        <div class="maincontainer">
            <div class="sets" >
                <div class="set1">
                  <div class="set1a">
                      <div><img src={img} alt="" class="googlelogo2"/></div>
                      <div class="createtext">Create your Google Account</div>
                  </div>
                <div class="set1b">
                      <div class="div1">
                      <div class="input"   ><Input  onChange={takeFName} size="middle" style={{border:signUpError.fNameBorder,width:175}} placeholder="First Name" /></div>
                      <p id="errormsg">{signUpError.fNameErrorMsg}</p>
                      <div class="input" ><Input size="middle" style={{border:signUpError.lNameBorder,width:175}}  onChange={takeLName}  placeholder="Last Name" /></div>
                      <p id="errormsg">{signUpError.lNameErrorMsg}</p>
                      </div>
                      <div class="input" ><Input style={{border:signUpError.emailSignUpBorder,width:375}} onChange={takeEmail} size="middle" placeholder="User Name" /></div>
                      <p id="errormsg">{signUpError.emailSignUpErrorMsg}</p>
                      <div class="message">You can see used letters and periods</div>
                      <div class="create"><Button  id="text1" type="text">Use my current Email Address Insted</Button></div>
                </div>
                <div class="set1c">
                <div class="div1">
                      <div class="input" > <Input  style={{border:signUpError.passwordSignUpBorder,width:175}}  onChange={takePassword} size="middle" placeholder="Password" /></div>
                      <p id="errormsg">{signUpError.passwordSignUpErrorMsg}</p>
                      <div class="input" > <Input style={{border:signUpError.confirmpasswordSignUpBorder,width:175}} size="middle" placeholder="Confirm" /></div>
                      <p id="errormsg">{signUpError.confirmpasswordSignUpErrorMsg}</p>
                      </div>
                      <div class="message">Use 8 or more charaters with a mix of letters, numbers and symbols </div>
                      <div class="checkbox"><Checkbox onChange={onChange}>Show Password</Checkbox></div>
                </div>
                <div class="set1d"> 
                  <div class="div1">
                  <div><Button onClick={()=>{history.push('/')}} id="text" type="text">Sign in insted</Button></div>
                  <div class="nextbutton"><Button onClick={Next} type="primary">Next</Button></div>
                  </div>
                </div>
                </div>
                <div class="set2">
                    <div class="set2a">
                    <Image src='https://ssl.gstatic.com/accounts/signup/glif/account.svg' preview={false} className='img' />
                    
                    <div class="commontext">One Account All of Google</div>
                    <div class="commontext">Working For You</div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Signup
