import React, { useState } from 'react';
import ActionComponent from '../Components/ActionComponent';
import Modal from '../Components/Modal';
import ResultComponent from '../Components/ResultComponent';

const HomePage = (props) => {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [showRules, setShowRules] = useState(false);
    const [userSelected, setUserSelected] = useState("");
    const [computerSelected, setComputerSelected] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [status, setStatus] = useState("")

    return (
        <>
            <div className="scoreBoard">
                <div className="categories">
                    <span>Rock</span>
                    <span>Paper</span>
                    <span>Scissors</span>
                </div>
                <div className="score">
                    <span className="score-text">SCORE</span><br />
                    <span className="score-val">{userScore}</span>
                </div>
            </div>
            {
                showResult ?
                    <ResultComponent
                        user={userSelected}
                        computer={computerSelected}
                        status={status}
                        setShowResult={setShowResult}
                    />
                    :
                    <ActionComponent
                        setUserSelected={setUserSelected}
                        setComputerSelected={setComputerSelected}
                        userSelected={userSelected}
                        computerSelected={computerSelected}
                        setShowResult={setShowResult}
                        userScore={userScore}
                        setUserScore={setUserScore}
                        computerScore={computerScore}
                        setComputerScore={setComputerScore}
                        setStatus= {setStatus}
                    />
            }
            <div className="rules-section">
                <button className="rules" onClick={(e) => setShowRules(true)}>RULES</button>
                <Modal onClose={(e) => setShowRules(false)} showRules={showRules} />
            </div>
        </>
    )
}
export default HomePage;