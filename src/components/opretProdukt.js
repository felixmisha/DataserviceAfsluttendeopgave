import React, {Component} from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.onChangeProduktNavn = this.onChangeProduktNavn.bind(this);
        this.onChangeProduktBeskrivelse = this.onChangeProduktBeskrivelse.bind(this);
        this.onChangePris = this.onChangePris.bind(this);
        this.onChangeProduktFoto = this.onChangeProduktFoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            produktnavn: '',
            produktbeskrivelse: '',
            pris: '',
            produktfoto: '',
        }
    }

    onChangeProduktNavn(e) {
        this.setState({
            produktnavn: e.target.value
        });
    }

    onChangeProduktBeskrivelse(e) {
        this.setState({
            produktbeskrivelse: e.target.value
        });
    }

    onChangePris(e) {
        this.setState({
            pris: e.target.value
        });
    }

    onChangeProduktFoto(e) {
        this.setState({
            produktfoto: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Produkt navn: ${this.state.produktnavn}`);
        console.log(`Produkt beskrivelse: ${this.state.produktbeskrivelse}`);
        console.log(`Pris: ${this.state.pris}`);

        const newProduct = {
            produktnavn: this.state.produktnavn,
            produktbeskrivelse: this.state.produktbeskrivelse,
            pris: this.state.pris,
            produktfoto: this.state.produktfoto
        }

        axios.post('http://localhost:4012/produkter/create', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            produktnavn: '',
            produktbeskrivelse: '',
            pris: '',
            produktfoto: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Opret nyt produkt</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Navn: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.produktnavn}
                                onChange={this.onChangeProduktNavn}
                                />
                    </div>
                    <div className="form-group">
                        <label>Beskrivelse: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.produktbeskrivelse}
                                onChange={this.onChangeProduktBeskrivelse}
                                />
                    </div>
                    <div className="form-group">
                        <label>Pris: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.pris}
                                onChange={this.onChangePris}
                                />
                    </div>
                    <div className="form-group">
                        <label>Foto: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.produktfoto}
                                onChange={this.onChangeProduktFoto}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Opret produkt" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}