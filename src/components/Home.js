import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import AuthContext from "./shared/Auth-context";
import "./Css/Home.css";
import { Button } from "react-bootstrap";
import Feed from "./Feed";
import AddFriends from "./AddFriends";
import Connections from "./Connections";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Profile from "./Profile";
const Home = () => {
    const { setRgFlag, setLgFlag, setLiFlag } = useContext(AuthContext);
    const [sideMenu, setSideMenu] = useState(false);
    const [feedPage, setFeedPage] = useState(true);
    const [addFriendsPage, setAddFriendsPage] = useState(false);
    const [connectionsPage, setConnectionsPage] = useState(false);
    const [messagesPage, setMessagesPage] = useState(false);
    const [notificationPage, setNotificationsPage] = useState(false);
    const [settingsPage, setSettingsPage] = useState(false);
    const [profilePage, setProfilePage] = useState(false);
    useEffect(() => {
        setRgFlag(false);
        setLgFlag(true);
        setLiFlag(false);
    }, [])
    const handlePage = (v) => {
        setFeedPage(false);
        setAddFriendsPage(false);
        setConnectionsPage(false);
        setNotificationsPage(false);
        setSettingsPage(false);
        setMessagesPage(false);
        setProfilePage(false);
        if (v === "feed") {
            setFeedPage(true);
        }
        if (v === "friends") {
            setAddFriendsPage(true);
        }
        if (v === "connections") {
            setConnectionsPage(true);
        }
        if (v === "notification") {
            setNotificationsPage(true);
        }
        if (v === "messages") {
            setMessagesPage(true);
        }
        if (v === "settings") {
            setSettingsPage(true);
        }
        if (v === "profile") {
            setProfilePage(true);
        }

    }


    return (
        <>
            <div className="d-flex   home " style={{ height: "100vh" }}>

                <div className={`col-md-3 col-4 sidebar ${sideMenu ? "" : "d-none  d-md-block"}`}  >
                    <Button variant="primay" className="  d-sm-block d-xs-block d-md-none " onClick={() => { setSideMenu(!sideMenu) }}><span><RxCross1 /></span></Button>
                    <div className=" nav-cards  my-3 mx-3 bg-white " onClick={() => { handlePage("feed") }} >
                        <h5 className="mx-3 p-3" >For You</h5>
                    </div>
                    <div className=" nav-cards my-3 mx-3 bg-white " onClick={() => { handlePage("friends") }} >
                        <h5 className="mx-3 p-3">Add Friends</h5>
                    </div>
                    <div className=" nav-cards my-3 mx-3 bg-white " onClick={() => { handlePage("connections") }}>
                        <h5 className="mx-3 p-3">Connections</h5>
                    </div>
                    <div className=" nav-cards my-3 mx-3 bg-white " onClick={() => { handlePage("messages") }}>
                        <h5 className="mx-3 p-3">Messages</h5>
                    </div>
                    <div className=" nav-cards my-3 mx-3 bg-white " onClick={() => { handlePage("notification") }}>
                        <h5 className="mx-3 p-3">Notifications</h5>
                    </div>
                    <div className=" nav-cards my-3 mx-3 bg-white " onClick={() => { handlePage("settings") }}>
                        <h5 className="mx-3 p-3">Settings</h5>
                    </div>
                    <div className=" nav-cards my-3  mx-3 bg-white " onClick={() => { handlePage("profile") }}>
                        <h5 className="mx-3 p-3">My Profile</h5>
                    </div>

                </div>
                <div className={` col-md-9   feed-container ${sideMenu ? "" : "col-12"} `} >
                    <Button variant="primay" className={`menu-bar-btn d-sm-block    d-md-none ${sideMenu ? "d-sm-none d-none" : "d-block"}`} onClick={() => { setSideMenu(!sideMenu) }}><span><AiOutlineMenu /></span></Button>
                    {feedPage && <Feed />}
                    {addFriendsPage && <AddFriends />}
                    {connectionsPage && <Connections />}
                    {messagesPage && <Messages />}
                    {notificationPage && <Notifications />}
                    {settingsPage && <Settings />}
                    {profilePage && <Profile />}
                </div>
            </div>
        </>
    )
}
export default Home;