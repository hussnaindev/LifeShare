import React from 'react';
import {auth} from "../../Firebase";
import SideBar from "../SideBar/SideBar";
import "./Chat.css";
import ChatBox from './ChatBox/ChatBox';

function Chat() {
    return (
        <section className='chatpage'>
            <SideBar profile={auth.currentUser.displayName} />
            <div className="chatbox_container">
                <ChatBox />
            </div>
        </section>
    )
}

export default Chat
