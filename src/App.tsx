import React from 'react';
import './App.css';
import {Navbar} from "./components/02_Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";
import {UsersContainer} from "./components/03_Content/05_Users/UsersContainer";
import {DialogsContainer} from "./components/03_Content/02_Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/03_Content/01_Profile/ProfileContainer";
import {HeaderContainer} from "./components/01_Header/HeaderContainer";
import {LoginContainer} from "./components/03_Content/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/WithRouter";
import {setInitializedApp} from "./Redux/app_reducer";
import {StateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


interface AppContainerPropsType extends React.Component {
    setInitializedApp: () => void
    initialized: boolean
}

export class App extends React.Component<AppContainerPropsType, {}> {

    componentDidMount() {
        this.props.setInitializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={<ProfileContainer/>}>
                            <Route path={':userId'} element={<ProfileContainer/>}/> {/*вложенный вариант*/}
                        </Route>
                        <Route path={'/messages'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        {/*<Route path={'/music/:id'} element={<Music/>}/>*/} {/*второй вариант вариант*/}
                        <Route path={'/login'} element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized
})

export default compose<JSX.Element>(
    withRouter<any>(connect(mapStateToProps, {setInitializedApp})(App)),
)





