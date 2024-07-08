import React, { Component } from 'react';
export default function Postitem({postListArray}) {
    return (
        <ul className='post-item'>
            {postListArray.map(postitem => (
                <li>
                    <h3 class='post-title'>
                        <a href={postitem.detailurl}>
                            {postitem.title}
                        </a>
                    </h3>
                    <a href={postitem.detailurl}>
                        <img src={postitem.imageurl} width='408'/>
                    </a>
                    <div className='desc'>
                        {postitem.description}
                    </div>
                    <a class='more' href={postitem.detailurl}>More</a>
                </li>
            ))}
        </ul>
    );
}
