import { FC } from 'react'

interface IContainer {
    children: React.ReactNode
}

const Container: FC<IContainer> = ({children}) => {
  return <section>{children}</section>
}

export default Container