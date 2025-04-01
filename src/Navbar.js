import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    //link is <a> tag
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> Site Name</Link> 
            <ul>
                <CustomLink to="/forums">Forums</CustomLink>
                <CustomLink to="/community">Community</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath= useResolvedPath(to) //makes ure its absolute path

    //make sure entire url is exactly the same    
    const isActive=useMatch({path: resolvedPath.pathname, 
        end: true})
    return (
        //if path = href, marked as active, else none
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>

    )
}