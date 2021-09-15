import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ModalPlayer() {
    return (
       <div className="modalPlayerBackground position-fixed fixed-top d-flex w-100 h-100 align-items-center justify-content-center">
           <div className="modalPlayerBox">
           <iframe className="rounded-full" width="1280 " height="720" src="https://www.youtube.com/embed/3vauM7axnRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
       </div>
    )
}

export default ModalPlayer