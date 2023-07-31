import React, { useState } from 'react';
import Logo from "../DP.jpg";
import ProgressBar from './ProgressBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import MoreVert from '@mui/icons-material/MoreVert';

const Card = () => {
    const [progress, setProgress] = useState(90);
    return (
        <div className='card'>
            <div className='img-container'>
                <img src={Logo} className='card-img'></img>
                <div class="text-overlay-1">
                    <p>New Member</p>
                </div>
                <div class="text-overlay-2">
                    <p>Sent 3 days ago</p>
                </div>
                <div class="text-overlay-3">
                    <FavoriteIcon></FavoriteIcon>
                    <PersonOffIcon color='warning'></PersonOffIcon>
                    <MoreVert className='more-class'></MoreVert>
                </div>

            </div>
            <div className='text-group'>
                <div className='d-flex-custom'>
                    <h3>
                        Akshay Venu
                    </h3>
                    <p className='status-text'>
                        2Hr ago
                    </p>
                </div>
                <p className='card-bio'>30 Yrs | 5'11" | Software Professional | Malayalam Vishwakarma | Bengaluru | Karnataka</p>
                <div className='d-flex-custom'>
                    <p className='status-text'>Never Married</p>
                    <div>
                        <p className='progress-caption'>Match Score 90%</p>
                        <ProgressBar progress={progress} />
                    </div>
                </div>
                <div className='btn-group-card'>
                    <button className='btn btn-danger'>Reject</button>
                    <button className='btn btn-success'>Accept</button>
                </div>
            </div>
        </div >
    );
}

export default Card;
