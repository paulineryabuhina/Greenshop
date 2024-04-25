import { makeAutoObservable } from 'mobx';

export default class PlantStore {
    _types: { id: number; name: string; num: number }[];
    _plants: { id: number; name: string; price: number; img: string; typeId: number }[];
    _selectedType: { id: number; name: string; num: number };
    constructor() {
        this._types = [
            { id: 1, name: 'Кактус', num: 2 },
            { id: 2, name: 'Подсолнух', num: 2 },
        ];
        this._plants = [
            { id: 1, name: 'Генадий', price: 167, img: 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg', typeId: 1 },
            { id: 2, name: 'Ванес', price: 168, img: 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg', typeId: 2 },
            { id: 3, name: 'Ванес', price: 168, img: 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg', typeId: 2 },
            { id: 4, name: 'Ванес', price: 168, img: 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg', typeId: 2 },
            { id: 5, name: 'Ванес', price: 168, img: 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg', typeId: 2 },
        ];
        this._selectedType = { id: 0, name: '', num: 0 };
        makeAutoObservable(this);
    }

    setTypes(types: any) {
        this._types = types;
    }

    setPlants(plants: any) {
        this._plants = plants;
    }
    setSelectedType(type: any) {
        this._selectedType = type;
    }
    get types() {
        return this._types;
    }

    get plants() {
        return this._plants;
    }

    get selectedType() {
        return this._selectedType;
    }
}
