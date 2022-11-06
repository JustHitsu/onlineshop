import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import useStyles from "./style"

const Header = () =>{

    const classes = useStyles()
    console.log(classes)

    return <header className={classes.header}>
        <ul>
            <li>
                <Link to="/" component={RouterLink} variant="body2"> Home</Link>
            </li>
            <li>
                <Link to="/contacts" component={RouterLink} variant="body2"> Contacts</Link>
            </li>
        </ul>


    </header>
}

export default Header