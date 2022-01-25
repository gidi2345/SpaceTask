import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface RenderGeneralComponentsProps {
    data: any;
    children: any;
}

interface GeneralComponent {
    [key: string]: any;
}

const RenderGeneralComponents = (props: RenderGeneralComponentsProps) => {
    const {data, children} = {...props};

    const childrenWithProps = (props: GeneralComponent) => { return React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.

    if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...props});
    }
    return <div key={ uuidv4()}>{child}</div>;
})}

    return (
        <div>
            {data.map((dataItem: any) => childrenWithProps(dataItem))}
        </div>
    )
}

export default RenderGeneralComponents;

