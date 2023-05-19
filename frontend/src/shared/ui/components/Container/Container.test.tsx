import { render, screen } from '@testing-library/react'
import Container from './Container'

describe('Container test content', () => {
  test('check container text', () => {
    <Container>Text</Container>
    expect(screen.getByText('Text')).toBeDefined()
  })
  test('check header empty', () => {
    render(<Container> </Container>)
    expect(screen.queryByText(/ /i))

})
})
