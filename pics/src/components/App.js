import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component
{
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await axios.get(
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
        
        this.setState({ images: response.data.results });
    }

    render(){
        console.log(this.setState.images);
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.setState.images.length} images.
            </div>
        );
    }
};

export default App;