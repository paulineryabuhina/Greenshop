import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../../main";
import PlantItem from "../PlantItem/PlantItem";

const PlantList = observer(() => {
    const { plant }: any = useContext(Context);
    return (
        <Row className='d-flex'>
            {
                plant.plants.map((plant: any) => (
                    <PlantItem key={plant.id} plant={plant} />
                ))
            }
        </Row>
    );
});

export default PlantList;