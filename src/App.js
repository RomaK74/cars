import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {Order} from "./pages/Order/Order";
import {BackgroundMenu} from "./components/BackgroundMenu";
import {LineMenu} from "./components/LineMenu";


function App() {
    const background = React.useRef();

    const usingBM = (iconStatus) => {
        if (!iconStatus) {
            document.getElementsByClassName('line-menu')[0].style.background = '#111518';
            document.getElementsByClassName('line-menu__language')[0].style.display = 'none';
            background.current.style.display = 'block';
            if (document.getElementById('sliderFone'))
                document.getElementById('sliderFone').classList.add("fone");
        } else {
            background.current.style.display = 'none';
            document.getElementsByClassName('line-menu')[0].style.background = '#151B1F';
            document.getElementsByClassName('line-menu__language')[0].style.display = 'block';
            if (document.getElementById('sliderFone'))
                document.getElementById('sliderFone').classList.remove("fone");
        }
    }

    return (
        <div>
            <div ref={background} className="menu-background">
                <BackgroundMenu/>
            </div>
            <div className="main-container">
                <LineMenu toggleBM={usingBM}/>
                <Switch>
                    <Route exact path="/cars/build" render={() => <MainPage pressBM={usingBM}/>}/>
                    <Route path="/cars/build/order" render={() => <Order pressBM={usingBM}/>}/>
                </Switch>
            </div>
        </div>)
}

export default App;
