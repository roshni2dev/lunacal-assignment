import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2"
import EmptyBox from "../../components/empty-box/empty-box.component"
import './home.style.css'
import InformationSection from "../../components/information-section/information-section.component";
import GallerySection from "../../components/gallery-section/gallery-section.component";

const Home = () => {
    return (
        <Box style={{ height: '100%' }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <EmptyBox />
                </Grid>
                <Grid container spacing={4} size={{ xs: 12, md: 6 }}>
                    <Grid size={{ xs: 12}}>
                        <InformationSection />
                    </Grid>
                    <Grid size={{ xs: 12}}>
                        <GallerySection />
                    </Grid>
                </Grid>

            </Grid>
        </Box>

    );
}



export default Home