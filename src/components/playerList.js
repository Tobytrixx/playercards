import React from 'react'
import './player.css'
import Playercomp from './player';


function Players() {
    const players = [{
        name: 'Mbappe',
        age: 24,
        team: 'PSG',
        nationality: 'France',
        jerseyNumber: 10,
        image: 'https://s.hs-data.com/bilder/spieler/gross/284095.jpg',
    },
    {
        name: 'Lewandowski',
        age: 34,
        team: 'FC Barcelona',
        nationality: 'Poland',
        jerseyNumber: 9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62XWfJPDrYlFggbbyNkpcAFdvI3AptgmZjA&usqp=CAU',
    },
    {
        name: 'Messi',
        age: 36,
        team: 'Inter Miami CF',
        nationality: 'Argentina',
        jerseyNumber: 10,
        image: 'https://m.media-amazon.com/images/M/MV5BZmVmOWY4NTMtYjk5YS00YzE4LThmYzMtNGFiNDE2ZDQ3MjRjXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_QL75_UY207_CR6,0,140,207_.jpg',
    },
    {
        name: 'Halland',
        age: 23,
        team: 'PSG',
        nationality: 'Argentina',
        jerseyNumber: 9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3TYvfxhgWFV_IBk79qyB1e6wUR2qL04_Vg&usqp=CAU',
    },
    ];
    return (
        <div className='container'>
            {players.map((value, index) => (
                <Playercomp 
                name={value.name} 
                age={value.age}
                team={value.team} 
                jerseyNumber={value.jerseyNumber}
                nationality={value.nationality}
                image={value.image} 
                />
                ))}
            </div>
    );
}
export default Players