import { Button, Dialog } from "@mui/material";
import Header from "../../components/Header";
import './Admin.scss'
import { useState } from "react";
import CreatePlant from "../../components/Modals/CreatePlant";
import CreateType from "../../components/Modals/CreateType";

const Admin = () => {
    // const [typeVisible, setTypeVisible] = useState(false)
    // const [plantVisible, setPlantVisible] = useState(false)
    const [openType, setOpenType] = useState<boolean>(false);
    const [openPlant, setOpenPlant] = useState<boolean>(false);

    const handleOpenType = () => {
        setOpenType(true);
      };
    const handleOpenPlant = () => {
        setOpenPlant(true);
      };
      
    const handleClose = () => {
        setOpenType(false);
        setOpenPlant(false);
      };


    return (<div className="container">
        <Header />
        <div className="container__buttons">
            <Button className="button" variant="contained"  onClick={handleOpenType}>Добавить тип</Button>
            <Button className="button" variant="contained"  onClick={handleOpenPlant}>Добавить растение</Button>
            <Dialog
                open={openType}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <CreateType show={openType} onHide={handleClose} />
            </Dialog>
            <Dialog
                open={openPlant}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <CreatePlant show={openPlant} onHide={handleClose} />
            </Dialog>
        </div>
    </div>);
}
 
export default Admin;