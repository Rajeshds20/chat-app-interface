/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";

export default function ChatLog(props) {

    // useEffect(() => {
    //     console.log("ChatLog useEffect");
    //     async function FetchChats(index) {
    //         const response = await fetch(`http://3.111.128.67/assignment/chat?page=${index}`)
    //         const data = await response.json();
    //         const chatmsgs = await data.chats;
    //         // console.log(chats);
    //         chatmsgs.forEach(element => {
    //             // console.log(element);
    //         });
    //         props.setChats([...props.chats, chatmsgs]);
    //     }
    //     for (var i = 1; i < 5; i++) {
    //         FetchChats(i);
    //     }
    // }, []);

    return (
        <div style={{ margin: "0", padding: "0" }} className="box-body">
            <div style={{ margin: "0", padding: "0", height: "600px" }} className="direct-chat-messages">

                {
                    props.chats.map((chat, index) => {
                        return (chat.sender.self ?
                            <div className="direct-chat-msg right">
                                <div className="direct-chat-text right-text-msg">{chat.message}</div>
                            </div>
                            :
                            <div className="direct-chat-msg">
                                <img
                                    className="direct-chat-img"
                                    src={chat.sender.image}
                                    alt="message Sender"
                                />
                                <div className="direct-chat-text left-text-msg">
                                    {chat.message}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}