import React, { useState, useEffect } from 'react';
import Detail from './subpages/desginer'
import Index from './components/Index'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Resize from './context/Resize'

const App = () => {
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth)
    useEffect(() => window.onresize = () => setClientWidth(document.body.clientWidth),[])
    return (
        <>
            <Resize.Provider value={{clientWidth, isBig: clientWidth > 768}}>
                <Router>
                    <Switch>
                        <Route path="/detail" component={Detail} />
                        <Route path='/' component={Index} />
                    </Switch>
                </Router>
            </Resize.Provider>
        </>
    )
}

export default App;
