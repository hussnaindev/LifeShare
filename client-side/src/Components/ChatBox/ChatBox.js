import {IconButton} from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Badge from '@mui/material/Badge';
import {addDoc, collection, onSnapshot, orderBy, query, Timestamp} from "firebase/firestore";
import {React, useEffect, useState} from "react";
import {auth, firestore} from "../../Firebase";
import SideBar from "../SideBar/SideBar";
import './ChatBox.css';
import TextBox from "./TextBox";

const ChatBox = () => {
    const [messages, setMessages] = useState([])
    const [message,setMessage] = useState('')
    
    useEffect(
        () => {
            onSnapshot(query(collection(firestore, "Users")),
                (col) => {
                    col.docs.map(
                        (doc) => {
                            if (doc.data().username === auth.currentUser.displayName) {
                                onSnapshot(query(collection(doc.ref, "sent messages"), orderBy('timestamp', 'asc')),
                                    (msgCol) => {
                                        setMessages(
                                            msgCol.docs.map(
                                                (msg) => (
                                                    {
                                                        key: msg.id,
                                                        to: msg.data().to,
                                                        timestamp: msg.data().timestamp,
                                                        body: msg.data().body
                                                    }
                                                )
                                            )
                                        )
                                    }
                                )
                            }
                        }
                    )
                }
            )
        }, []
    )
    
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const scrollToBotttom = (node) =>  {
        node.scrollTop = node.scrollHeight; 
    }   

    const handleChatBoxForm = (e) => {
        e.preventDefault()

        if (message && auth.currentUser) {
            onSnapshot(query(collection(firestore, "Users")),
                (col) => {
                    col.docs.map(
                        (doc) => {
                            if (doc.data().username === auth.currentUser.displayName) {
                                addDoc(collection(doc.ref, "sent messages"), 
                                    {
                                        to: 'reciever username',
                                        timestamp: Timestamp.now(),
                                        body: message
                                    }
                                )
                            }
                        }
                    )
                }
            )
        }
        
        setMessage("");
    }

    useEffect(
        () => {
            scrollToBotttom(document.getElementById('display-messages-container'))
        },[messages]
    )

    return(
        <div className="chatpage">
            <SideBar profile={auth.currentUser.displayName} />
            <div className="chatbox-container">
                <div className="chatbox">
                    <div className="chatbox-header">
                            <Badge color="success" variant="dot" overlap="circular" >
                                <AccountCircleIcon fontSize='large'></AccountCircleIcon>
                                {/* in case if we want to show profile image instead of account icon*/}
                                {/*<img className="account-pic" alt='account-pic' src={} height={40} width={40}/>*/}
                            </Badge>
                            <p className="chat-person">{auth.currentUser.displayName}</p>
                    </div>

                    <div id="display-messages-container" className="display-messages-container">
                        { 
                            messages.map(message => <TextBox message={message}/> )
                        }
                        
                    </div>

                    <div>
                        <form className="input-textbox-container" onSubmit={handleChatBoxForm}>
                        <input className="input-textbox" placeholder="type message..." value={message} onChange={handleMessage}></input>
                        
                        <IconButton className="sendIcon" onClick={handleChatBoxForm}>
                            <SendIcon style={{color:"black"}} fontSize="large"/>
                        </IconButton>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox