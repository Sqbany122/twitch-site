import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

export default class Moderators extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            url: "https://api.bigosbloodyboy.pl/getModerators.php",
            moderators: [],
            countModerators: "",
        }
        this.getModerators = this.getModerators.bind(this);
    }

    getModerators() {
        fetch(
            this.state.url
        )
        .then(response => response.json())
        .then(json => {
            json.data.map(item => {
                let date = dateFormat(item.created_at, "mediumDate");
                item.created_at = date;
            })
            this.setState({ moderators: json.data, countModerators: json.data.length, loading: false });
        })
    }

    componentDidMount() {
        this.getModerators();
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Moderatorzy ({this.state.countModerators})</h1>
                {this.state.loading || !this.state.moderators ? (
                    <div>Loading....</div>
                ) : (
                <div className="d-grid clipsGrid py-4">
                    {this.state.moderators.map(item => (
                        <a className="d-flex flex-row moderatorBox" href={"https://twitch.tv/" + item.login} target="_blank">
                            <img className="rounded-circle" width="80px" src={item.profile_image_url} />
                            <div className="d-flex flex-column justify-content-center">
                                <span className="text-light"><b>{item.display_name}</b></span>
                                <span className="moderatorCreatedAt">cr. {item.created_at}</span>
                            </div>
                        </a>
                    ))}
                </div>
                )}
            </div>
        )
    }
}