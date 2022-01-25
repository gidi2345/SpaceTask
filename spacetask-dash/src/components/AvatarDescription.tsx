import {Button} from 'antd';
import {Action} from "../types/action.interface";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LikeOutlined } from '@ant-design/icons';

import './ui.css';

interface AvatarDescriptionProps {
    avatar?: any;
    name: string;
    description: string;
}

const AvatarDescription = (props: AvatarDescriptionProps) => {
    const {avatar, name, description} = {...props};

    return (
        <div className='AvatarDescription'>
            <div style={{marginTop: 5}}>
            <Avatar size="small" icon={avatar ? avatar : <UserOutlined />} />
            </div>
            <div className='columnsString'>
                <div className='title'>{name}</div>
                <div className='description'>{description}</div>
            </div>
        </div>
    )
}

export default AvatarDescription;
