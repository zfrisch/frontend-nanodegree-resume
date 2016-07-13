
var bio = {
	"name": "Zak Frisch",
	"role": "Web Developer",
	"contact": {
			"email": "zfrisch@gmail.com",
			"phone": "920-660-1089",
			"github": "zfrisch",
			"location": "Green Bay"
	},
	"pic": "http://vignette3.wikia.nocookie.net/es.futurama/images/4/4f/Fry.JPG/revision/latest?cb=20110605191102",
	"welcome": "Welcome to my Resume!",
	"skills": ['HTML 5', 'CSS3', 'JavaScript', 'jQuery', 'Node.js', 'BootStrap', 'Foundation'],
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contact.phone);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contact.github);
		var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
		var formattedPic = HTMLbioPic.replace('%data%', bio.pic);
		var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
	
		
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
		"major": ["Networking"],
		"dates":"2014-2015",
		"url": "https://www.nwtc.edu/"
		},
		{
		"name": "Florida Mahatma University",
		"location": "Tampa, FL",
		"degree":"Extra-marital Arts",
		"major": ["I majored in having a silly degree"],
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
		for(item in education.schools) {
		var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[item].name);
		var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[item].degree);
		var formattedschoolDates = HTMLschoolDates.replace('%data%', education.schools[item].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[item].location);
		var allmajors="";
		for(i=0; i<education.schools[item].major.length;i++) {
		var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[item].major[i]);	
		allmajors = allmajors + formattedschoolMajor;
		}
		$('.education-entry:last').append(formattedschoolName)
		.append(formattedschoolDegree)
		.append(formattedschoolDates)
		.append(formattedschoolLocation)
		.append(allmajors);
		};	
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		for(item in education.onlineCourses) {
		var formattedonlinetitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[item].title);
		var formattedonlineschool = HTMLonlineSchool.replace('%data%',education.onlineCourses[item].school);
		var formattedonlinedates = HTMLonlineDates.replace('%data%', education.onlineCourses[item].dates);
		var formattedonlineurl = HTMLonlineURL.replace('%data%', education.onlineCourses[item].url);
		$(".education-entry:last").append(formattedonlinetitle)
		.append(formattedonlineschool)
		.append(formattedonlinedates)
		.append(formattedonlineurl);
		}
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
		for(item in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formatworkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[item].employer);
		var formatworkTitle = HTMLworkTitle.replace('%data%',work.jobs[item].title);
		var formatworkDates = HTMLworkDates.replace('%data%',work.jobs[item].dates);
		var formatworkLocation = HTMLworkLocation.replace('%data%',work.jobs[item].location);
		var formatworkDescription = HTMLworkDescription.replace('%data%',work.jobs[item].description);
		$(".work-entry:last")
		.append(formatworkEmployer)
		.append(formatworkTitle)
		.append(formatworkDates)
		.append(formatworkLocation)
		.append(formatworkDescription);
		};
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
		for (item in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedprojecttitle = HTMLprojectTitle.replace('%data%', projects.projects[item].title);
			var formattedprojectdates = HTMLprojectDates.replace('%data%', projects.projects[item].dates);
			var formattedprojectdescription = HTMLprojectDescription.replace('%data%', projects.projects[item].description);
			var allimages = "";
			for(i=0;i < projects.projects[item].images.length;i++) {
				var formattedprojectimage = HTMLprojectImage.replace('%data%', projects.projects[item].images[i]);
				allimages = allimages + formattedprojectimage;
			}
			$(".project-entry:last").append(formattedprojecttitle)
			.append(formattedprojectdates)
			.append(formattedprojectdescription)
			.append(allimages);
		};
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





