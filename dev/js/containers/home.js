import React from 'react';
import Input from '../components/input';
import '../../scss/style.scss';

const Home = () => (
    <div>
        <img
            src="https://ssl.gstatic.com/onebox/media/olympics/photos/o16/live/RIOEC8C1QFE71_768x432.JPG"
        />
        <br />
        <Input className = "search-bar"/>
    </div>
);

export default Home;
