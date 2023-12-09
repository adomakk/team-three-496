import React, { useState, useEffect } from 'react';
import TransferLocate from './transfercredit/components/Location';
import NavbarAGGIE from './homepage/components/Navbar';

export default function Tranfer() {
    const [pdfFile, setPdfFile] = useState(null);
    const [results, setResults] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [majors, setMajors] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const curriculumGuideUrl = `http://localhost:5000/api/curriculum-guides/${selectedMajor}`;



  

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
      };
    
      /** Corresponds with Functions 1 - 3 in 'app.py'. */
    
      const handleSearch = async () => {
        if (!pdfFile) {
          alert('Please upload a PDF file.');
          return;
        }
    
        const formData = new FormData();
        formData.append('pdf_file', pdfFile);
    
        try {
          const response = await fetch('http://localhost:5000/search', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          }
        } catch (error) {
          console.error('Error searching for courses:', error);
        }
      };
    
      /** Corresponds with Function 4 in 'app.py'*/
    
      useEffect(() => {
        // Fetch initial data for the first dropdown (Colleges)
        fetch('http://localhost:5000/api/colleges')
          .then(response => response.json())
          .then(data => setColleges(data));
      }, []);
    
      useEffect(() => {
        // Fetch departments based on the selected college
        if (selectedCollege) {
          fetch(`http://localhost:5000/api/departments?college_id=${selectedCollege}`)
            .then(response => response.json())
            .then(data => setDepartments(data));
        }
      }, [selectedCollege]);
    
      useEffect(() => {
        // Fetch majors based on the selected department
        if (selectedDepartment) {
          fetch(`http://localhost:5000/api/majors?department_id=${selectedDepartment}`)
            .then(response => response.json())
            .then(data => setMajors(data));
        }
      }, [selectedDepartment]);
    
      
    
      const handleCollegeChange = (e) => {
        setSelectedCollege(e.target.value);
        setSelectedDepartment('');
        setSelectedMajor('');
      };
    
      const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
        setSelectedMajor('');
      };
    
      const handleMajorChange = (e) => {
        setSelectedMajor(e.target.value);
      };

      return (
        <div style={{overflowX: 'hidden'}}>
            <NavbarAGGIE />
            <h1 style={{position: 'relative', right: '750px', color: 'DarkBlue', fontWeight: 'bold', textShadow: '2px 2px 2px lightgray'}}>Transfer Credits</h1>
            <br/>
            
            <p>Upload college transcript to see if course will be accepted at A&T and can be applied to program transfering into.</p>

            <input type="file" accept=".pdf" onChange={handleFileChange} />
        
       
        <br></br>
        <br></br>

        
        <select 
        value={selectedCollege} 
        onChange={handleCollegeChange} 
        style={{
           
                width: '50%',
                left: '100px',
                backgroundColor: '#ffe680',
                borderColor: '#cca300',
                borderStyle: 'solid',
                textAlign: 'center'
        }}>
            <option value="">Select College</option>
            {colleges.map(college => (
            <option key={college._id} value={college._id}>{college.name}</option>
            ))}
        </select>
        <br></br>
        <br></br>

        <select 
        value={selectedDepartment} 
        onChange={handleDepartmentChange}
        style={{
           
            width: '50%',
            left: '100px',
            backgroundColor: '#ffe680',
            borderColor: '#cca300',
            borderStyle: 'solid',
            textAlign: 'center'
        }}>
            <option value="">Select Department</option>
            {departments.map(department => (
            <option key={department._id} value={department._id}>{department.name}</option>
            ))}
        </select>
        <br></br>
        <br></br>

        <select 
        value={selectedMajor}
        onChange={handleMajorChange}
        style={{
           
            width: '50%',
            left: '100px',
            backgroundColor: '#ffe680',
            borderColor: '#cca300',
            borderStyle: 'solid',
            textAlign: 'center'
        }}>
            <option value="">Select Major</option>
            {majors.map(major => (
            <option key={major._id} value={major._id}>{major.name}</option>
            ))}
        </select>
        <br></br>
        <br></br>
        {selectedMajor && (
            <div>
            <iframe
                title="Curriculum Guide"
                src={curriculumGuideUrl}
                width="100%"
                height="600px"
            />
            </div>
        )}
        <br></br>
        <button onClick={handleSearch}>Search Course</button>
        <br></br>
        <br></br>
        
        <h2 style={{position: 'center', right: '750px', color: 'DarkBlue', fontWeight: 'bold', textShadow: '2px 2px 2px lightgray'}}>
            Accepted Transfer Credits: </h2>
        <ul>
            {results.map((course) => (
            <li key={course._id}>
                <strong>Course Name:</strong> {course['course name']}
                <br />
                <strong>Course Abbreviation:</strong> {course['course abbreviation']}
                <br />
                <strong>Credit Hours:</strong> {course['credit hours']}
            </li>
            ))}
        </ul>

        <h2 style={{position: 'center', right: '750px', color: 'DarkBlue', fontWeight: 'bold', textShadow: '2px 2px 2px lightgray'}}>
            Credits Applied to Curriculum Guide: </h2>
        <ul>
            {results.map((result) => (
            <li key={result._id}>
                {result['course name']} - {result['course abbreviation']} ({result['credit hours']} hours)
            </li>
            ))}
        </ul>

        </div>
    );



};

/*
const dropdown_styles = {
    dropdown: {
        width: '50%',
        position: 'relative',
        left: '100px',
        backgroundColor: '#ffe680',
        borderColor: '#cca300',
        borderStyle: 'solid',
        textAlign: 'center'
    }
}

export default function Transfer() { 
    return (
        <div style={{overflowX: 'hidden'}}>
            <NavbarAGGIE />
            <br/>
            <TransferLocate />
            <h1 style={{position: 'relative', right: '750px', color: 'DarkBlue', fontWeight: 'bold', textShadow: '2px 2px 2px lightgray'}}>Transfer Credits</h1>
            <br/>
            <DropdownTransfer />
            <ViewGuide />
        </div>
    );
};
*/