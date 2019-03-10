import React, {Component} from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {link_en, link_de, image} =  this.props.socialProfile;
        return (
            <span>
            <a href={link_en}><img src={image} alt='social-profile' style={{width: 35, height: 35, margin:10}} /> </a>
            </span>
        )
    }

    

}
//stateless easier to read
const SocialProfiles = (props) =>  
(
            <div>
            <h2>Let's connect!</h2>
            <div>
                {
                    SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;

                    } )
                }
            </div>
            </div>

        )

export default SocialProfiles;