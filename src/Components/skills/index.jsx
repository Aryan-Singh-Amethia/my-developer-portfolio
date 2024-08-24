import React from 'react';
import withLayout from '../../Layout/layout';
import Carousel from '../Carousel/Carousel';

const logos = [
    {id: 1, src: '/skills/java.png'},
    {id: 2, src: '/skills/html.png'},
    {id: 3, src: '/skills/js.png'},
    {id: 4, src: '/skills/css-3.png'},
    {id: 5, src: '/skills/react-2.svg'},
    {id: 6, src: '/skills/redux.png'},
    {id: 7, src: '/skills/next-js.svg'},
    {id: 8, src: '/skills/node.png'},
    {id: 9, src: '/skills/express.png'},
];

const newLogos = [
    {id: 10, src: '/skills/mongo.svg'},
    {id: 11, src: '/skills/sql.jpg'},
    {id: 12, src: '/skills/git.webp'},
    {id: 13, src: '/skills/jenkins.png'},
    {id: 14, src: '/skills/Jira.svg'},
    {id: 15, src: '/skills/oracle.webp'},
    {id: 17, src: '/skills/aws.jpg'},
];

const Skills = () => {
    return (
        <div>
            <Carousel logos={logos}/>
            <Carousel logos={newLogos} reverse/>
        </div>
    );
};

export default withLayout(Skills);