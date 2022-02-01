import {render} from 'react-dom'
import React from 'react'
import Decider from '../src/decider'

describe("play game", () => {
    it("display app", () => {
        const container = document.createElement("div")
        document.body.appendChild(container)

        const alwaysInputInvalid = {
            play(p1, p2, observer) {
                observer.invalidInput()
            }
        }

        const app = render(<Decider requests={alwaysInputInvalid} />, container)

        const page0 = container.textContent
        expect(page0).not.toContain("INVALID!")

        document.querySelector("button").click()

        const page = container.textContent
        expect(page).toContain("INVALID!")
    })
})