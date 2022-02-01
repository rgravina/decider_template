import {render} from 'react-dom'
import React from 'react'
import Decider from '../src/decider'

let container

const setupDOM = () => {
    container = document.createElement("div")
    document.body.appendChild(container)
}

const teardown = () => {
    container.remove()
}

const renderApp = (props) => {
    render(<Decider requests={props} />, container)
}

const getContent = () => {
    return container.textContent
}

const submit = () => {
    document.querySelector("button").click()
}

const alwaysInputInvalid = {
    play(p1, p2, observer) {
        observer.invalidInput()
    }
}

describe("play game", () => {
    beforeEach(() => {
        setupDOM()
    })

    afterEach(() => {
        teardown()
    })

    it("on render does not display error message", () => {
        renderApp(alwaysInputInvalid)

        expect(getContent()).not.toContain("INVALID!")
    })
    it("display app", () => {
        renderApp(alwaysInputInvalid)

        submit()

        expect(getContent()).toContain("INVALID!")
    })
})