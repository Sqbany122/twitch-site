import React, {useState} from 'react';

export default class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            projects: [
                {
                    name: "MemeCloud",
                    description: "Dysk internetowy pozwalający przechowywać wszystkie memy użytkownika w jednym miejscu.",
                    image: "memecloud.png",
                    href: "https://memecloud.co/",
                    github_url: "https://github.com/Crlsky/memecloud",
                    status: 1,
                },
                {
                    name: "Niepykło.pl",
                    description: "Strona typu (jbzd, kwejt, itd...) do wrzucania memów.",
                    image: "niepyklo.png",
                    href: "",
                    github_url: "https://github.com/Sqbany122/niepyklo",
                    status: 0,
                }
            ]
        }
    }

    componentDidMount() {
       this.setState({ loading: false });
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <h1 className="text-light">Projekty</h1>
                {this.state.loading  ? (
                    <div>Loading....</div>
                ) : (
                <div className="d-grid clipsGrid py-4">
                    {this.state.projects.map(item => (
                        <div className="justify-content-center align-items-center text-light">
                            <a href={item.href} target="_blank">
                                <img src={item.image} className="w-100 mb-4" />
                            </a>
                            <div className="px-2">
                                {item.status == 1 ? (
                                    <div className="d-flex flex-row mb-4">
                                        <span className="projectStatusOnline rounded-circle"></span>
                                        <span><b>Online</b></span>
                                    </div>
                                ) : (
                                    <div className="d-flex flex-row mb-4">
                                        <span className="projectStatusOffline rounded-circle"></span>
                                        <span><b>Offline</b></span>
                                    </div>
                                )}
                                <div className="mb-4">
                                    <a className="text-light" href={item.github_url} target="blank_"><b>{item.github_url}</b></a>
                                </div>
                                <div>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
        )
    }
}