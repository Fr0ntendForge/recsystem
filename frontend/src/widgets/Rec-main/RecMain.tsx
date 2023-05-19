import { FC } from 'react'
import { StyledMain } from './RecMain.styles'
import RecCards from '../Rec-cards/RecCards'



const RecMain: FC = () => {
  return (
    <StyledMain>
      <RecCards/>
    </StyledMain>
  )
}

export default RecMain
