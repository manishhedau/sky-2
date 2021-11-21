import './styles/modelpreview.css';
import ActivityTile from './activity_tile';
import { iconsObject } from '../../pages/iconObject';
import { useSelector } from 'react-redux';

const ModelPreview = ({ closeEye }) => {

    const spotlightTitle = useSelector(state => state.entities.spotlight.spotlight.title)
    const userData = useSelector(state => state.entities);
    // console.log("Preview: Data");
    // console.log(userData);
    const socialMediaLinks = userData.socialLinks.filter(link => link.isActive);

    console.log("Component mount.");
    const store = {

        profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",

        styles: {
            background: "lightblue",
            font: "Arial"
        },

        views: 100,
        posts: 50,
        likes: 170,

        username: "Purohit",
        activity_links: ["foo", "bar", "meek", "root"],
        social_media_links: ["foo", "baar", "meek", "loo", "loo"],
        designation: "Developer",
    }

    const handleClick = () => {
        console.log("Close eye!");
        closeEye();
    }

    return (
        <section className="model-preview-section">
            <div className="model-preview-container" style={{ background: userData.appearance.styles.background, fontFamily: userData.appearance.styles.font }}>

                <p className="skyhype-logo close-eye-icon" ><i class="far fa-eye-slash" onClick={handleClick}></i></p>

                {/* <img className="profile-image" src={store.profile_image} alt={store.username} /> */}

                <div className="model-preview-profile-info">
                    <img className="model-profile-image" src={store.profile_image} alt={store.username} />
                    <h1>{userData.editProfile.editprofile.username}</h1>
                    <p id="user-designation">{userData.editProfile.editprofile.designation}</p>

                    <div className="preview-stats">
                        <p>Views: {store.views}</p>
                        {/* <p>Likes: {store.likes}</p> */}
                        <p>Posts: {userData.activityLinks.length}</p>
                    </div>

                    <div className="social-media-links">
                        {socialMediaLinks.map((link, ind) => {
                            return <a key={ind} href={iconsObject[link.social_media].baseURL + link.link} style={{ color: "white" }}><i className={`fab ${iconsObject[link.social_media].icon}`}></i></a>
                        })}
                    </div>
                </div>

                <div className="slideshow">
                        {/* <img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F229814.jpg&f=1&nofb=1" alt="slideshow" /> */}
                        <p>{spotlightTitle}</p>
                </div>

                <div className="activity-links">
                    {userData.activityLinks.map(link => {
                        return <ActivityTile key={10000 + Math.ceil(Math.random() * 10000)} thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2Fconcert-show-crowd-peoples-music-party-5k-vo-2048x1152.jpg&f=1&nofb=1" title="Title" />
                    })}
                </div>

                <button className="btn btn-block btn-primary join-button">Join My Club</button>
            </div>

        </section>
    );

}

export default ModelPreview;