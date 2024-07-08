import React, { Component } from 'react';
import Postitem from '../Postitem/postitem';
export default function Postlist() {
    const postListArray = [ 
        {
            id:'1',
            title: 'Cleaning and Caring for your Leather Tack',
            description: 'Are you looking for a simple and effective way to keep your saddlery and riding gear looking its best? With the Oakwood leather care range, getting the perfect finish is simple!',
            imageurl: 'https://www.horseland.com.au/media/wysiwyg/blog/oakwood_1200x900_copy.jpeg',
            detailurl: 'https://www.horseland.com.au/blog/cleaning-and-caring-for-your-leather-tack/'
        },
        {
            id:'2',
            title: 'How To Identify, Treat and Prevent Colic In Your Horse',
            description: 'Colic is a common illness in horses that can be mild through to severe, and even life-threatening. So, it’s critical to understand its causes, identify the condition, and what action to take if you suspect your horse has colic. ',
            imageurl: 'https://www.horseland.com.au/media/wysiwyg/blog/aw24rugprint_1200x900.jpg',
            detailurl: 'https://www.horseland.com.au/blog/how-to-identify-treat-and-prevent-colic-in-your-horse/'
        },
        {
            id:'3',
            title: 'The Benefits of Flaxseed Oil in Horses',
            description: 'Do you want a natural and effective way to support the overall well-being and performance of your horse? We discuss the various benefits of flaxseed oil and the positive impacts it can have. ',
            imageurl: 'https://www.horseland.com.au/media/wysiwyg/blog/vitality_1200x900.jpg',
            detailurl: 'https://www.horseland.com.au/blog/how-to-identify-treat-and-prevent-colic-in-your-horse/'
        },
        {
            id:'4',
            title: 'Health Is Wealth: Why Your Horse Needs Vaccinations',
            description: 'As horse owners we have a responsibility to ensure our horses are happy and healthy. We discuss why vaccinating them every year is an important step to protect against deadly diseases. ',
            imageurl: 'https://www.horseland.com.au/media/wysiwyg/blog/horsevaccine_1200x900.jpg',
            detailurl: 'https://www.horseland.com.au/blog/how-to-identify-treat-and-prevent-colic-in-your-horse/'
        },
        {
            id:'5',
            title: 'Preparing Your Horse’s Feed For Travel',
            description: 'Colic is a common illness in horses that can be mild through to severe, and even life-threatening. So, it’s critical to understand its causes, identify the condition, and what action to take if you suspect your horse has colic. ',
            imageurl: 'https://www.horseland.com.au/media/wysiwyg/blog/horsefeedfortravel1200x900.jpg',
            detailurl: 'https://www.horseland.com.au/blog/how-to-identify-treat-and-prevent-colic-in-your-horse/'
        },
        {
            id:'6',
            title: 'Five Reasons Why Hoof Oil Is Important',
            description: 'Hoof Oil is one of our favourite products because of the benefits it can give your horse. We run through the five reasons why hoof oil is an important part of your grooming routine.',
            imageurl: 'https://www.horseland.com.au/media/wysiwyg/blog/hoofoil_1200x900.jpg',
            detailurl: 'https://www.horseland.com.au/blog/how-to-identify-treat-and-prevent-colic-in-your-horse/'
        }
    ]

    return (<>
        <h2>This is post list</h2>
        <Postitem postListArray={postListArray}/>
    </>);
}