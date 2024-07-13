import NavStyle from "./navBar.module.css";
import albumLogo from "../../static/images/album.png"

function Nav(){
    return(
        <>
        <nav className={NavStyle.navBar}>
            <img src={albumLogo} alt="logo"/>
            <h2>PhotoFolio</h2>
        </nav>
        </>
    )
}
export default Nav