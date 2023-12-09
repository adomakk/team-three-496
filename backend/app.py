# app.py

from flask import Flask, request, jsonify, send_from_directory, send_file
from flask_cors import CORS
import json
from PyPDF2 import PdfReader
import re
import os



app = Flask(__name__)
CORS(app)


# Define the base directory for your project
base_directory = os.path.dirname(os.path.abspath(__file__))  # This gets the directory of your app.py
database_directory = os.path.join(base_directory, "database")

# Load the JSON data from the files
with open(os.path.join(database_directory, 'transfer_credit.json'), 'r') as transfer_file:
    transfer_credit_data = json.load(transfer_file)

with open(os.path.join(database_directory, 'ncat_equivalent.json'), 'r') as ncat_file:
    ncat_equivalent_data = json.load(ncat_file)

@app.route('/search', methods=['POST'])
def search_course():
    # Read the PDF file and extract text
    pdf_file = request.files['pdf_file']
    pdf_text = ""
    if pdf_file and pdf_file.filename.endswith('.pdf'):
        pdf = PdfReader(pdf_file)
        for page in pdf.pages:
            pdf_text += page.extract_text()

    # Use regular expressions to extract the course name
    course_name_match = re.search(r'Course\s*Name:\s*([^\\n]+)', pdf_text, re.IGNORECASE)
    if course_name_match:
        course_name = course_name_match.group(1).strip()
    else:
        # Handle the case where "Course Name" is not found in the PDF
        course_name = ""

    # Print the extracted course name for debugging
    print("Course Name:", course_name)

    results = []

    if course_name:
        # Modify the search term to be "Writing Seminar"
        search_term = "Writing Seminar"
        
        for course in transfer_credit_data:
            course_name_json = course['course name']
            if search_term.lower() in course_name_json.lower():
                transfer_equivalent_id = course['transfer_equivalent_id']
                equivalent_course = next((eq for eq in ncat_equivalent_data if eq['_id'] == transfer_equivalent_id), None)
                if equivalent_course:
                    results.append(equivalent_course)

    # Extract course abbreviation from results
    course_abbreviations = [result.get('course abbreviation', '').lower() for result in results]

    # Convert plaintext to lowercase for case insensitivity
    plaintext = pdf_text.lower()

    curriculum_guide_match = None  # Store the matched course abbreviation from results

    # Loop through the plaintext to find a match for course abbreviation
    for abbreviation in course_abbreviations:
        if abbreviation in plaintext:
            curriculum_guide_match = abbreviation
            print("Found curriculum_guide_match: ", curriculum_guide_match)
            break

    if curriculum_guide_match:
        # Print the matched course abbreviation from the PDF
        print("Matched Course Abbreviation in Curriculum Guide:", curriculum_guide_match)

        # Loop through ncat_equivalent_data to find the match
        for ncat_course in ncat_equivalent_data:
            if ncat_course['course abbreviation'].lower() == curriculum_guide_match:
                # Print the matched data from ncat_equivalent.json
                print("Match found in ncat_equivalent.json:", ncat_course)

    print("Results:", results)
    return jsonify(results)



"""
    Function 4:
    Function that fetches: Colleges, Departments, Majors and Curriculum Guides from backend.
"""

# Define the base directory for your project
#base_directory = os.path.dirname(os.path.abspath(__file__))  # This gets the directory of your app.py
#databases_directory = os.path.join(base_directory, "databases")

# Function to read JSON data from a file
def read_json_file(filename):
    json_file_path = os.path.join(database_directory, f"{filename}.json")
    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
            return data
    except Exception as e:
        print(f"Error reading {filename} JSON:", str(e))
        return None

@app.route('/api/colleges')
def get_colleges():
    try:
        # Read colleges data from JSON file
        colleges_data = read_json_file("colleges")

        if colleges_data:
            # Extract relevant fields and return as JSON
            colleges = [{"_id": college["_id"], "name": college["name"]} for college in colleges_data]
            return jsonify(colleges)

        return jsonify({"error": "Colleges data not found"}), 404
    except Exception as e:
        print("Error fetching colleges:", str(e))
        return jsonify({"error": "An error occurred while fetching colleges"}), 500

@app.route('/api/departments')
def get_departments():
    try:
        college_id = request.args.get('college_id')
        if college_id is None:
            return jsonify({"error": "College ID is required"}), 400

        # Read departments data from JSON file
        departments_data = read_json_file("departments")

        if departments_data:
            # Filter departments based on the selected college
            departments = [{"_id": department["_id"], "name": department["name"]} for department in departments_data if department["college_id"] == int(college_id)]
            return jsonify(departments)

        return jsonify({"error": "Departments data not found"}), 404
    except Exception as e:
        print("Error fetching departments:", str(e))
        return jsonify({"error": "An error occurred while fetching departments"}), 500

@app.route('/api/majors')
def get_majors():
    try:
        department_id = request.args.get('department_id')
        if department_id is None:
            return jsonify({"error": "Department ID is required"}), 400

        # Read majors data from JSON file
        majors_data = read_json_file("majors")

        if majors_data:
            # Filter majors based on the selected department
            majors = [{"_id": major["_id"], "name": major["name"]} for major in majors_data if major["department_id"] == int(department_id)]
            return jsonify(majors)

        return jsonify({"error": "Majors data not found"}), 404
    except Exception as e:
        print("Error fetching majors:", str(e))
        return jsonify({"error": "An error occurred while fetching majors"}), 500

"""
    Function that reads and gets curriculum guides. 
    Also turns curriculum guide into plaintext fro easier comparison.
"""   
def read_curriculum_guide_json():
    try:
        json_file_path = os.path.join(database_directory, 'curriculum-guide.json')
        with open(json_file_path, 'r') as json_file:
            curriculum_data = json.load(json_file)
            return curriculum_data
    except Exception as e:
        print("Error reading curriculum guide JSON:", str(e))
        return None

@app.route('/api/curriculum-guides/<major_id>')
def get_curriculum_guide(major_id):
    try:
        # Ensure the major_id is a valid integer
        major_id = int(major_id)

        # Read curriculum guide data from JSON file
        curriculum_data = read_curriculum_guide_json()

        if curriculum_data:
            # Find the curriculum guide for the given major ID
            curriculum_guide = next((guide for guide in curriculum_data if guide["_id"] == major_id), None)

            if curriculum_guide:
                # Construct the absolute path using os.path.join
                curriculum_guide_path = os.path.join(base_directory, curriculum_guide.get("curriculum_guide_path"))

                # Check if the file exists
                if curriculum_guide_path and os.path.exists(curriculum_guide_path):
                    # Open the PDF file and extract text
                    pdf_text = ""
                    pdf = PdfReader(curriculum_guide_path)
                    for page in pdf.pages:
                        pdf_text += page.extract_text()

                    # Use send_file to serve the PDF file
                    return send_file(curriculum_guide_path)
                print("Path", curriculum_guide_path)

        return jsonify({"error": "Curriculum guide not found"}), 404

    except Exception as e:
        # Log any exceptions for debugging
        print("Error fetching curriculum guide:", str(e))
        return jsonify({"error": "An error occurred while fetching the curriculum guide"}), 500


if __name__ == '__main__':
    app.run(debug=True)