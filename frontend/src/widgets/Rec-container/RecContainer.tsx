import { FC } from 'react'
import { StyledContainer } from './RecContainer.styles'

interface IRecContainer {
    children: React.ReactNode
}

const RecContainer: FC<IRecContainer> = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default RecContainer