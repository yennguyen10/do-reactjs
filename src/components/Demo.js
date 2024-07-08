import React, { Component } from 'react';
class Demo extends Component {
    render() { 
        const post = {
            name: "post title",
            content: "post content"
        };

        const numberArray = ['1','2','3'];
        
        return (<>
            <p>{post.name}</p>
            <ul>
                {numberArray.map(number => (
                    <li>{number}</li>
                ))}
            </ul>
        </>);
    }
}
 
export default Demo;