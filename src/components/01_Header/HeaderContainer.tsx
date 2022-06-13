import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth_reducer";

type HeaderAPIType ={
    setUserData:()=>void
}

class HeaderAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                    // this.props.setUser(response.data.items)
                    console.log(response)
                    if (response.data.resultCode === 0) {

                    }
                }
            )
    }

    render() {
        return (
            <Header/>
        );
    }
}

const mapStateToProps = (state: any) => {

}

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPI)

