import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default class Moderators extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            moderators: {
                barteeex: "https://static-cdn.jtvnw.net/jtv_user_pictures/d05824c6-e59c-41b9-a960-bb01d0b10a5c-profile_image-50x50.png",
                cloudcredo: "https://static-cdn.jtvnw.net/jtv_user_pictures/7cc0bd03-0d94-4b55-a381-e36705a82eb3-profile_image-50x50.png",
                dotykproboszcza6955: "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-50x50.png",
                fapcio_krvl: "https://static-cdn.jtvnw.net/jtv_user_pictures/4ae2f242-b647-4fbf-9ca9-e8247c82f1d5-profile_image-50x50.png",
                kokooo270: "https://static-cdn.jtvnw.net/jtv_user_pictures/a2173dd6-65bc-4b8b-b489-e86198f795dd-profile_image-50x50.png",
                latajacapyra: "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-50x50.png",
                luminoussh: "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-50x50.png",
                predek181: "https://static-cdn.jtvnw.net/jtv_user_pictures/d99e25ba-c14c-4547-b3f0-517ba6f67259-profile_image-50x50.png", 
                reformed_shadow4fun: "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-50x50.png",
                xywedx: "https://static-cdn.jtvnw.net/jtv_user_pictures/3f1d2e69-9bb1-4548-8b13-aeb500bfb4f5-profile_image-50x50.png",
            }
        }
    }

    componentDidMount() {
        console.log(this.state.moderators);
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Moderatorzy</h1>
                <div className="d-grid clipsGrid py-4">
                    {Object.keys(this.state.moderators).map((key, item) => (
                        <div className="moderatorBox">
                            <img className="rounded-circle" src={this.state.moderators[key]} />
                            <span className="text-light"><b>{key}</b></span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}