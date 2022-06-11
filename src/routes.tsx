import { Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import { Home, Notice } from './Pages'
import Admin from './Pages/Admin'

import paths from './config/paths'

export default function RoutesPath() {
  return (
    <Switch>
      <Route path={paths.Notices} component={Admin} />
      <Route path={paths.NewNotice} component={Admin} />
      <Route path={paths.EditNotice} component={Admin} />
      <Route path={paths.NewCategory} component={Admin} />
      <Layout>
        <Route exact path={paths.Home} component={Home} />
        <Route exact path={"/notice/:id"} component={Notice} />
      </Layout>
    </Switch>
  )
}
