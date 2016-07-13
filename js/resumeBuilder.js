
var bio = {
	"name": "Zak Frisch",
	"role": "Web Developer",
	"contacts": {
			"email": "zfrisch@gmail.com",
			"mobile": "920-660-1089",
			"github": "zfrisch",
			"location": "Green Bay"
	},
	"biopic": "http://www.freeiconspng.com/uploads/user-icon-png-person-user-profile-icon-20.png",
	"welcomeMessage": "Welcome to my Resume!",
	"skills": ['HTML 5', 'CSS3', 'JavaScript', 'jQuery', 'Node.js', 'BootStrap', 'Foundation'],
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	
		
		$("#header").prepend(formattedRole).prepend(formattedName);
		$("#topContacts, #footerContacts").append(formattedMobile);
		$("#topContacts, #footerContacts").append(formattedEmail);
		$("#topContacts, #footerContacts").append(formattedGithub);
		$("#topContacts, #footerContacts").append(formattedLocation);
		$("#header").append(formattedPic);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
			for(i=0;i<bio.skills.length;i++) {
			var skill=	HTMLskills.replace('%data%', bio.skills[i]);
			$("#skills").append(skill);
			};
		}
};
var education = {
		"schools": [ 
		{
		"name": "NWTC",
		"location": "Green Bay, WI",
		"degree":"Bachelor of Technical Sciences",
		"majors": ["Networking"],
		"dates":"2014-2015",
		"url": "https://www.nwtc.edu/"
		},
		{
		"name": "Florida Mahatma University",
		"location": "Tampa, FL",
		"degree":"Extra-marital Arts",
		"majors": ["I majored in having a silly degree"],
		"dates":"2010-2013",
		"url": "https://www.florida.com/"
		}
		],
		"onlineCourses": [
		{
		"title": "Front-End Web Developer NanoDegree",
		"school":"Udacity",
		"dates":"Jan 2016 - Mar 2016",
		"url":"http://www.udacity.com/"
		}
		],
		"display": function() {
		$("#education").append(HTMLschoolStart);
		education.schools.forEach(function(item, index) {
		var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[index].name);
		var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[index].degree);
		var formattedschoolDates = HTMLschoolDates.replace('%data%', education.schools[index].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[index].location);
		var allmajors="";
		for(i=0; i<education.schools[index].majors.length;i++) {
		var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[index].majors[i]);	
		allmajors = allmajors + formattedschoolMajor;
		}
		$('.education-entry:last').append(formattedschoolName)
		.append(formattedschoolDegree)
		.append(formattedschoolDates)
		.append(formattedschoolLocation)
		.append(allmajors);
		});	
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		education.onlineCourses.forEach(function(item, index) {
		var formattedonlinetitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[index].title);
		var formattedonlineschool = HTMLonlineSchool.replace('%data%',education.onlineCourses[index].school);
		var formattedonlinedates = HTMLonlineDates.replace('%data%', education.onlineCourses[index].dates);
		var formattedonlineurl = HTMLonlineURL.replace('%data%', education.onlineCourses[index].url);
		$(".education-entry:last").append(formattedonlinetitle)
		.append(formattedonlineschool)
		.append(formattedonlinedates)
		.append(formattedonlineurl);
		});
	}
};
	
var work = {	
		"jobs": [
		{
		"employer":"Nsight/Cellcom",
		"title":"Interactive Equipment Guide Developer",
		"dates":"January 2013 - Present",
		"description": "Work as Developer for an Interactive Guide. Job requires HTML, CSS, JavaScript, jQuery, PHP, and Microsoft Office proficiency. I also consult other departments regarding technical matters and assist with out of scope issues as they arise.",
		"location": "De Pere, WI"
		},
		{
		"employer":"Bob's Burgers",
		"title":"Burger Flipping Malcontent",
		"dates":"January 2010 - 2013",
		"description": "Made Burgers. Constantly disputed wages with Employer, Bob, and fought off his three insane children and nagging wife.",
		"location": "Baraboo, WI"
		}
		],
		"display": function() { 
		work.jobs.forEach(function(item, index) {
		$("#workExperience").append(HTMLworkStart);
		var formatworkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[index].employer);
		var formatworkTitle = HTMLworkTitle.replace('%data%',work.jobs[index].title);
		var formatworkDates = HTMLworkDates.replace('%data%',work.jobs[index].dates);
		var formatworkLocation = HTMLworkLocation.replace('%data%',work.jobs[index].location);
		var formatworkDescription = HTMLworkDescription.replace('%data%',work.jobs[index].description);
		$(".work-entry:last")
		.append(formatworkEmployer)
		.append(formatworkTitle)
		.append(formatworkDates)
		.append(formatworkLocation)
		.append(formatworkDescription);
		});
		}
};
var projects = {
	"projects": [
	{
	"title": "Salarium", 
	"dates": "Jan 2016",
	"description": "Node.js Module and Grunt Plugin to allow for easily created, responsive images.",
	"images": ["http://i.stack.imgur.com/y2NfZ.png"]
	},
	{
	"title": "Resume", 
	"dates": "January 2016",
	"description": "Resume Project From Udacity!",
	"images": ["http://www.superiorsilkscreen.com/546-592-thickbox/there-are-only-10-kinds-of-people-those-who-understand-binary-and-those-who-don-t.jpg"]
	}
	],
	"display": function() {
		projects.projects.forEach(function(item, index) {
			$('#projects').append(HTMLprojectStart);
			var formattedprojecttitle = HTMLprojectTitle.replace('%data%', projects.projects[index].title);
			var formattedprojectdates = HTMLprojectDates.replace('%data%', projects.projects[index].dates);
			var formattedprojectdescription = HTMLprojectDescription.replace('%data%', projects.projects[index].description);
			var allimages = "";
			for(i=0;i < projects.projects[index].images.length;i++) {
				var formattedprojectimage = HTMLprojectImage.replace('%data%', projects.projects[index].images[i]);
				allimages = allimages + formattedprojectimage;
			}
			$(".project-entry:last").append(formattedprojecttitle)
			.append(formattedprojectdates)
			.append(formattedprojectdescription)
			.append(allimages);
		});
	}
}
function inName(string) {
var nameArray = string.toLowerCase().split(" ");
nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1);
nameArray[1] = nameArray[1].toUpperCase();
string = nameArray[0] + " " + nameArray[1];

return string;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);





