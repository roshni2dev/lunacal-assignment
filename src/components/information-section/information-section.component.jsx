import { Box } from "@mui/material"
import './information-section.style.css'
import Navigation from "../../routes/navigation/navigation.component"

const InformationSection = () => {
    return (
        <Box className='information-section'>
            <Navigation />
            <p className="text">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                <br /><br />
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            </p>
        </Box>
    )
}
export default InformationSection