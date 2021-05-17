import { Switch, Route } from 'react-router-dom'
import { FC, memo } from 'react'

import { Login } from 'components/pages/Login'
import { homeRoutes } from 'router/HomeRoutes'
import { NotFound } from 'components/pages/NotFound'
import { PageLayout } from 'templates/PageLayout'

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={({ match: { url } }) => (
        <Switch>
          {homeRoutes.map(({ path, exact, children }) => (
            <Route key={path} exact={exact} path={`${url}${path}`}>
              <PageLayout>
                {children}
              </PageLayout>
            </Route>
          ))}
        </Switch>
      )} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
})
