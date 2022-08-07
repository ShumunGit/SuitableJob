import React from "react";
import Main from "./Components/Main";
import SignUp from './Components/SignUp';
import BodyContainer from "./Components/BodyContainer";
import LogIn from './Components/LogIn';
import {
    Switch,
    Route,
    Link,
    BrowserRouter,
    NavLink,
    useHistory
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="HeaderPage">

                    <Link to={() => `/LogIn`} text="Page 4" style={{
                        color: "white", textDecoration: 'none',
                        fontSize: '120%', margin: '20px 0px 0px 0px'
                    }}>Log In</Link>

                    <h1 style={{ margin: '20px 0px 0px 0px' }}>SC Support</h1>

                    <Link to={() => `/SignUp`} text="Page 4" style={{
                        color: "white", textDecoration: "none",
                        fontSize: "120%", margin: '20px 0px 0px 0px'
                    }}>Sign Up</Link>

                    <Switch>
                        <Route exact path={"/SignUp"} component={SignUp} />
                        <Route exact path={"/LogIn"} component={LogIn} />
                    </Switch>
                </div>
            </BrowserRouter>
            <Main />

        </div>
    )
}