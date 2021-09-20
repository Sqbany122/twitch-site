import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

export default class BannedUsers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            url: "https://api.bigosbloodyboy.pl/getBannedUsers.php",
            bannedUsers: []
        }
        this.getBannedUsers = this.getBannedUsers.bind(this);
    }

    getBannedUsers() {
        fetch(
            this.state.url
        )
        .then(response => response.json())
        .then(json => {
            json.data.map(item => {
                let date = dateFormat(item.created_at, "mediumDate");
                item.created_at = date;
            })
            this.setState({ bannedUsers: json.data, loading: false });
        })
    }

    componentDidMount() {
        this.getBannedUsers();
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Zbanowani użytkownicy</h1>
                {this.state.loading || !this.state.bannedUsers ? (
                    <div>Loading....</div>
                ) : (
                <div className="d-grid clipsGrid py-4">
                    {this.state.bannedUsers.map(item => (
                        <div className="d-flex flex-row moderatorBox">
                            <img className="rounded-circle" width="80px" src={item.profile_image_url} />
                            <div className="d-flex flex-column justify-content-center">
                                <span className="text-light"><b>{item.display_name}</b></span>
                                <span className="moderatorCreatedAt">Zbanowany przez: {item.moderator_name}</span>
                                <span className="moderatorCreatedAt">cr. {item.created_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
        )
    }
}