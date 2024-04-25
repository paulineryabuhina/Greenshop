import Header from '../../components/Header/index.tsx';
import Banner from '../../components/Banner/index.tsx';
import './Home.scss';
// import Nav from '../../components/Nav/Nav.tsx';
import Catalog from '../../components/Catalog/Catalog.tsx';

const Home = () => {
    return (
    <div className='container'>
        <Header />
        <main className='main'>
            <Banner />
            <Catalog />
        </main>
    </div>
    );
}
 
export default Home;