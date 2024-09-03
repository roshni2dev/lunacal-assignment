import { Box } from "@mui/material"

const FilePreview = ({ scrollContainerRef, fileArray }) => {

    return (
        <Box
            ref={scrollContainerRef}
            className="image-section"
            style={fileArray.length === 0 ? { height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f5f5f5' } : {}}>

            <div className="scroll-content">
                {
                    fileArray.length === 0
                        ?
                        "There is no data. Only select png,jpeg and jpg"
                        :
                        fileArray.map((file) => (
                            <Box className='image-container'>
                                <img src={file.url} className="image" />
                            </Box>
                        ))
                }
            </div>
        </Box>


    )
}
export default FilePreview