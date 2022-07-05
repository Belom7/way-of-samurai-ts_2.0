import React from 'react';
import {profileType} from "../../../../Redux/profile_reducer";
import {Preloader} from "../../../common/preloader/Preloader";
import noPhoto from "../../../../assets/images/noAvatar.jpeg";
import cl from './ProfileInfo.module.css'
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile:profileType | null
    status:string
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatus}:ProfileInfoPropsType) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img alt={'images'}*/}
            {/*         src={'https://rozabox.com/wp-content/uploads/2019/01/man-5846064_1920-735x400.jpg'}/>*/}
            {/*</div>*/}
            <div>
                <img className={cl.avatarProfile} src={profile.photos.small? profile.photos.small : noPhoto} alt={'userAvatar'}/>
            </div>
            <div>
                {profile.aboutMe}
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    );
};