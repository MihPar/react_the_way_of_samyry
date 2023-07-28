import React from "react";
import create from 'react-test-rendered'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='it-incubator.com' />)
        const instance = component.getInstanse()
        expect(instance.state.status).toBe("it-incubator.com")
    })
    test(`after creation, <span> should be displaed`, () => {
        const component = create(<ProfileStatus status='it-incubator.com' />)
        const instance = component.getInstanse()
        let span = instance.findByType("span")
        expect(span. length).toBe(1)
    })
    test(`after creation, <span> with status should contains correct status`, () => {
        const component = create(<ProfileStatus status='it-incubator.com' />)
        const instance = component.getInstanse()
        let span = instance.findByType("span")
        expect(span. length).toBe(1)
    })
})