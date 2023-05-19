import React, { FC } from 'react'
import { StyledCards } from './RecCards.styles'
import Cards from '../../shared/ui/components/Cards/Cards'
import Card from '../../shared/ui/components/Card/Card'

const RecCards: FC = () => {
  // TODO: Сделать реф в котором будет храниться состояние нажатой карточки
  // Раскидать два массива уникальных карт

  // const [currentCard, setCurrentCard] = React.useRef()
  const [cardsArray] = React.useState(new Array(8))


  return (
    <StyledCards>
      <Cards>
      {cardsArray.map(() =><Card frontGround={''} backGround={''}/>)}
      </Cards>
    </StyledCards>
  )
}

export default RecCards
