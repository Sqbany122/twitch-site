import React, {useState} from 'react';
import { Link } from 'react-router-dom';
export default class ModalPlayer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modalPlayerBackground position-fixed fixed-top d-flex w-100 h-100 align-items-center justify-content-center" onClick={this.props.showPlayer}>
                <div className="modalPlayerBox">
                <iframe
                        src={this.props.embedUrl}
                        height="720px"
                        width="1280px"
                        className="rounded-full"
                        allowfullscreen="true">
                    </iframe>
                </div>
            </div>
        )
    }
}