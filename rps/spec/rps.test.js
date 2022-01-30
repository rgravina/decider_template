import Requests, {Result, Throws} from '../src/decider'

describe("rps", () => {
    describe("p1 wins", () => {
        it("rock vs scissors", () => {
            const result = new Requests().play(Throws.rock, Throws.scissors)
    
            expect(result).toBe(Result.p1Wins)
        })

        it("scissors vs paper", () => {
            const result = new Requests().play(Throws.scissors, Throws.paper)
            expect(result).toBe(Result.p1Wins)
        })

        it("paper vs rock", () => {
            const result = new Requests().play(Throws.paper, Throws.rock)
            expect(result).toBe(Result.p1Wins)
        })
    })

    describe("p2 wins", () => {
        it("scissors vs rock", () => {
            const result = new Requests().play(Throws.scissors, Throws.rock)
            expect(result).toBe(Result.p2Wins)
        })

        it("paper vs scissors", () => {
            const result = new Requests().play(Throws.paper, Throws.scissors)
            expect(result).toBe(Result.p2Wins)
        })

        it("rock vs paper", () => {
            const result = new Requests().play(Throws.rock, Throws.paper)
            expect(result).toBe(Result.p2Wins)
        })
    })

    describe("tie", () => {
        it("rock vs rock", () => {
            const result = new Requests().play(Throws.rock, Throws.rock)
            expect(result).toBe(Result.tie)
        })
    
        it("paper vs paper", () => {
            const result = new Requests().play(Throws.paper, Throws.paper)
            expect(result).toBe(Result.tie)
        })
    
        it("scissors vs scissors", () => {
            const result = new Requests().play(Throws.scissors, Throws.scissors)
            expect(result).toBe(Result.tie)
        })
    })

    describe("invalid input", () => {
        it("scissors vs sailboat", () => {
            const result = new Requests().play(Throws.scissors, "sailboat")
            expect(result).toBe(Result.invalidInput)
        })
    
        it("sailboat vs scissors", () => {
            const result = new Requests().play("sailboat", Throws.scissors)
            expect(result).toBe(Result.invalidInput)
        })
    })

})