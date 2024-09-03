import { Box } from "@mui/material"
import './navigation.style.css'
import { Link, useLocation, useNavigate } from "react-router-dom"

const navigation_data = [
    {
        id: 1,
        title: 'about me',
        routes: '/'
    },
    {
        id: 2,
        title: 'experiences',
        routes: '/experiences'
    },
    {
        id: 3,
        title: 'recommended',
        routes: '/recommended'
    }
]



const Navigation = () => {
    const navigate = useNavigate();
  const { pathname } = useLocation();


    return (
        <Box className='navigation'>
            {
                navigation_data.map(item => (
                    <p 
                        onClick={() => navigate(item.routes)}
                        className={pathname === item.routes ? 'active-navigation-text' : 'navigation-text'} >
                        {item.title}
               
                    </p>
                ))
            }
        </Box>
    )
}
export default Navigation