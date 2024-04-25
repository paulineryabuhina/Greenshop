import PlantList from '../PlantList/PlantList';
import NavB from '../Nav/Nav';
import './Catalog.scss';
import { observer } from 'mobx-react-lite';

const Catalog = observer(() => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-3'>
                    <NavB />
                </div>
                <div className='col-9'>
                    <PlantList/>
                </div>
            </div>
        </div> 
    );
});

export default Catalog;
