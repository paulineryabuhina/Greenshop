import { Card, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { PLANT_ROUTE } from '../../utils/consts';

const PlantItem = ({plant}: any) => {
    const navigate = useNavigate();
    return (
    <div className='col-3' onClick={() => navigate(PLANT_ROUTE + '/' + plant.id)}>
        <Card style={{width: 150, height: 250, cursor: 'pointer'}} border={"light"} className="item__card">
            <Image className="item__img" src={plant.img} height={150} width={150}></Image>
            <span className='item__name'>{plant.name}</span>
            <span className='item__price'>{plant.price}</span>
        </Card>
    </div>
    );}

export default PlantItem;
