import React from 'react';
import {profileType} from "../../../../Redux/profile_reducer";
import {Preloader} from "../../../common/preloader/Preloader";
import noPhoto from "../../../../assets/images/noAvatar.jpeg";
import cl from './ProfileInfo.module.css'

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
                <img className={cl.avatarProfile} src={profile.photos.small? profile.photos.small : noPhoto} alt={'userAvatar'}/>
            </div>
            <div>
                {profile.aboutMe}
            </div>
        </div>
    );
};