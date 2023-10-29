import Guide from "../assets/NCAT_CS_Curriculum_Guide.pdf"

const ViewGuide = () => {
    return (
        <div style={styles.rectangle}>
            <iframe title="NCAT_CS_Curriculum_Guide" src={Guide} style={styles.viewer}/>
        </div>
    );
};

export default ViewGuide;

const styles = {
    rectangle: {
        width: '1920px',
        height: '1050px',
        backgroundColor: '#4d4d4d',
        borderStyle: 'solid'
    },

    viewer: {  
        width: "40%",
        height: "1000px",
        position: 'relative',
        left: '500px',
        top: '25px'
    }
}