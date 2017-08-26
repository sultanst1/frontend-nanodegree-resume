var bio = {
  name : "sultan",
  role : "Software Developer",
  contacts : {
    mobile : "966-592903330",
    email : "ss-tamimi-ss@hotmail.com",
    twitter : "https://twitter.com/sultan_st_",
    location : "Riyadh"
  },
  welcomeMessage : "Welcome to my first Javascript page",
  skills : ["Java", "php", "frontend"],
  bioPic : "images/Image11.png" 
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "@sultan_st_");
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0; i <  bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
};

var education = {
  schools: [
    {
      name : "Zaid Bin Thabit School",
      location : "Riyadh",
      degree : "Primary School",
      dates : 2001,
      url : ""
    },
    {
      name : "Al Shifa Secondary School",
      location : "Riyadh",
      degree : "Secondary School",
      dates : 2010,
      url : ""
    },
    {
      name : "King Saud University",
      location : "Riyadh",
      degree : " University",
      majors : ["Data science"],
      dates : 2015,
      url : "http://ksu.edu.sa/"
    }
    
  ],
  onlineCourses: [
    {
      title : "frontend",
      school : "udacity",
      dates : 2017,
      url : "https://www.udacity.com/"
    },
    
  ]};
  education.display = function() {
    if (education.schools.length > 0) {
      $("#education").append(HTMLschoolStart);

      for (var i = 0 ; i <education.schools.length ; i++) {
    var formattedName;
        if (!education.schools[i].url) {
           formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        }else{
           formattedName = addHyperLink(HTMLschoolName,education.schools[i].url,education.schools[i].name);
        }       
        $(".education-entry:last").append(formattedName);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
      }
    }
    
    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);

      for (var j = 0 ; j < education.onlineCourses.length ; j++) {
        $('#education').append(HTMLschoolStart);  

        var formattedOnlineTitle = addHyperLink(HTMLonlineTitle,education.onlineCourses[j].url, education.onlineCourses[j].title);
              $('.education-entry:last').append(formattedOnlineTitle);
                var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
            $('.education-entry:last').append(formattedonlineSchool);
                var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates);
            $('.education-entry:last').append(formattedonlineDates);

    
      }
    }   
  };


var work = {
  jobs: [
    {
      employer : "Marketing experience",
      title : "Supervisor of food products",
      dates : " 2015",
      description : "Supervising the food shelves and supervising staff"
    },
    {
      employer : "Organizing a government ceremony",
      title : "Organizing the vote for the Olympics in the Kingdom",
      dates : "2015",
      description : "Organizing the voting for the candidates of the Sports Union"
    }
  ]
};
  work.display = function() {
  if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
};
var projects = {
  projects: [
    {
      title: "HTML page ",
      datesWorked: "2017",
      description: "First project in udacity",
      images: ["images/Untitled.jpg"]
      
    },
    {
      title: "build a portfolio site",
      datesWorked: "2017",
      description: "second project in udacity",
    images: ["images/ramdisk-crop_172013814_qNpKn.jpg"]
    },
    
  ]
};
  projects.display = function() {
  if (projects.projects.length > 0) {
      for (var i = 0; i < projects.projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
          var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
 
 function addHyperLink(html,url,text){
    if (!text) { 
      text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}



