import {render} from 'react-dom'
import React from 'react'
import Decider from '../src/decider'

describe("play game", () => {
    it("display app", () => {
        const container = document.createElement("div")
        document.body.appendChild(container)

        const app = render(<Decider />, container)

        expect(app).not.toBeNull()
    })
})