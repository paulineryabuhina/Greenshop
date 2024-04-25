import { Button } from "@mui/material";
import Header from "../../components/Header";
import { Image } from "react-bootstrap";
import './PlantPage.scss'
const PlantPage = () => {
    return (
    <div className="container">
        <Header />
        <main className='main'>
            <div className="row">
                <div className='col-6'>
                    <Image width={300} height={300}></Image>
                </div>
                <div className='col-6'>
                    <div className="col-6__title">Растение</div>
                    <div className="col-6__price">миллион</div>
                    <Button className="col-6__button" variant="contained">ADD TO CART</Button>
                </div>
            </div>
        </main>
    </div> );
}
 
export default PlantPage;