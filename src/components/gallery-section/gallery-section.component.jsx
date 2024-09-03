import { Box, Button } from "@mui/material"
import './gallery-section.style.css'
import { Add, ArrowBack, ArrowForward } from "@mui/icons-material"
import { useRef, useState } from "react"
import ErrorMessage from "../error-message/error-message.component"
import FilePreview from "../image-preview/image-preview.component"

const GallerySection = () => {
    const [file, setFile] = useState();
    const [fileArray, setFileArray] = useState([]);
    const [open, setOpen] = useState(false);
    const scrollContainerRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    };


    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };

    function handleChange(e) {
        if (e.target.files.length && (e.target.files[0]?.type === 'image/png' || e.target.files[0]?.type === 'image/jpeg' || e.target.files[0]?.type === 'image/jpg')) {
            setFile(URL.createObjectURL(e.target.files[0]));
            fileArray.push({ url: URL.createObjectURL(e.target.files[0]) })
            setFileArray(fileArray);
            setOpen(false);
        }
        else {
            setOpen(true);
        }


    }

    return (
        <Box className='gallery-section'>
            <Box className="button-section">
                <p className="gallery-text">Gallery</p>
                <Box className="buttons">
                    <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleChange} />
                    <Button className="add-image" onClick={handleButtonClick}><Add /> Add Image</Button>
                    <Box className="arrow-button" onClick={scrollLeft}><ArrowBack style={{ fill: '#6F787C' }} /></Box>
                    <Box className="arrow-button" onClick={scrollRight}><ArrowForward style={{ fill: '#6F787C' }} /></Box>
                </Box>
            </Box>
            <FilePreview scrollContainerRef={scrollContainerRef} fileArray={fileArray} />
            <ErrorMessage open={open} setOpen={setOpen} />

        </Box>
    )
}
export default GallerySection