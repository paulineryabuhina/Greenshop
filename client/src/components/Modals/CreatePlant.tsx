import { Button, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import './modal.scss';

const CreateType = ({onHide }: any) => {
    const [type, setType] = useState();

    const handleChange = (event: any) => {
      setType(event.target.value);
    };
    return (
        <div className="modalWindow">
            <div className="modalWindow__wrap">
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Добавить растение
            </DialogTitle>
            <DialogContent className="modalWindow__content">
                <TextField id="standard-basic" label="Название растения" variant="standard" />
                <TextField id="standard-basic" label="Цена" variant="standard" />
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Type"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
                <input id="img" type="file"/>
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