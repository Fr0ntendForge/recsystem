import { FC } from 'react'

interface ICard {
    frontGround: string;
    backGround: string;
}

const Card: FC<ICard> = ({frontGround, backGround }) => {
  return <div onClick={()=>{
    console.log(frontGround)
    console.log(backGround)}
  }></div>
}

export default Card