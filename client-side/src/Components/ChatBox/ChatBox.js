import {React,useEffect,useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import './ChatBox.css'
import { IconButton } from "@material-ui/core";
import MessageBox from "./MessageBox";
import Badge from '@mui/material/Badge';
import AccountPic from './img.jpg'

const ChatBox = () =>
{

    const messagesInDB = [
        {by:'userName',
         to:'personName',
         time: '8:30PM',
         body: '2 ghanty m full stack functional website ban jaye ge? Ok bro '
        },
        {by:'personName',
        to:'userName',
        time: '8:45PM',
        body: 'Kal ka pora day include ha.... rat 12 baje se pehle krani ha '
        },
        {by:'userName',
        to:'personName',
        time: '8:54PM',
        body: 'Noice, BTW jo 100k reward mily ga naaaww.... Us m 1k ki mjhy b treat dey dena.....Ok bye'
        },
        {by:'personName',
        to:'userName',
        time: '9:02PM',
        body: 'Quiz will be on next Thursday during break time and ppt will be in regular classes ...in theory and lab classes as well'
        },
        {by:'userName',
        to:'personName',
        time: '9:20PM',
        body: 'After recieving many requests from students tomorrow test and ppt is postponed to next week....'
        },
        {by:'personName',
        to:'userName',
        time: '9:33PM',
        body: 'One module per student evaluation'
        },
        {by:'userName',
        to:'personName',
        time: '9:45PM',
        body: ' Sare jaldi class ma aa jayen sir wait ker rhe hain'
        },
        {by:'personName',
        to:'userName',
        time: '9:48PM',
        body: 'Its decided by mutual discussion with mam shazia...each student will be evaluated based on module implementation in the next lab....in the next lab we will learn how to perform unit testing.......'
        },
        {by:'userName',
        to:'personName',
        time: '9:52PM',
        body: 'From mam iram and mam shazia'
        },
        {by:'personName',
        to:'userName',
        time: '9:33PM',
        body: 'It is conformed that every std will complete one module till coming lab no relaxation'
        },

       
    ]

    const [messages, setMessages] = useState(messagesInDB)
    const [message,setMessage] = useState('')

    const handleMessage = (e) =>
    {
        console.log(e.target.value)
        setMessage(e.target.value)
    }

    const scrollToBotttom = (node) => 
    {
        console.log('node is',node)
        node.scrollTop = node.scrollHeight; 
    }   

    const handleMessageForm = (e) =>
    {
        e.preventDefault()

        const date = new Date()

        if(message!=='')
        {
           const messageObject = {
               by: 'userName',
               to: 'personName',
               time: (date.getHours() % 12) + ':' + date.getMinutes() + (date.getHours()<12?'AM':'PM'),
               body: message
           }
           const updatedMessages = messages.concat(messageObject)
           setMessages(updatedMessages)
           setMessage('')
        }
    }

    useEffect(()=>{
        scrollToBotttom(document.getElementById('display-messages-container'))
        },[messages])


    return(
        <div className="chatbox-container">
            <div className="chatbox">
                <div className="chatbox-header">
                        <Badge color="success" variant="dot" overlap="circular" >
                            <img className="account-pic" src={AccountPic} alt='account-pic' height={40} width={40}/>
                        </Badge>
                        <p className="chat-person">Hussnain Raza</p>
                </div>

                <div id="display-messages-container" className="display-messages-container">
                    { 
                        messages.map(message => <MessageBox message={message}/> )
                    }
                    
                </div>

                <div>
                    <form className="textbox-container" onSubmit={handleMessageForm}>
                      <input className="textbox" placeholder="type message..." value={message} onChange={handleMessage}></input>
                      
                      <IconButton className="sendIcon" onClick={handleMessageForm}>
                          <SendIcon style={{color:"black"}} fontSize="large"/>
                      </IconButton>
                     
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatBox