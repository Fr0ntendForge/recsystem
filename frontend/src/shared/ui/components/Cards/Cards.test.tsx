import { render, screen } from '@testing-library/react'
import Cards from './Cards'

describe('Cards test content', () => {
  test('check Cards text', () => {
    <Cards>Text</Cards>
    expect(screen.getByText('Text')).toBeDefined()
  })
  test('check header empty', () => {
    render(<Cards> </Cards>)
    expect(screen.queryByText(/ /i))

})
})
