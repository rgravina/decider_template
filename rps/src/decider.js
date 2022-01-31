export const Throws = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

const ThrowPattern = [Throws.rock, Throws.scissors, Throws.paper]
export default class Requests {
    play = (p1, p2, observer) => {
        if (!(ThrowPattern.includes(p1) && ThrowPattern.includes(p2))) {
            observer.invalidInput()
            return
        }
        
        if (p1 === p2) {
            observer.tie()
        } else if (p1 === Throws.rock && p2 === Throws.scissors || 
            p1 === Throws.scissors && p2 === Throws.paper || 
            p1 === Throws.paper && p2 === Throws.rock) {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }
    }    
}