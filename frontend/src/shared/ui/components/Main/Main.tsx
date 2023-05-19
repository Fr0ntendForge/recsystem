import { FC } from 'react'

interface IMain {
    children: React.ReactNode
}

const Main: FC<IMain> = ({children}) => {
  return <main>{children}</main>
}

export default Main