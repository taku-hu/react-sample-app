import { memo, FC } from 'react'

import { Header } from 'components/organisms/layout/Header'

export const PageLayout: FC = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
})
