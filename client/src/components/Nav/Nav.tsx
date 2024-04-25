import { useContext} from 'react';
import './Nav.scss';
import { INav } from './utils.tsx';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main.tsx';
import { ListGroup } from 'react-bootstrap';

const NavB = observer(() => {
    const { plant }: any = useContext(Context);
    return (
        <div className="nav">
            <h3 className="nav__categories-title">Categories</h3>
            <ListGroup className="nav__categories">
                {plant.types.map((type: INav) => {
                    return <ListGroup.Item 
                    active={type.id === plant.selectedType.id} 
                    onClick={() => plant.setSelectedType(type)} 
                    key={type.id}>
                        {type.name}
                    </ListGroup.Item>;
                })}
            </ListGroup>
        </div>
    );
});

export default NavB;
