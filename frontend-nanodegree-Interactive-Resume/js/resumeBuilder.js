/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$("#main").append("YuDong Geng");*/

'use strict';  //开启严格模式

/*个人信息*/
var bio = {
	"name": "YuDong Geng",
	"role": "Front-End Web Developer",
	"contacts": {
        "mobile": 18514000891,
		"email": "gengyudonga@gmail.com",
		"github": "luocooldong",
		"location": "BeiJing, ChangPing, China"
	},
    "welcomeMessage": "I'm currently working as a Web Developer in ZhongGuangCun.",
    "skills": ["Html", "Css", "JavaScript", "jQuery", "Bootstrap", "AngularJS", "Web Development"],
	"bioPic": "images/dong.jpg",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLmobile.replace("%data%", this.contacts.mobile));
        formattedContactInfo.push(HTMLemail.replace("%data%", this.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", this.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", this.contacts.location));

		formattedContactInfo.forEach(function(eachFormattedContactInfo){
		    $("#topContacts").append(eachFormattedContactInfo);
			$("#footerContacts").append(eachFormattedContactInfo);
		});

		/*skill*/
		if(this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
		    
		    this.skills.forEach(function(skill){
		        $("#skills").append(HTMLskills.replace("%data%", skill));
		    });
		}
	}   
};

bio.display();


/*教育背景*/
var education = {
	"schools": [
		{   "name": "University of ZhengZhou",
			"location": "ZhengZhou, HeNan, China",
			"degree": "Undergraduate First",
			"majors": "Computer Science and Technology",
			"dates": "2011 - 2016",
			"url": "http://www.zzu.edu.cn/"
		}		
	],
	"onlineCourses": [
	    {   "title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "February 2017",
			"url": "https://www.udacity.com/course/ud304"
		},
		{   "title": "Javascript Basics",
			"school": "Udacity",
			"dates": "February 2017",
			"url": "https://www.udacity.com/course/ud804"
		},
		{   "title": "Object-Oriented Javascript",
			"school": "Udacity",
			"dates": "February 2017",
			"url": "https://www.udacity.com/course/ud015"
		},
		{   "title": "HTML5 Canvas",
			"school": "Udacity",
			"dates": "March 2017",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "title": "AngulrJS",
			"school": "Coursera",
			"dates": "April 2017",
			"url": "https://www.coursera.org/learn/angular-js"
		},
		{   "title": "Web Development",
			"school": "Udacity",
			"dates": "April 2017",
			"url": "https://www.udacity.com/course/cs253"
		}
	],
	"display": function() {
		if (this.schools.length > 0) {
			this.schools.forEach(function(school) {
				$("#education").append(HTMLschoolStart);

				var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

				var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

				$(".education-entry:last").append(formattedSchoolNameDegree,
                                            formattedSchoolLocation,
                                            formattedSchoolDates,
                                            formattedSchoolMajor);
				/*$(".education-entry:last").append(formattedSchoolLocation);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolMajor);*/
			});
		}
	
		if (this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			this.onlineCourses.forEach(function(onlineCourse) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, 
                                            formattedOnlineDates,
                                            formattedOnlineURL);
				/*$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);*/
			});
		}
	}
};

education.display();


/*工作经历*/
var work = {
	"jobs": [
		{
			"employer": "The isoftstone information Technology Company",
			"title": "Software Developer",
			"location": "BeiJing, ZhongGuangCun, China",
			"dates": "January 2016 - Present",
			"description": "I was specifically hired to help deliver the new online FireWall  system for HuaWei Company.In this time, I studied the HTMl, CSS, JS."
		},
		{
			"employer": "XingZhiHuiYuan Company",
			"title": "School Trainee",
			"location": "XiAn, ShanXi, China",
			"dates": "April 2015 - May 2015",
			"description": "I developed the Personsal Blog System with the other Group-Student in Practice"
		}
	],
	"display": function() {
		if (this.jobs.length > 0) {
			$("#workExperience").append(HTMLworkStart);
			work.jobs.forEach(function(job) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
				var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

				var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

				$(".work-entry:last").append(formattedEmployerWorkTitle,
                                       formattedWorkLocation,
                                       formattedWorkDates,
                                       formattedWorkDescription);
                /*append可以一次添加多个参数*/
				/*$(".work-entry:last").append(formattedWorkLocation);
				$(".work-entry:last").append(formattedWorkDates);
				$(".work-entry:last").append(formattedWorkDescription);*/
			});
		}
	}
};

work.display();


/*项目经验*/
var projects = {
	"projects": [{
		"title": "Mockup to Article",
		"dates": "January 2017",
		"description": "Practice HTML syntax by converting a mockup of a blog article into a real website as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
		"images": ["images/mockup-to-article.png"],
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"title": "Animal Trading Cards",
		"dates": "February 2017",
		"description": "Use CSS to convert a design prototype into a functional webpage  as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
		"images": ["images/animal-trading-cards.png"],
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},{
		"title": "Build a Portfolio Site",
		"dates": "February 2017",
		"description": "develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will "+
		 "complete throughout the course of the Front-End Web Developer Nanodegree.",
		"images": ["images/portfolio.png"],
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},{
		"title": "Build a ConFusion Site",
		"dates": "June 2014 - August 2014",
		"description": "Created a ConFusion Site in the Coursera",
		"images": ["images/conFusion.png"],
		"url": "https://www.coursera.org/learn/angular-js"
	}],
	"display": function() {
		if (projects.projects.length > 0) {
			$("#projects").append(HTMLprojectStart);
			this.projects.forEach(function(project) {
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

				$(".project-entry:last").append(formattedProjectTitle,
                                          formattedProjectDates,
                                          formattedProjectDescription);
				/*$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);*/

				project.images.forEach(function(image){
					var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
					$(".project-entry:last").append(formattedProjectImage);
				});
			});
		}
	}
};


projects.display();


/*获取鼠标坐标*/
$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

/*名称国际化*/
function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	var myNameString = name.join(" ");
	return myNameString;
}

$("#main").append(internationalizeButton);




/*技能图谱*/
$(function () {
    var myChartData = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'NodeJS',
				color: 'rgba(255, 0, 0, .5)',
				data: [[2017, 4], [2016, 12]]
			},
			{
				name: 'AngularsJS',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 1]]
			},
			{
				name: 'Bootstrap',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 5], [2002, 3], [2008, 4], [2005, 2]]
			},
			{
				name: 'ExtJS',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 2]]
			},
			{
				name: 'jQuery',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2016, 12], [2017, 3], [2013, 12], [2012, 12], [2011, 4]]
			},
			{
				name: 'Ajax',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2016, 9], [2016, 12]]
			},
			{
				name: 'JavaScript',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2014, 7], [2016, 8]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2013, 12], [2014, 3]]
			},
			{
				name: 'Json',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2015, 11], [2015, 12]]
			},
			{
				name: 'MySQL',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2012, 9], [2012,12]]
			},
			{
				name: 'Jsp/Selvet',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2012, 4], [2013, 8]]
			},
			{
				name: 'Java',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2012, 3]]
			},
			{
				name: 'C',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2011, 12], [2012, 1]]
			}]
	};
    $("#container").highcharts(myChartData);
});
 

/*添加地图*/
$("#mapDiv").append(googleMap);



















