import React , {usestate, useeffect} from 'react';
import {Action} from '../types/action.interface';
import AvatarDescription from './AvatarDescription';
import './ui.css'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    HeartFilled,
    StarFilled,
  } from '@ant-design/icons';
  import { Rate } from 'antd';
import RGButton from './Button';
import { Tooltip } from 'antd';

interface cardProps {
    sellerProfile?: any;
    images?: any[];
    price?: number;

}
//todo: need to implement
const Card = (props: cardProps) => {
   

    return (
        <div className='Card'>
            <div className='CardImageSection' >
                <div style={{width:'100%', height: '100px'}}>
                    <img style={{width: '100%',height: '100%', objectFit: 'cover'}} src={require('./../assets/img1.jpg')} />
                </div>                
            </div>
           <div className='CardDetailsSection'>
            <AvatarDescription name='rotem' description='nutrition'  />
            <div>
                10 meeting to build your diet
            </div> 
            </div> 
           
            <div className='StarGrade'>
                <div style={{margin: 3, display:'flex', justifyContent: 'flex-start'}}>

                    <Rate style={{width:'100%', height:'100%'}}  allowHalf defaultValue={2.5} />
                </div> 
                <div style={{display:'flex', justifyContent: 'flex-start'}}>
                <div style={{fontSize:12}} className='regularText'>(853)</div>
                </div>  
            </div>  
                <div className='CardFooter'>
                    <div />
                    <RGButton buttonSize='small' buttonColor='#95CD41'  actionButton={{action: function x(){return 'd'}, title:'OPEN'}} type='primary' ></RGButton>
                </div>     
        </div>
    )
}

export default Card;
