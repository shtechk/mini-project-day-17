import myImage from "../mockImage.jpg";
import profileList from "../profileList";

const ProfileCard = () => {
  const instaProfiles = profileList.map((profile) => {
    return (
      <>
        <img src={myImage} className="mockImage" alt="mockImage" />
        <p> "Post 1" </p>
        <p> "Description for Post 1" </p>
        <p> 10 likes </p>
        <button className>Like</button>s
      </>
    );
  });
  return <>{instaProfiles}</>;
};

export default ProfileCard;
