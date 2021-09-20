import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import ModalPlayer from '../ModalPlayer';

export default class Clips extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            url: "https://api.bigosbloodyboy.pl/getClips.php",
            urlGame: "https://api.twitch.tv/helix/games?id=",
            requestOptions: {
                method: 'GET',
                headers: { 
                    'Authorization': 'Bearer ' + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
                    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
                },
            },
            showPlayer: false,   
            embedUrl: "",
            clips: []
        }
        this.showPlayer = this.showPlayer.bind(this);
        this.getClips = this.getClips.bind(this);
        this.getGames = this.getGames.bind(this);
    }

    getClips() {
        fetch(
            this.state.url
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
            let date = dateFormat(clip.created_at, "mediumDate");
            clip.created_at = date;
            clip.embed_url = clip.embed_url + "&parent=bigosbloodyboy.pl"
            this.state.clips[index] = clip;
            this.setState({ clips: this.state.clips });
        })
    }

    showPlayer(item) {
        this.setState({ embedUrl: item, showPlayer: !this.state.showPlayer});
    }

    componentDidMount() {
        this.getClips();
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Klipy</h1>
                {this.state.loading || !this.state.clips ? (
                    <div>Loading....</div>
                ) : (
                    <div className="d-grid clipsGrid py-4">
                        {this.state.clips.map(item => (
                            <button className="clipButtonBox p-0 position-relative embed-responsive embed-responsive-16by9 text-light rounded-full" onClick={() => this.showPlayer(item.embed_url)}>
                                <img className="embed-responsive-item rounded-full" src={item.thumbnail_url} allowfullscreen></img>
                                <div className="clipsBackgroundDark position-absolute d-flex flex-column justify-content-between left-0 top-0 p-2 w-100 h-100">
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
                                            <div className="clipOtherInfoBox  px-2 h-5 d-flex align-items-center rounded-full">
                                                {item.creator_name}
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
                {this.state.showPlayer ? (
                    <ModalPlayer embedUrl={this.state.embedUrl} showPlayer={this.showPlayer} /> ) : (
                    null
                )}
            </div>
        )
    }
}