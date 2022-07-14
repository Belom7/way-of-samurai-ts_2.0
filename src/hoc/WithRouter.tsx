import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export function withRouter<T extends unknown>(Component: React.ComponentType<T>) {
    return (props: T) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
}