import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default class Clips extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            url: "https://api.twitch.tv/helix/clips?broadcaster_id=80128309",
            urlGame: "https://api.twitch.tv/helix/games?id=",
            requestOptions: {
                method: 'GET',
                headers: { 
                    'Authorization': 'Bearer ' + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
                    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
                },
            },
            clips: []
        }
        this.getClips = this.getClips.bind(this);
        this.getGames = this.getGames.bind(this);
    }

    getClips() {
        fetch(
            this.state.url, 
            this.state.requestOptions
        )
        .then(response => response.json())
        .then(json => {
            this.setState({ clips: json.data, loading: false });
            console.log(this.state.clips)
            this.state.clips.map((clip, index) => {
                this.getGames(clip, index);
            });
        })
    }

    getGames(clip, index) {
        fetch(
            this.state.urlGame + clip.game_id, 
            this.state.requestOptions
        )
        .then(response => response.json())
        .then(json => {
            clip.gameInfo = json.data[0].box_art_url.replace(/{width}x{height}/i, '52x72');
            this.state.clips[index] = clip;
            this.setState({ clips: this.state.clips });
        })
    }
 
    componentDidMount() {
        this.getClips();
    }

    render() {
        return (
            <div className="row py-4 px-4">
                {this.state.loading || !this.state.clips ? (
                    <div>Loading....</div>
                ) : (
                    <div className="d-grid clipsGrid py-4">
                        {this.state.clips.map(item => (
                            <button className="clipButtonBox p-0 position-relative embed-responsive embed-responsive-16by9 text-light rounded-full">
                                <img className="embed-responsive-item rounded-full" src={item.thumbnail_url} allowfullscreen></img>
                                <div className="position-absolute d-flex flex-column justify-content-between left-0 top-0 p-2 w-100 h-100">
                                    <div className="d-flex justify-content-between align-items-start text-xs w-100">
                                        <div className="clipViewCount px-2 d-flex align-items-center rounded-full">
                                            <i className="fas fa-eye"></i>{item.view_count}
                                        </div>
                                        <div className="clipViewCount px-2 h-5 d-flex align-items-center rounded-full">
                                            0:{Math.floor(item.duration)}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <img className="rounded-medium" src={item.gameInfo}></img>
                                        <div className="clipTextBox d-flex flex-column">
                                            <div className="clipTitleItem px-2 h-5 d-flex align-items-center rounded-full">
                                                {item.title}
                                            </div>
                                            <div className="clipTitleBox px-2 h-5 d-flex align-items-center rounded-full">
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