import { FC } from 'react'

interface IHeader {
    children: React.ReactNode
}

const Header: FC<IHeader> = ({children}) => {
  return <header>{children}</header>
}

export default Header