import React, {useState, useEffect} from 'react';
import RenderGeneralComponents from "./RenderGeneralComponents";
import RGButton from "./Button";
import './ui.css';
import {Action} from '../types/action.interface';

interface ButtonSectionProps {
    actions: Action[] | any
}


const ButtonSection = (props: ButtonSectionProps
) => {
    const {actions} = {...props};
    return (
        <div className='ButtonsSection'>   
                <RenderGeneralComponents data={actions}>
                    <RGButton/>
                </RenderGeneralComponents>
        </div>
    )
}

export default ButtonSection;

