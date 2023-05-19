import { screen } from '@testing-library/react'
import Card from './Card'

describe('Cards test content', () => {
  test('check Cards text', () => {
    <Card frontGround={''} backGround={''}/>
    expect(screen.getByText('Text')).toBeDefined()
  })

})
