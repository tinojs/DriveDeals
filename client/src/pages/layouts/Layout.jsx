import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Layout.module.css";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <div className={classes.container}>
                <Outlet />
            </div>
        </div>
    );
}
