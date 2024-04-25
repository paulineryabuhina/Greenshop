import { Button, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import './modal.scss';

const CreateType = ({onHide }: any) => {
    return (
        <div className="modalWindow">
            <div className="modalWindow__wrap">
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Добавить тип растения
            </DialogTitle>
            <DialogContent>
                <TextField id="standard-basic" label="Тип растения" variant="standard" />
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={onHide}>
                Cancel
            </Button>
            <Button onClick={onHide}>Save</Button>
            </DialogActions>
            </div>
        </div>
    );
}
 
export default CreateType;