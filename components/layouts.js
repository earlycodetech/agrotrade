import NavBar from "./navbar";
import Footer from "./footer";

export default function Layouts({children}) {
    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}