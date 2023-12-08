import Guide from "../assets/NCAT_CS_Curriculum_Guide.pdf"
import '../transferStyle.css';

/* Function that implements layout and .pdf viewer.
 * References imported .css file in /transfercredits/assets/ folder and grabs the imported the .pdf files along with styling.
*/
function ViewGuide() {
    return (
        <div id='rectangle'>
            <iframe title="NCAT_CS_Curriculum_Guide" src={Guide} className='viewer'/>
        </div>
    );
};

// Exports function to the TransferCredit.js file
export default ViewGuide;