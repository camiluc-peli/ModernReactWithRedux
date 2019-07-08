import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';


class App extends React.Component
{
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get(
            '/search/photos', 
            {
                params: {
                    query: term
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
                <ImagesList images={this.state.images} />
            </div>
        );
    }
};

export default App;