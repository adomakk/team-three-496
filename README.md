# COMP 496 TEAM 3
The purpose of this website is to allow potential transfer students the ability to upload their college transcripts. The user will also be able to select from 3 dropdowns titled: colleges, departments, and majors. This will then retrieve and display the curriculum guide associated with the major. 

In the backend, once the transcript is uploaded the text will be extracted and compared to the database/transfer-credit.json and then compared to the database/ncat-equivalent.json for a match. 

database/transfer-credit.json - stores other colleges/universities' course names, course abbreviations, and credit hours.
database/ncat-equivalent.json - stores the NCAT equivalent of what the transfer courses will be. 

Once a comparison is done in the database and a match is found, another comparison will happen by comparing the match to the curriculum guide. It will then print that match to show the user the course that transfers over to NCAT and if that course applies to the curriculum guide selected.

## User Manual
[User Manual Link](https://www.example.com)
