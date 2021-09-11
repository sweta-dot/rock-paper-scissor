import React from 'react';
import triangleImg from '../assets/images/bg-triangle.svg';
import paperIcon from '../assets/images/icon-paper.svg';
import rockIcon from '../assets/images/icon-rock.svg';
import scissorsIcon from '../assets/images/icon-scissors.svg';

const ActionComponent = (props) => {

    const onOptionSelect = (val) => {
        props.setUserSelected(val);
        const options = ["paper", "scissors", "rock"];
        let index = Math.floor(Math.random() * 3);
        if (options[index] === val) {
            if(index === 0) {
                index = 1;
            } else {
                index = index - 1;
            }
        }
        props.setComputerSelected(options[index]);
        evaluateResult(val, options[index]);
    }

    const evaluateResult = (user, computer) => {
        props.setShowResult(true);

        if (user === 'paper') {
            if (computer === 'rock') {
                props.setUserScore(props.userScore + 1);
                props.setStatus("Win");
            } 
            else if (computer === 'scissors') {
                props.setComputerScore(props.setComputerScore + 1);
                props.setStatus("Lose");
            }
        }
        else if (user === 'scissors') {
            if (computer === 'paper') {
                props.setUserScore(props.userScore + 1);
                props.setStatus("Win");
            } 
            else if (computer === 'rock') {
                props.setComputerScore(props.computerScore + 1);
                props.setStatus("Lose");
            }
        }
        else if (user === 'rock') {
            if (computer === 'scissors') {
                props.setUserScore(props.userScore + 1)
                props.setStatus("Win");
            }
            else if (computer === 'paper') {
                props.setComputerScore(props.computerScore + 1);
                props.setStatus("Lose");
            }
        }
        localStorage.setItem("score", props.userScore);
    }

    return (
        <>
            <div onClick={(e) => onOptionSelect('paper')} className={"first" + (props.userSelected === 'paper' ? ' user' : '' || props.computerSelected === 'paper' ? ' computer' : '')}>
                <img alt="" src={paperIcon} height="70" width="70" />
            </div>
            <div onClick={(e) => onOptionSelect('scissors')} className={"sec" + (props.userSelected === 'scissors' ? ' user' : '' || props.computerSelected === 'scissors' ? ' computer' : '')}>
                <img alt="" src={scissorsIcon} height="70" width="70" />
            </div>
            <div onClick={(e) => onOptionSelect('rock')} className={"third" + (props.userSelected === 'rock' ? ' user' : '' || props.computerSelected === 'rock' ? ' computer' : '')}>
                <img alt="" src={rockIcon} height="70" width="70" />
            </div>
            <img className="triangle" alt="" src={triangleImg} />
        </>
    )
}

export default ActionComponent