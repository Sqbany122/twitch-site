import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default class Moderators extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            urlModerators: "https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=" + process.env.REACT_APP_MY_CHANNEL_ID,
            requestOptions: {
                method: 'GET',
                headers: { 
                    'Authorization': 'Bearer ' + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
                    'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
                },
            },
            moderators: []
        }
    }

    getModerators() {
        fetch(
            this.state.urlModerators, 
            this.state.requestOptions
        )
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({ moderators: json.data, loading: false });
        })
    }

    componentDidMount() {
        // this.getModerators();
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Moderatorzy</h1>
                
            </div>
        )
    }
}