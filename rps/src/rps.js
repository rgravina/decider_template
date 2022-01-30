export const Result = {
    p1Wins: "p1Wins",
    p2Wins: "p2Wins",
    tie: "tie",
    invalidInput: "invalidInput"
}

export const Throws = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

const ThrowPattern = [Throws.rock, Throws.scissors, Throws.paper]
export default class RPS {
    play = (p1, p2) => {
        if (!(ThrowPattern.includes(p1) && ThrowPattern.includes(p2))) {
            return Result.invalidInput
        }
        if (p1 === p2) {
            return Result.tie
        }
        if (p1 === Throws.rock && p2 === Throws.scissors || 
            p1 === Throws.scissors && p2 === Throws.paper || 
            p1 === Throws.paper && p2 === Throws.rock) {
            return Result.p1Wins
        }
        return Result.p2Wins
    }
}