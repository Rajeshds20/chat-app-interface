/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import TripHeader from './TripHeader';
import ChatInput from './ChatInput';
const ChatLog = React.lazy(() => import('./ChatLog'))

const ChatContainer = () => {

    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);

    useEffect(() => {
        console.log("ChatContainer useEffect");
        async function FetchChats() {
            const response = await fetch("http://3.111.128.67/assignment/chat?page=1");
            const data = await response.json();
            const chatmsgs = await data.chats;
            // console.log(chats);
            chatmsgs.forEach(element => {
                console.log(element);
            });
            setChats(chatmsgs);
        }
        FetchChats();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(message);
        setMessage("");
        setChats(chats =>
            [...chats,
            {
                id: message,
                message: message,
                sender: {
                    self: true,
                },
            }]
        )
    }

    return (
        <div style={{ margin: "0", padding: "1%", height: "100%" }} align="center" className="page-content page-container" id="page-content">
            <div style={{ margin: "0", padding: "0" }} className="padding">
                <div style={{ margin: "0", padding: "1%", minWidth: "100%", border: "1px solid black" }} className="row container d-flex justify-content-center">
                    <div className="col-md-12 chat-bar">
                        <div className="box box-warning direct-chat direct-chat-warning">
                            <ChatHeader />
                            <TripHeader />
                            <ChatLog chats={chats} />
                            <ChatInput message={message} setMessage={setMessage} handleSubmit={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ChatContainer;
