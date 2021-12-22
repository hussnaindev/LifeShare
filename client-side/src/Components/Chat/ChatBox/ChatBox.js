import {IconButton} from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Badge from '@mui/material/Badge';
import {addDoc, collection, onSnapshot, orderBy, query, Timestamp} from "firebase/firestore";
import {React, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {auth, firestore} from "../../../Firebase";
import './ChatBox.css';
import TextBox from "./TextBox";

const ChatBox = () => {
    const [messages, setMessages] = useState([])
    const [message,setMessage] = useState('')
    const {roomId} = useParams()
    const [roomRef, setRoomRef] = useState();
    
    useEffect(
        () => {
            onSnapshot(query(collection(firestore, "Users")),
                (users) => {
                    users.docs.map(
                        (user) => {
                            if (user.data().username === auth.currentUser.displayName) {
                                onSnapshot(query(collection(user.ref, "chatrooms")),
                                    (chatrooms) => {
                                        chatrooms.docs.map(
                                            (chatroom) => {
                                                setRoomRef(chatroom.ref)
                                                onSnapshot(query(collection(chatroom.ref, "messages"), orderBy("timestamp", "asc")),
                                                    (messages) => {
                                                        setMessages(
                                                            messages.docs.map(
                                                                (message) => (
                                                                    {
                                                                        key: message.id,
                                                                        to: message.data().to,
                                                                        from: message.data().from,
                                                                        timestamp: message.data().timestamp,
                                                                        message: message.data().message
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    }
                                                )
                                            }
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
            addDoc(collection(roomRef, "messages"), 
                {
                    to: 'reciever username',
                    from: auth.currentUser.displayName,
                    timestamp: Timestamp.now(),
                    message: message
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
    )
}

export default ChatBox