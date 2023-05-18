/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function ChatLog(props) {

    return (
        <div style={{ margin: "0", padding: "0" }} className="box-body">
            <div style={{ margin: "0", padding: "0", height: "600px" }} className="direct-chat-messages">

                {
                    props.chats.map((chat, index) => {
                        return (chat.sender.self ?
                            <div key={index} className="direct-chat-msg right">
                                <div className="direct-chat-text right-text-msg">{chat.message}</div>
                            </div>
                            :
                            <div key={index} className="direct-chat-msg">
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

                <div className="direct-chat-msg right">
                    <div className="direct-chat-text right-text-msg">Integer ultricies malesuada quam.Duis ac nulla varius diam ultrices rutrum.Aenean ullamcorper orci et vulputate fermentum.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Integer ultricies malesuada quam.</div>
                </div>
                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.
                    </div>
                </div>

                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.
                    </div>
                </div>

                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.
                    </div>
                </div>

                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Duis ac nulla varius diam ultrices rutrum.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.
                    </div>
                </div>

                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.
                    </div>
                </div>

                <div className="direct-chat-msg right">
                    <div className="direct-chat-text right-text-msg">Integer ultricies malesuada quam.Duis ac nulla varius diam ultrices rutrum.Aenean ullamcorper orci et vulputate fermentum.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Integer ultricies malesuada quam.</div>
                </div>

                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Quisque vitae varius ex, eu volutpat orci.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.
                    </div>
                </div>

                <div className="direct-chat-msg right">
                    <div className="direct-chat-text right-text-msg">
                        Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>

                <div className="direct-chat-msg">
                    <img
                        className="direct-chat-img"
                        src="https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0"
                        alt="message Sender"
                    />
                    <div className="direct-chat-text left-text-msg">
                        Integer ultricies malesuada quam.Quisque vitae varius ex, eu volutpat orci.Duis ac nulla varius diam ultrices rutrum.
                    </div>
                </div>

            </div>
        </div>
    );
}