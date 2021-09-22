import React, {useState} from 'react';
export default class ModalPlayer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modalPlayerBackground position-fixed fixed-top d-flex flex-column w-100 h-100 align-items-center justify-content-center" onClick={this.props.showPlayer}>
                <div>
                    <div className="w-100 d-flex justify-content-end text-light my-2">
                        {this.props.downloadUrl ? (                
                            <div className="downloadButton">
                                <a href={this.props.downloadUrl} className="btn rounded-full px-4"><b>Pobierz klip (.mp4)</b></a>
                            </div>
                        ) : (null)}
                        <button className="bg-white btn rounded-full margin-left" onClick={this.props.showPlayer}><i class="fas fa-times"></i></button>
                    </div>
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
            </div>
        )
    }
}