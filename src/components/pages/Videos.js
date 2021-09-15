import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

export default class Videos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            urlVideos: "https://api.twitch.tv/helix/videos?user_id=" + process.env.REACT_APP_MY_CHANNEL_ID,
            requestOptions: {
                method: 'GET',
                headers: { 
                    'Authorization': 'Bearer ' + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
                    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
                },
            },
            videos: []
        }
    }

    getVideos() {
        fetch(
            this.state.urlVideos, 
            this.state.requestOptions
        )
        .then(response => response.json())
        .then(json => {
            console.log(json);
            json.data.map(item => {
                item.thumbnail_url = item.thumbnail_url.replace(/thumb0-%{width}x%{height}.jpg/i, "thumb0-320x180.jpg")
                item.duration = item.duration.replace(/h|m/gi, ":");
                item.duration = item.duration.replace(/s/gi, "");
                let date = dateFormat(item.created_at, "mediumDate");
                item.created_at = date;
            })
            this.setState({ videos: json.data, loading: false });
        })
    }

    componentDidMount() {
        this.getVideos();
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Zapisy transmisji</h1>
                {this.state.loading || !this.state.videos ? (
                    <div>Loading....</div>
                ) : (
                    <div className="d-grid clipsGrid py-4">
                        {this.state.videos.map(item => (
                            <button className="clipButtonBox p-0 position-relative embed-responsive embed-responsive-16by9 text-light rounded-full">
                                <img className="embed-responsive-item rounded-full" src={item.thumbnail_url} allowfullscreen></img>
                                <div className="clipsBackgroundDark position-absolute d-flex flex-column justify-content-between left-0 top-0 p-2 w-100 h-100">
                                    <div className="d-flex justify-content-between align-items-start text-xs w-100">
                                        <div className="clipViewCount px-2 d-flex align-items-center rounded-full">
                                            <i className="fas fa-eye"></i>{item.view_count}
                                        </div>
                                        <div className="clipViewCount px-2 h-5 d-flex align-items-center rounded-full">
                                            {item.duration}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <img className="rounded-medium" src={item.gameInfo}></img>
                                        <div className="clipTextBox d-flex flex-column">
                                            <div className="clipTitleItem px-2 h-5 d-flex align-items-center rounded-full">
                                                {item.title}
                                            </div>
                                            <div className="clipOtherInfoBox px-2 h-5 d-flex align-items-center rounded-full">
                                                {item.created_at}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}