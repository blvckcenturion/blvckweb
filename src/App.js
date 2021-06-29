import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route } from "react-router-dom"
import ScrollToTop from './utils/ScrollToTop'
import Aside from './components/Aside'
import Navigation from './components/Navigation'
import 'normalize.css'
import './index.css'
import history from './utils/routerHistory'
import PageLoader from './components/PageLoader'
import { PageContent } from './components/GlobalComponents'

const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const Metrics = lazy(() => import('./pages/Metrics'))
const About = lazy(() => import('./pages/About'))

const App = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Router history={history}>
                <ScrollToTop />
                <Aside />
                <Navigation />
                
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/metrics" component={Metrics}/>
                    <Route path="/about" component={About}/>
                </Switch>
                
            </Router>
        </Suspense>
    )
}

export default App
