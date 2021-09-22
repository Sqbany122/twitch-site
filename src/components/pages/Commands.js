import React, {useState} from 'react';
import dateFormat from "dateformat";

export default class Commands extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            selectedOption: 1,
            selectOptions: {
                default: {
                    name: "Ogólne",
                    value: 1,
                },
                mods: {
                    name: "Moderacja",
                    value: 2,
                }
            },
            commandsForAll: {
                watchtime: {
                    description: "pokazuje ilość czasu spędzoną przez widza na kanale",
                    aditionalInfo: false
                },
            },
            commandsModeration: {
                game: {
                    description: "pozwala zmienić aktualnie streamowaną gre",
                    aditionalInfo: " [nazwa_gry]"
                },
                title: {
                    description: "pozwala zmienić tytuł streama",
                    aditionalInfo: " [nowy_tytuł_streama]"
                },
            }
        }
        this.change = this.change.bind(this);
    }

    change(event) {
        this.setState({ selectedOption: event.target.value });
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
        return (
            <div className="row py-4 px-4">
                <div className="d-flex flex-row align-items-center">
                    <h1 className="text-light">Komendy</h1>
                    <select className="h-50 mx-4 px-2" onChange={this.change}>
                        {Object.keys(this.state.selectOptions).map(item => (
                            <option value={this.state.selectOptions[item].value}>{this.state.selectOptions[item].name}</option>
                        ))}
                    </select>
                </div>
                {this.state.loading || !this.state.commandsForAll || !this.state.commandsModeration ? (
                    <div>Loading....</div>
                ) : (  
                <div>    
                    {(() => {
                        if (this.state.selectedOption == 1) {
                            return (
                                <div className="text-light">
                                    <div className="px-3 my-4">
                                        {Object.keys(this.state.commandsForAll).map((commandName) => (
                                            <p>
                                                <b>!{commandName}</b>
                                                {this.state.commandsForAll[commandName].aditionalInfo ? this.state.commandsForAll[commandName].aditionalInfo + " - " : " - "}
                                                <span className="lightgrey-text">{this.state.commandsForAll[commandName].description}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )
                        } else if (this.state.selectedOption == 2) {
                            return (
                                <div className="text-light">
                                    <div className="px-3 my-4">
                                        {Object.keys(this.state.commandsModeration).map((commandName) => (
                                            <p>
                                                <b>!{commandName}</b>
                                                {this.state.commandsModeration[commandName].aditionalInfo ? this.state.commandsModeration[commandName].aditionalInfo + " - " : " - "}
                                                <span className="lightgrey-text">{this.state.commandsModeration[commandName].description}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>
                )}
            </div>
        )
    }
}