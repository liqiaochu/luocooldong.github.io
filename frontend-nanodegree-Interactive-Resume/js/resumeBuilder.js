'use strict'; 

/*个人信息*/
var bio = {
	"name": "耿玉东",
	"role": "前端开发工程师",
	"contacts": {
        "mobile": 18514000891,
		"email": "gengyudonga@gmail.com",
		"github": "luocooldong",
		"locationOrigin": "河南周口",
		"location": "北京"
	},
    "welcomeMessage": "学而不思则罔，思而不学则怠",
    "skills": ["Html5", "Css3", "ES6", "React", "Angular", "Vue", "Webpack", "jQuery"],
	"bioPic": "../frontend-nanodegree-Interactive-Resume/images/dong.jpg",
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
		formattedContactInfo.push(HTMLlocationOrigin.replace("%data%", this.contacts.locationOrigin));
        formattedContactInfo.push(HTMLlocation.replace("%data%", this.contacts.location));

		formattedContactInfo.forEach(function(eachFormattedContactInfo){
		    $("#topContacts").append(eachFormattedContactInfo);
		});

		/*技能*/
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
		{   "name": "郑州大学",
			"degree": "本科",
			"majors": "计算机科学与技术专业",
			"dates": "2011 - 2016",
		    "location": "郑州，河南",
			"url": "http://www.zzu.edu.cn/"
		}		
	],
	"onlineCourses": [
		{   "title": "Git/GitHub版本控制和协作开发",
			"school": "优达学城",
			"dates": "February 2016",
			"url": "https://www.udacity.com/course/ud304"
		},
	    {   "title": "HTML5 Canvas和CSS布局，动画",
			"school": "优达学城",
			"dates": "February 2016",
			"url": "https://www.udacity.com/course/ud304"
		},
		{   "title": "面向对象的Javascript编程",
			"school": "优达学城",
			"dates": "February 2017",
			"url": "https://www.udacity.com/course/ud015"
		},
		{   "title": "jQuery库和Ajax使用",
			"school": "优达学城",
			"dates": "February 2017",
			"url": "https://www.udacity.com/course/ud015"
		},
		{   "title": "响应式网站设计和响应式图片",
			"school": "优达学城",
			"dates": "March 2017",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "title": "网站性能优化和关键渲染路径",
			"school": "优达学城",
			"dates": "March 2017",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "title": "浏览器渲染优化以及如何使用Chrome的Timeline进行卡顿检测和优化",
			"school": "优达学城",
			"dates": "March 2017",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "title": "JavaScript设计模式,MVC,MVVM,MVP,MV*,框架组织库",
			"school": "优达学城",
			"dates": "March 2017",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "title": "JavaScript测试Jasmine",
			"school": "优达学城",
			"dates": "March 2017",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "title": "网站工具和自动化,npm,Bower,Grunt,Gulp,Json-server,Jasmine,Yeoman",
			"school": "Coursera",
			"dates": "April 2017",
			"url": "https://www.coursera.org/learn/angular-js"
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
			});
		}
	
		if (this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			this.onlineCourses.forEach(function(onlineCourse) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
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
			"description": ""
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
			});
		}
	}
};

work.display();


/*项目经验*/
var projects = {
	"projects": [{
		"title": "个人作品集网站",
		"dates": "2 2017",
		"description": "开发了一个响应式网站，可以展示每一个宠物的图片，描述，以及链接。",
		"images": ["../frontend-nanodegree-Interactive-Resume/images/portfolio.png"],
		"url": "https://luocooldong.github.io/frontend-nanodegree-Portfolio/"
	},{
		"title": "大众点评网站",
		"dates": "1 2016",
		"description": "大众点评网站",
		"images": ["../frontend-nanodegree-Interactive-Resume/images/dainping.png"],
		"url": "https://www.coursera.org/learn/angular-js"
	},{
		"title": "青蛙过河项目克隆",
		"dates": "3 2017",
		"description": "青蛙过河项目克隆。",
		"images": ["../frontend-nanodegree-Interactive-Resume/images/frogger.png"],
		"url": "https://luocooldong.github.io/frontend-nanodegree-Arcade-Game-Clone/"
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