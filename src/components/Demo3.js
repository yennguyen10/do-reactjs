import React, { Component } from 'react';



class Components_props extends Component { 
    render() {
        /*    
        class Welcome extends Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }*/

        /**
         * Welcome component
         */

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        /**
         *  comment data
         */
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
              name: 'Hello Kitty',
              avatarUrl: 'http://via.placeholder.com/100x100'
            }
        };

        function formatDate(date) {
            return date.toLocaleDateString();
        }
        
        /**
         * Comment component
         */

        function Comment(props) {
            return (
                <div className="Comment">
                <div className="UserInfo">
                   {/*<img className="Avatar"
                        src={props.author.avatarUrl}
                        alt={props.author.name} />*/}
                    {/*<Avatar user={props.author} />*/}                    
                    {/*<div className="UserInfo-name">
                    {props.author.name}
                    </div>*/}

                    <UserInfo user={props.author} />
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
                </div>
            );
        }
        
        

        function Avatar(props) {
            return (
                <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
                />
            );
        }

        function UserInfo(props) {
            return (
                <div className="UserInfo">
                    <Avatar user={props.user} />
                    <div className="UserInfo-name">
                        {props.user.name}
                    </div>
                </div>
            );
        }

        function sum(a, b) {
            return a + b;
        }


        function Sum1(props) {
            return <>{Number.parseInt(props.a) + Number.parseInt(props.b)}</>
        }
        

        return (
            <div>
                <h1 className='title'>3. Components and Props</h1>
                <p>This is the Welcome element</p>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />   

                <p>This is the Comment element</p>
                <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />     

                This is the sum function: 
                {sum(4, 5)}

                <p>This is the Sum1 Component: </p>
                <Sum1 a="9" b="10"/>
            </div>
        );
    }
}
 
export default Components_props