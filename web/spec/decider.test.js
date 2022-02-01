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

const alwaysInputInvalidStub = {
    play(p1, p2, observer) {
        observer.invalidInput()
    }
}

const alwaysTieStub = {
    play(p1, p2, observer) {
        observer.tie()
    }
}

describe("play game", () => {
    beforeEach(() => {
        setupDOM()
    })

    afterEach(() => {
        teardown()
    })

    describe("invalid Input", () => {
        it("on render does not display error message", () => {
            renderApp(alwaysInputInvalidStub)
    
            expect(getContent()).not.toContain("INVALID!")
        })
        it("display app", () => {
            renderApp(alwaysInputInvalidStub)
    
            submit()
    
            expect(getContent()).toContain("INVALID!")
        })
    })

    describe("tie", () => {
        it("on render does not display tie message", () => {
            renderApp(alwaysTieStub)
    
            expect(getContent()).not.toContain("TIE!")
        })
        it("display app", () => {
            renderApp(alwaysTieStub)
    
            submit()
    
            expect(getContent()).toContain("TIE!")
        })
    })
})