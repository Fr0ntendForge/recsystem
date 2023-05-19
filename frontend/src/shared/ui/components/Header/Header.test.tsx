import Header from "./Header"
import {render, screen} from "@testing-library/react"

describe('Header test content', () => {
    test('check header text',  () => {
        render(<Header>Text</Header>)
        expect(screen.getByText('Text')).toBeDefined()
    })
    test('check header empty', () => {
        render(<Header> </Header>)
        expect(screen.queryByText(/ /i))

    })
})