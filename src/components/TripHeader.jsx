import React from "react";

export default function TripHeader(props) {
    return (
        <div className='trip-header'>
            <div className='trip-header-info'>
                <img src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o" className='group-dp' alt='Group DP' />
                <div className='trip-header-info_text'>
                    <div className='trip-header-text'>
                        <span>From </span>
                        <span style={{ fontWeight: "900", color: "black" }}>IGI Airport, T3</span>
                        <br />
                        <span>To </span>
                        <span style={{ fontWeight: "900", color: "black" }}>Sector 28</span>
                    </div>

                </div>
            </div>
            <svg style={{ marginRight: "20px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        </div>
    );
}