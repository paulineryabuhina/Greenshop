import ReactDOM from 'react-dom';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import PlantStore from './store/PlantStore';

export const Context = createContext<{ user: UserStore } | {plant: PlantStore} | null>(null);;

ReactDOM.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            plant: new PlantStore(),
        }}
    >
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
