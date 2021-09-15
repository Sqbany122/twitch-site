import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            urlModerators: "https://api.twitch.tv/helix/clips?broadcaster_id=80128309",
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

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Klipy</h1>
                
            </div>
        )
    }
}