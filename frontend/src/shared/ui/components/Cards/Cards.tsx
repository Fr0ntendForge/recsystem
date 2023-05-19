import { FC } from 'react'

interface ICards {
    children: React.ReactNode
}

const Cards: FC<ICards> = ({children}) => {
  return <div>{children}</div>
}

export default Cards