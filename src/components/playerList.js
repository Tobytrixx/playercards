import React from 'react'
import './player.css'
import Playercomp from './player';


function Players() {
    const players = [{
        name: 'Mbappe',
        age: 29,
        team: 'PSG',
        nationality: 'Argentina',
        jerseyNumber: 12,
        image: 'https://th.bing.com/th/id/R.643ecdff43f940be023783f025559b9f?rik=uDA3EwfQZMVpvQ&pid=ImgRaw&r=0',
    },
    {
        name: 'Mbappe',
        age: 29,
        team: 'PSG',
        nationality: 'Argentina',
        jerseyNumber: 12,
        image: 'https://th.bing.com/th/id/R.643ecdff43f940be023783f025559b9f?rik=uDA3EwfQZMVpvQ&pid=ImgRaw&r=0',
    },
    {
        name: 'Mbappe',
        age: 29,
        team: 'PSG',
        nationality: 'Argentina',
        jerseyNumber: 12,
        image: 'https://th.bing.com/th/id/R.643ecdff43f940be023783f025559b9f?rik=uDA3EwfQZMVpvQ&pid=ImgRaw&r=0',
    },
    {
        name: 'Mbappe',
        age: 29,
        team: 'PSG',
        nationality: 'Argentina',
        jerseyNumber: 12,
        image: 'https://th.bing.com/th/id/R.643ecdff43f940be023783f025559b9f?rik=uDA3EwfQZMVpvQ&pid=ImgRaw&r=0',
    },
    ];
    return (
        <div>
            {players.map((value, index) => (
                <Playercomp 
                name={value.name} 
                age={value.age}
                team={value.team} 
                jerseyNumber={value.jerseyNumber}
                nationality={value.nationality} 
                />
                ))}
            </div>
    );
}
export default Players