import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from  './CommentDetail';
import AppovalCard from './ApprovalCard';

const mySuperDateFunction = myDate => (`${myDate.past()}`);

const App = () => {
    console.log('Faker: ', Faker)

    // Puedes usar tambien debugger;
    return (
        <div className="ui container comments">
            <AppovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </AppovalCard>

            <AppovalCard>
                <CommentDetail 
                    avatarImage={Faker.image.avatar()} 
                    author={Faker.name.firstName()} 
                    timeAgo={mySuperDateFunction(Faker.date)} 
                    comment={Faker.hacker.phrase()}/>
            </AppovalCard>
            <AppovalCard>
                <CommentDetail 
                    avatarImage={Faker.image.avatar()} 
                    author={Faker.name.firstName()} 
                    timeAgo={mySuperDateFunction(Faker.date)} 
                    comment={Faker.hacker.phrase()}/>
            </AppovalCard>
            <AppovalCard>
                <CommentDetail 
                    avatarImage={Faker.image.avatar()} 
                    author={Faker.name.firstName()} 
                    timeAgo={mySuperDateFunction(Faker.date)} 
                    comment={Faker.hacker.phrase()}/>
            </AppovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));