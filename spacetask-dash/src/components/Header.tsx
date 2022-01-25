import React, {useState, useEffect} from 'react';
import RenderGeneralComponents from "./RenderGeneralComponents";
import {Action} from "../types/action.interface";
import RGButton from "./Button";
import './ui.css';
import RGSearch from './Search';


enum headerPosition {
    REGULAR = 'REGULAR',
    CENTER = 'CENTER'
}

interface HeaderProps {
    actions?: Action[] | any;
    logo?: any;
    children?: any;
    position?: headerPosition
}

const RGHeader = (props: HeaderProps
) => {
    const {actions, logo, children} = {...props};
    return (
        <div className='Header'>
            <div className='LogoHeaderSection'>
            {
                logo ? <div>
                        {logo}
                    </div> :
                    <div>
                        logo
                    </div>
            }
            </div>
            <div className='GeneralComponentsHeaderSection'>
                 <RGSearch />
            </div>
            <div className='ButtonsHeaderSection'>
                <RenderGeneralComponents data={actions}>
                    <RGButton/>
                </RenderGeneralComponents>
            </div>
        </div>
    )
}

export default RGHeader;

