import React from 'react';

export default function ChatInput(props) {

    var [message, setMessage, handleSubmit] = [props.message, props.setMessage, props.handleSubmit];

    return (
        <div className="card-footer-msg-send">
            <div style={{ width: "100%", borderRadius: "12px", backgroundColor: "white", display: "flex", paddingRight: "15px", justifyContent: "space-between", alignItems: "center" }} className="input-group-msg-send">
                <input value={message} onChange={(e) => setMessage(e.target.value)} style={{ paddingLeft: "15px", borderRadius: "10px", fontSize: "22px", width: "92%", border: "0px solid transparent" }} type="text" name="message" placeholder="Type Message ..." className="form-control-input-msg" />
                <div style={{ display: "flex", gap: "15px", justifyContent: "space-around" }}>
                    <svg style={{ width: "25px", height: "auto", transform: "rotate(45deg" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                    <svg onClick={handleSubmit} style={{ cursor: "pointer", width: "25px", height: "auto", transform: "rotate(45deg)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}