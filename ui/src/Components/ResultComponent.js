import React from 'react';
import paperIcon from '../assets/images/icon-paper.svg';
import rockIcon from '../assets/images/icon-rock.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';

const ResultComponent = (props) => {
    const options = {
        "rock": rockIcon,
        "paper": paperIcon,
        "scissors": scissorsIcon
    }

    return (
        <div className="result">
            <div className={"" + (props.status === "Win" ? " winner" : "")}>
                <span className="your-label">YOU PICKED</span>
                <div className="first userSel">
                    <img alt="" src={options[props.user]} height="70" width="70" />
                </div>
            </div>
            <div className="result-section">
                <span className="status">You {props.status}</span>
                <button onClick={(e)=> props.setShowResult(false)} className="result-button">Play again</button>
            </div>
            <div className={props.status === "Lose" ? " winner" : ""}>
                <span className="house-label">THR HOUSE PICKED</span>
                <div className="sec computerSel">
                    <img alt="" src={options[props.computer]} height="70" width="70" />
                </div>
            </div>
        </div>
    )

}

export default ResultComponent;