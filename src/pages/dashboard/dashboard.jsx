import React from 'react'
import HeaderDOM from '../../component/headerdom/header'
import TakeNote1 from '../../component/takenote1/takenote1'
import TakeNote2 from '../../component/takenote2/takenote2'
import TakeNote3 from '../../component/takenote3/takenote3'
import './dashboard.css'
import {getNotes} from '../../services/userservices'
import MiniDrawer from '../../component/navbar/navbar'
import { getArchive } from '../../services/userservices'
import { getTrash } from '../../services/userservices'
function Dashboard() {
    const[switchNotesContainers, setSwitchNotesContainers]= React.useState(false)
    const[notesArrayObj,setNotesArrayObj]=React.useState([])
    const[displayNav,setDislayNav]=React.useState(false)
    const[archiveState,setArchiveState]=React.useState("")
    const[notesState,setNotesState]=React.useState("")

    const RetriveNotes = ()=>{
        getNotes().then((resp) => {
            console.log(resp.data.data) 
            setNotesArrayObj(resp.data.data)       
        }).catch((err) => {
            console.log(err)
        })
    }
    const RetriveArchiveNotes = ()=>{
        getArchive().then((resp) => {
            console.log(resp.data.data) 
            setNotesArrayObj(resp.data.data)       
        }).catch((err) => {
            console.log(err)
        })
    }
    const RetriveTrashNotes=()=>{
        getTrash().then((resp) => {
            console.log(resp.data.data) 
            setNotesArrayObj(resp.data.data)       
        }).catch((err) => {
            console.log(err)
        })    
    }

     React.useEffect(() =>{
         if(archiveState==="ArchivedNotes")
         {
        RetriveArchiveNotes()
         }
        
         else if(archiveState==="TrashList")
         {
            RetriveTrashNotes()
         }
         else 
         {
            RetriveNotes()
         }

        },[switchNotesContainers,archiveState])

        const listenToTrash =(data) =>{
            console.log(data)
            if(data===true)
            {
                RetriveNotes()             
            }
        }

        const listenToArchive = (data) => {
            console.log(data)
            if(data===true)
            {
            RetriveNotes()             
            }
     } 
     const listenToUpdateNote = (data) => {
        console.log(data)
        if(data===true)
        {
        RetriveNotes()             
        }
 } 
     const listToColor= (data) => {
        console.log(data)
        if(data===true)
        {
        RetriveNotes()             
        }
 } 

    const listentotakenote1 = (data) => {
        console.log(data)
        if (data === true){
            setSwitchNotesContainers(true)
        }
        else{
            setSwitchNotesContainers(false)
        }
    } 

    const ArchiveList =(data)=>{
       setArchiveState(data)
    }

    const NotesList=(data)=>{
        setArchiveState(data)
    }
    const TrashNotes =(data)=>{
        setArchiveState(data)
    }

    const headerToDashboard  = (data) =>{
        if(data==true){
            setDislayNav(true)
        } 
        else
        {
            setDislayNav(false)
        }
     }
    
    return (
        <div>
            <HeaderDOM status={displayNav}  headerToDashboard={headerToDashboard} />
            <div className="Db-NotesContainer">
            <div className="takeNotesContainer">
            {
                switchNotesContainers ? <TakeNote2 listentotakenote1={listentotakenote1} /> : <TakeNote1  listentotakenote1={listentotakenote1}/>
            }
            </div>
            < MiniDrawer openNavBar={displayNav}  ArchiveList={ArchiveList} NotesList={NotesList} TrashNotes={TrashNotes}/>
            <div className="MainContainer">
                {
                    notesArrayObj.map(users=><TakeNote3 key={users.noteID} listenToArchive={listenToArchive} listenToUpdateNote={listenToUpdateNote} listenToTrash={listenToTrash} listToColor={listToColor} note3={users} />)
                }
            </div>
            </div>
        </div>
    )
}

export default Dashboard
