import React, { Component } from 'react';
import logo from './../logo.svg';

class Demo2 extends Component {
  render() { 
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }
    
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    const user2 = {
      firstName: 'Yen',
      lastName: 'Nguyen',
      avatarUrl: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg'
    };
    
    const element = (
      <h1>
        Hello, {formatName(user)}!
      </h1>      
    );


    function getGreeting(user) {
      if (user) {
        return <>
        Avarta:<img width="50" src={user.avatarUrl} />
        <h1>Hello, {formatName(user)}!</h1> 
        </>
      }
      return <h1>Hello, Stranger.</h1>;
    }

    return (
      <div>
        <h1 className='title'>2. Introducing JSX</h1>
        {/* call variable */}
        {element}
        
        {/* call function */}
        {getGreeting(user2)}
        
        {getGreeting()}

        {/* img tag */}
        <img src={logo} width="100"/>

        {/* a element */}
        <br></br>
        <a href='https://create-react-app.dev/'>https://create-react-app.dev/</a>
      </div>
    );
  }
}
 
export default Demo2;
