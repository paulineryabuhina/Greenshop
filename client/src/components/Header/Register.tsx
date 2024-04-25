import { Button, ButtonGroup, TextField } from "@mui/material";
import { useState } from "react";
import { registration } from "../../http/userAPI";

const Register = ({changeMode}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const response = await registration(email, password);
            console.log(response);
        } catch(e: any) {
            alert(e.response.data.message)
        }
    }
    
    return (
        <div className="modalWindow">
        <div className="modalWindow__wrap">
                <ButtonGroup variant="text" aria-label="Basic button group">
                <Button className="modalWindow__change-btn" onClick={changeMode}>Login</Button>
                <Button className="modalWindow__change-btn">Register</Button>
                </ButtonGroup>
                <p className="modalWindow__text">Enter your username and password to sign up.</p>
                <div className="modalWindow__inputs">
                    <TextField label="Username *" value={email} name="email" onChange={e => setEmail(e.target.value)} variant="filled" fullWidth />
                    <TextField label="Password *" value={password} type="password" name="password" onChange={e => setPassword(e.target.value)} variant="filled" fullWidth />
                </div>

            <Button className="modalWindow__button" variant="contained" onClick={signIn} fullWidth>Создать</Button>
        </div>
    </div>
    );
}
 
export default Register;