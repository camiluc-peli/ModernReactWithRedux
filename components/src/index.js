import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from  './CommentDetail';


const mySuperDateFunction = myDate => (`${myDate.past()}`);

const App = () => {
    console.log('Faker: ', Faker)

    // Puedes usar tambien debugger;
    return (
        <div className="ui container comments">
            <CommentDetail 
                avatarImage={Faker.image.avatar()} 
                author={Faker.name.firstName()} 
                timeAgo={mySuperDateFunction(Faker.date)} 
                comment={Faker.hacker.phrase()}/>
            <CommentDetail 
                avatarImage={Faker.image.avatar()} 
                author={Faker.name.firstName()}
                timeAgo={mySuperDateFunction(Faker.date)} 
                comment={Faker.hacker.phrase()}/>
            <CommentDetail 
                avatarImage={Faker.image.avatar()} 
                author={Faker.name.firstName()} 
                timeAgo={mySuperDateFunction(Faker.date)} 
                comment={Faker.hacker.phrase()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));