import interestsInfo from './interests.json';
import colors from '../Analytics_Page/datasets/colors.json';
import './interests-page.css';
import InterestTile from './interest-tile';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// console.log(interestsInfo);
console.log(colors);

// const getRandomColor = () => {
//     const colorIndex = Math.floor(Math.random() * 256);
//     return colorIndex;
// }

const InterestsPage = () => {
    const history = useHistory();
    const [selectedList, setSelectedList] = useState([]);

    const handleClick = () => {
        if (selectedList.length >= 5) {
            history.push("/user-profession");
        }
    }

    const addToList = (e) => {
        console.log(selectedList);
        setSelectedList(list => [...list, e.target.innerText]);
    }

    const removeFromList = (e) => {
        console.log(selectedList);
        setSelectedList(list => {
            return list.filter(item => item !== e.target.innerText);
        });
    }

    return (
        <div id="interests-page">

            <div id="interest-description">
                <p style={{ fontSize: "1.1rem" }}>Choose interests that you'd like to share. Choose a minimum of 5</p>
                <p style={{ fontSize: "1.1rem" }}>{`Passions (${selectedList.length}/5)`}</p>
            </div>

            <div id="interests-container">
                {interestsInfo.interests.map((interest, index) => {

                    const color = colors[index + 120].hexString;

                    return (
                        <InterestTile removeFromList={removeFromList} addToList={addToList} interest={interest} color={color} />
                    );
                })}
            </div>

            <button className="btn btn-dark" onClick={handleClick} disabled={selectedList.length < 5 ? true : false}>Save</button>

        </div>
    );
}

export default InterestsPage;