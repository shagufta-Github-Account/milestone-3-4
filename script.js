function generateResume() {
    // Get input values
    var name = document.getElementById('name').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Set resume content with the input values
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayJobTitle').textContent = jobTitle;
    document.getElementById('displayLocation').textContent = location;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayExperience').textContent = experience;
    document.getElementById('displaySkills').textContent = skills;
    // Clear the form after generating the resume
    document.getElementById('resumeForm').reset();
}
