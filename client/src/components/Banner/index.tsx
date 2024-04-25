
import './Banner.scss';
import Flickity from 'react-flickity-component';
import './flickity.scss';

const FlickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    // autoPlay: true,
    prevNextButtons: false,
    pageDots: true
}

const Banner = () => {
    
        return (
          
            <div className='banners'>
                <Flickity className='banners__slider' elementType='div' disableImagesLoaded={false} options={FlickityOptions} reloadOnUpdate static>
                <div className="banner-1">
                    <div className="banner-1__content">
                        <div className="banner-1__description">
                            <h3 className="banner-1__greeting">Welcome to GreenShop</h3>
                            <h1 className="banner-1__title">
                                LET’S MAKE A<br />
                                BETTER PLANET
                            </h1>
                            <p className="banner-1__text">
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use
                                <br />
                                our plants to create an unique Urban Jungle. Order your favorite plants!
                            </p>
                        </div>
                        <button className="banner-1__button">SHOP NOW</button>
                    </div>
                    <div className="banner-1__images"></div>
                </div>
                <div className="banner-2"></div>
                <div className="banner-3"></div>
                </Flickity>
            </div>
            
            
        );
}

export default Banner;
