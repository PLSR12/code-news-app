import { Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import { Home } from './Pages/Home'

export default function RoutesPath() {
  return (
    <Switch>
      <Layout>
        <Route path="/" component={Home} />
      </Layout>
    </Switch>
  )
}
