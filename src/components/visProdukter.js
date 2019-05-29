import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Product = props => (
    <tr>
            <Link to={"/edit" + props.produkt._id}>Ret</Link> | <Link to={"/delete/" + props.produkt._id}>Slet</Link>
    </tr>
)

export default class ProductList extends Component {

    _isMounted = false;

    state = {
        produktnavn: '',
        produktbeskrivelse: '',
        pris: '',
        produktfoto: '',
    };

    kaldWebservice(){
        axios.get('http://localhost:4012/produkter/')
            .then(response => {
                if (this._isMounted) {
                    this.setState({produkter: response.data});
                
                }
            })
            .catch(function(error){
                console.log(error);
            });
    }

    componentDidMount(){
        this._isMounted = true;

        this.kaldWebservice();
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.produkter !== prevState.produkter) {
            this.kaldWebservice();
        };
    };

    productList(){
        if(this.state.data){
            return this.state.produkter.map(function(currentProduct, i) {
                return <Product produkt={currentProduct} key={i} />;
            }); 
        } 
    }

    render(){
        return (
            <div>
                <h2>Produkt liste</h2>
                {this.productList()}
            </div>
        )
    }
}