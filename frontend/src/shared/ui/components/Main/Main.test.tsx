import Header from "./Main"
import {render, screen} from "@testing-library/react"

describe('Header test content', () => {
    test('check header text',  () => {
        render(<Header>Text</Header>)
        expect(screen.getByText('Text')).toBeDefined()
    })
    
})