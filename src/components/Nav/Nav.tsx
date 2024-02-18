import React, {useState} from "react";
import './Nav.scss';
import { List } from '@mui/material';
import { INav, Categories } from './utils.tsx';
import LinkComponent from "../LinkComponent/index.tsx";

const Nav = () => {
    return (
        <div className="nav">
            <h3 className="nav__categories-title">Categories</h3>
            <List className="nav__categories">
                {
                    Categories.map((data, index) => {
                        return (
                            <LinkComponent key={index} data={data} />
                        )
                    })
                }
            </List>
                
        </div>
    );
}
 
export default Nav;