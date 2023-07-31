import React, { useState } from 'react';

const Header = () => {
    let [numberOfMatches, setNumberOfMatches] = useState(1);
    return (
        <>
            <div className="header-div">
                <div className='btn-group'>
                    <button className="btn-purple">Interest</button>
                    <button className="btn-purple">Requests</button>
                    <button className="btn-purple">Messages</button>
                </div>
                <div className='heading-text-div'>
                    {
                        numberOfMatches ?
                            <p>{numberOfMatches} Matches based on your preference</p> :
                            <p>No Matches Found</p>
                    }
                </div>
            </div>
        </>
    );
}

export default Header;
