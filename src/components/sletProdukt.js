import React, {Component} from 'react';
import axios from 'axios';

class DeleteProduct extends Component {

    state = {
        produktnavn: '',
        produktbeskrivelse: '',
        pris: '',
        produktfoto: '',
    };

    componentDidMount(){

        //Kald webapi/backend og hent todo ud fra id

        axios.get('http://localhost:4012/produkter/' + this.props.match.params.id)
            .then(response => {

                //udfyld state med den todo, som blev fundet ud fra id, som blev sendt med
                this.setState({
                    produktnavn: response.data.produktnavn,
                    produktbeskrivelse: response.data.produktbeskrivelse,
                    pris: response.data.pris,
                    produktbillede: response.data.produktbillede
                });
            })
            .catch(function(error){
                console.log(error);
            })

    }


    onClickDelete = (e) => {

        axios.delete('http://localhost:4012/produkter/delete/' + this.props.match.params.id)
        .then(res => {
            console.log("Is something deleted?", res.data);

            this.props.history.push('/');
        });
    }

    render(){
        return( 
            <div className="card mt-5">

                <div className="card-body">
                    <h3 className="card-title">Are you sure you want to delete this?</h3>
                    <h4>{this.state.produktnavn}</h4>

                    <button className="btn btn-danger mr-3" onClick={this.onClickDelete}>SLET</button>
                    <button className="btn btn-success">Fortryd</button>

                </div>
                
            </div>
        )
    }
}

export default DeleteProduct;