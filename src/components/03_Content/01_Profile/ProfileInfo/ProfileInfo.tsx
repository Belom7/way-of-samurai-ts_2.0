import React from 'react';
import {profileType} from "../../../../Redux/profile_reducer";
import {Preloader} from "../../../common/preloader/Preloader";

type ProfileInfoPropsType = {
    profile:profileType | null
}

export const ProfileInfo = ({profile}:ProfileInfoPropsType) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt={'images'}
                     src={'https://rozabox.com/wp-content/uploads/2019/01/man-5846064_1920-735x400.jpg'}/>
            </div>
            <div>
                <img src={profile.photos.small} alt={'userAvatar'}/>
            </div>
            <div>
                {profile.aboutMe}
            </div>
        </div>
    );
};