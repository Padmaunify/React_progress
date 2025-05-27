function Profile({name,profession,awards,discovery}){
    return(
        <>
        <h2>{name}</h2>
        <ul>
            <li>Awards: {awards}</li>
            <li>Profession: {profession}</li>
            <li>Discovery: {discovery}</li>
        </ul>
        </>

    );
}
export default Profile