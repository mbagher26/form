import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: []
        }
    }

    clickHandler(event) {
        let mainCountry = event.target.value
        let mainCountryCities = this.state.countriesData[mainCountry]

        if(event.target.value !== -1){
            
            this.setState({
                mainCountryCities: mainCountryCities
            });
        }else{
            this.setState({
                mainCountryCities: []
            })
        }

    }



    render() {
        return (

            <div className="container">
                <div className="col-md-6 box">
                    <input className="fnameInput" placeholder="First Name" />
                </div>

                <div className="col-md-6 box">
                    <input className="lnameInput" placeholder="Last Name" />
                </div>
                <div className="col-md-6 box">
                    <input className="phoneInput" placeholder="Phone Number" />
                </div>
                <div className="col-md-6 box">
                    <input className="emailInput" placeholder="Email" />
                </div>

                <div className="col-md-6 box">
                    <select className="countrySelect" onChange={event => this.clickHandler(event)} >
                        <option value="-1">Please Select ...</option>
                        <option className="option" value="Iran">Iran</option>
                        <option className="option" value="Turkey">Turkey</option>
                        <option className="option" value="US">US</option>
                    </select>
                </div>

                <div className="col-md-6 box">
                    <select className="citySelect">
                        {
                           this.state.mainCountryCities.length ? (this.state.mainCountryCities.map((city) => (
                                <option value={city}>{city}</option>
                            ))
                            ):(
                                <option value="-1">Please Select ...</option>
                            )
                        }
                    </select>
                </div>

                <div className="col-md-12 box">
                    <button className="btn">Book a ticket</button>
                </div>
            </div>

        )
    }
}
