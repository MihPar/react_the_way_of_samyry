import React from "react";
import create from 'react-test-rendered'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='it-incubator.com' />)
        const instance = component.getInstanse()
        expect(instance.state.status).toBe("it-incubator.com")
    })
    test("after creation, <span> shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status='it-incubator.com' />)
        const root = component.root 
        expect(() => {
            let input = root.findByType("span")
        }).toThrow()
    })
    test(`after creation, <span> with status should contains correct status`, () => {
        const component = create(<ProfileStatus status='it-incubator.com' />)
        const root = component.root 
        let span = root.findByType("span")
        expect(span.children[0]).toBe('it-incubator.com')
    })

    test(`callback should be called`, () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='it-incubator.com' updateStatus={mockCallback} />)
        const instance = component.getInstanse()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1 )
    })
})