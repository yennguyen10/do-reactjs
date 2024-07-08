import React, { Component } from 'react';
import Postlist from './PostList/postlist';


export default function Bloglist() {
    let content;
    let isLoggedIn = 0;
    if (isLoggedIn) {
        content = 'Show admin panel component';
    } else {
        content = 'Show login form component';
    }

    return (<>
        <h1 className='toptitle'>This is Blog page</h1>
        <Postlist/>
        {content} 
    </>);
}