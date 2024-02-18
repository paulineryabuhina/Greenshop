import React from 'react';
import Header from '../../components/Header/index.tsx';
import Banner from '../../components/Banner/index.tsx';
import './Home.scss';
import Nav from '../../components/Nav/Nav.tsx';

const Home = () => {
    return (
    <div>
        <Header />
        <main className='main'>
            <Banner />
            <Nav />
        </main>
    </div>
    );
}
 
export default Home;