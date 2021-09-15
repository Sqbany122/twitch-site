import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {
    render() {
        return (
            <div className="w-100 h-100">
                <img className="w-100 default-border" src="banner.png" />
                <div className="row py-4 px-4">
                    <div className="text-light">
                        <h2>O mnie</h2>
                        <p>Chuj</p>
                    </div>
                </div>
            </div>
        )
    }
}