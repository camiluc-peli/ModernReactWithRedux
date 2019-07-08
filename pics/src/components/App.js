import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component
{
    onSearchSubmit(term){
        axios.get(
            'https://api.unsplash.com/search/photos', 
            {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID 6186c43896a7b22c226e62381c6fcfa96e643fcf68d8cf2e1adc250365df6190'
                }
            }
        );
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
};

export default App;