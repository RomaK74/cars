import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {MainPage} from './pages/MainPage';
import {Order} from './pages/Order/Order';
import {BackgroundMenu} from './components/BackgroundMenu';
import {LineMenu} from './components/LineMenu';

function App() {
    const [isMenu, setMenu] = React.useState(false);

    const usingBM = (iconStatus, lineMenu) => {
        if (!iconStatus) {
            setMenu(true);
            if (lineMenu)
                lineMenu.current.style.background = '#111518';
        } else {
            setMenu(false);
            if (lineMenu)
                lineMenu.current.style.background = '#151B1F';
        }
    }

    return (
        <div>
            {isMenu && <div className="menu-background">
                <BackgroundMenu/>
            </div>}
            <div className="main-container">
                <LineMenu menu={isMenu} toggleBM={usingBM}/>
                <Switch>
                    <Route exact path="/cars/build" render={() => <MainPage menu={isMenu} pressBM={usingBM}/>}/>
                    <Route path="/cars/build/order" render={() => <Order pressBM={usingBM}/>}/>
                </Switch>
            </div>
        </div>);
}

export default App;
