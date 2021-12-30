import axios from 'axios'

let config = {
    headers:{
        Authorization:"Bearer" +" "+ localStorage.getItem("token")
    }
}

export const login=async(obj) => {
    let response=await axios.post("https://localhost:44386/api/Users/userLogin",obj)
    return response
}
    export const register=async(obj) => {
        let response=await axios.post("https://localhost:44386/api/Users/userregister",obj)
        return response
}
export const addNote = async(obj) =>{
    let response = await axios.post("https://localhost:44386/api/Notes/addnotes", obj, config)
    return response
}
export const getNotes = async() =>{
    let response = await axios.get(`https://localhost:44386/api/Notes/getnotes?userid=${parseInt(localStorage.getItem("userid"))}`, config)
    return response
}
export const updateColor = async(obj) =>{
    let response = await axios.put(`https://localhost:44386/api/Notes/updatecolor?noteId=${obj.noteId}&colour=${obj.colour}`,"",config)
    return response
}
export const updateArchive = async(obj) =>{
    let response = await axios.put(`https://localhost:44386/api/Notes/notearchive?notes=${obj}`,"",config)
    return response
}

export const getArchive = async() =>{
    let response = await axios.get(`https://localhost:44386/api/Notes/getarchievenotes?userid=${parseInt(localStorage.getItem("userid"))}`, config)
    return response
}
export const UpdateNote = async (note) => {    
    return await axios.put(`https://localhost:44386/api/Notes/updatenotes`, note, config)
}
export const updateTrash = async(obj) =>{
    let response = await axios.put(`https://localhost:44386/api/Notes/notetrash?notes=${obj}`,"",config)
    return response
}
export const getTrash = async() =>{
    let response = await axios.get(`https://localhost:44386/api/Notes/gettrashnotes?userid=${parseInt(localStorage.getItem("userid"))}`, config)
    return response
}

