const mongoose = require("mongoose");
const db = require("../models");
const URI = require("../config/index")

//mongoose.connect("mongodb://localhost/assignment", {
mongoose.connect(URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => console.log('Database Connected!'))
.catch(err => {
console.log(`DataBase Connection Error: ${err.message}`);
});;

mongoose.connect(process.env.MONGODB_URI || URI);
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/assignment");

const projects = [
    {
        clip_path: "polygon(100% 56%, 90% 75%, 96% 90%, 65% 100%, 0 100%, 0 0, 100% 0); -webkit-clip-path: polygon(100% 56%, 90% 75%, 96% 90%, 65% 100%, 0 100%, 0 0, 100% 0)",
        project: "PROJECT01",
        title: "Code Refactor",
        date: "15/02/2020",
        technology: "CSS and HTML",
        summary: "Take existing Html and CSS project files and refractor it.",
        website: "https://github.com/Ryuku72/01CodeRefactor",
        readme: "https://github.com/Ryuku72/01CodeRefactor/blob/master/README.md",
        github: "https://ryuku72.github.io/01CodeRefactor/",
    },
    {
        clip_path: "polygon(35% 100%, 17% 100%, 0 100%, 0 0, 79% 0, 90% 13%, 100% 0, 100% 100%); -webkit-clip-path: polygon(35% 100%, 17% 100%, 0 100%, 0 0, 79% 0, 90% 13%, 100% 0, 100% 100%)",
        project: "PROJECT02",
        title: "Responsive Portfolio",
        date: "23/02/2020",
        technology: "Bootstrap",
        summary: "Make a responsive profile page.",
        website: "https://github.com/Ryuku72/02ResponsivePortfolio",
        readme: "https://github.com/Ryuku72/02ResponsivePortfolio/blob/master/README.md",
        github: "https://ryuku72.github.io/02ResponsivePortfolio/",
    },
    {
        clip_path: "polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 11% 76%, 0 53%, 0 0); -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 11% 76%, 0 53%, 0 0)",
        project: "PROJECT03",
        title: "Password Generator",
        date: "02/03/2020",
        technology: "Javascript",
        summary: "Use prompts, alerts and confirm windows to create a unique password.",
        website: "https://github.com/Ryuku72/03PasswordGenerator/",
        readme: "https://github.com/Ryuku72/03PasswordGenerator/blob/master/README.md",
        github: "https://ryuku72.github.io/03PasswordGenerator/",
    },
    {
        clip_path: "polygon(0 100%, 0 0, 90% 0, 87% 11%, 97% 15%, 94% 29%, 100% 43%, 100% 100%); -webkit-clip-path: polygon(0 100%, 0 0, 90% 0, 87% 11%, 97% 15%, 94% 29%, 100% 43%, 100% 100%)",
        project: "PROJECT04",
        title: "Code Quiz",
        date: "11/03/2020",
        technology: "DOM Manipulation",
        summary: "Use button values, attributes and innerHTML to create a Quiz.",
        website: "https://github.com/Ryuku72/04CodeQuiz/",
        readme: "https://github.com/Ryuku72/04CodeQuiz/blob/master/README.md",
        github: "https://ryuku72.github.io/04CodeQuiz/",
    },
    {
        clip_path: "polygon(35% 100%, 17% 100%, 0 73%, 0 0, 79% 0, 90% 13%, 100% 0, 100% 100%);-webkit-clip-path: polygon(35% 100%, 17% 100%, 0 73%, 0 0, 79% 0, 90% 13%, 100% 0, 100% 100%)",
        project: "PROJECT05",
        title: "WorkDay Scheduler",
        date: "18/03/2020",
        technology: "JQuery and Local Storage",
        summary: "A web application that records a patron's assigned task into their local storage.",
        website: "https://github.com/Ryuku72/05WorkDayScheduler/",
        readme: "https://github.com/Ryuku72/05WorkDayScheduler/blob/master/README.md",
        github: "https://ryuku72.github.io/05WorkDayScheduler/",
    },
    {
        clip_path: "polygon(50% 0%, 100% 0, 100% 77%, 72% 100%, 49% 83%, 31% 100%, 15% 100%, 8% 100%, 0 100%, 0 0);-webkit-clip-path:polygon(50% 0%, 100% 0, 100% 77%, 72% 100%, 49% 83%, 31% 100%, 15% 100%, 8% 100%, 0 100%, 0 0);",
        project: "PROJECT06",
        title: "Weather Dashboard",
        date: "26/03/2020",
        technology: "API and AJAX calls",
        summary: "Append weather information according to the input feild.",
        website: "https://github.com/Ryuku72/06WeatherDashboard/",
        readme: "https://github.com/Ryuku72/06WeatherDashboard/blob/master/README.md",
        github: "https://ryuku72.github.io/06WeatherDashboard/",
    },
    {
        clip_path: "polygon(23% 22%, 35% 0, 100% 0, 100% 100%, 21% 100%, 11% 72%, 0 100%, 0 0, 11% 0); -webkit-clip-path: polygon(23% 22%, 35% 0, 100% 0, 100% 100%, 21% 100%, 11% 72%, 0 100%, 0 0, 11% 0)",
        project: "PROJECT07",
        title: "Group Project: CoronaCrash",
        date: "31/03/2020",
        technology: "Teamwork, CSS Frameworks and Server Side Library",
        summary: "In a team consisting of three people, make a web application that uses at least three APIs,a new CSS Framework and server-side library to make an unique Web Application.",
        website: "https://maxtsimpson.github.io/coronaCrash/index/",
        readme: "https://github.com/maxtsimpson/coronaCrash/blob/master/README.md",
        github: "https://github.com/maxtsimpson/coronaCrash/",
    },
    {
        clip_path: "polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 60%);  -webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 60%)",
        project: "PROJECT08",
        title: "Professional Materials",
        date: "14/04/2020",
        technology: "CSS Grids and Modals",
        summary: "Update PROJECT02: Responsive Portfolio with pop ups, animations and CSS clip-paths.",
        website: "https://ryuku72.github.io/08ProfessionalMaterials/",
        readme: "https://github.com/Ryuku72/08ProfessionalMaterials/blob/master/README.md",
        github: "https://github.com/Ryuku72/08ProfessionalMaterials/",
    },
    {
        clip_path: "polygon(100% 100%, 57% 100%, 31% 100%, 21% 75%, 14% 91%, 8% 84%, 0 100%, 0 0, 100% 0);-webkit-clip-path:polygon(100% 100%, 57% 100%, 31% 100%, 21% 75%, 14% 91%, 8% 84%, 0 100%, 0 0, 100% 0)",
        project: "PROJECT09",
        title: "Readme Generator",
        date: "22/04/2020",
        technology: "Node.JS, NPM Packages and ES6",
        summary: "Use Inquirer to make a Readme Generator CLI.",
        readme: "https://github.com/Ryuku72/09ReadmeGenerator/blob/master/README.md",
        github: "https://github.com/Ryuku72/09ReadmeGenerator",
        video: "https://www.youtube.com/watch?v=joEQlJG0Eyw"
    },
    {
        clip_path: "polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0);-webkit-clip-path:polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0)",
        project: "PROJECT10",
        title: "Employee Summary",
        date: "01/05/2020",
        technology: "Classes, Inheritance, Constructors and Tests",
        summary: "Build a workplace html generator with Inquirer.",
        website: "https://ryuku72.github.io/10EmployeeSummary/",
        readme: "https://github.com/Ryuku72/10EmployeeSummary/blob/master/README.md",
        github: "https://github.com/Ryuku72/09ReadmeGenerator",
        video: "https://www.youtube.com/watch?v=FWMDHz_RQfg"
    },
    {
        clip_path: "polygon(100% 44%, 91% 56%, 94% 77%, 82% 79%, 88% 100%, 0 100%, 0 0, 100% 0);-webkit-clip-path:polygon(100% 44%, 91% 56%, 94% 77%, 82% 79%, 88% 100%, 0 100%, 0 0, 100% 0)",
        project: "PROJECT11",
        title: "Note Taker",
        date: "09/05/2020",
        technology: "Heroku and Routing",
        summary: "Create, Edit and Delete notes on a Heroku App database.",
        website: "https://fathomless-ocean-28827.herokuapp.com/notes",
        readme: "https://github.com/Ryuku72/11NoteTaker/blob/master/README.md",
        github: "https://ryuku72.github.io/10EmployeeSummary/",
        video: "https://www.youtube.com/watch?v=FMc9-VJT15g"
    },
    {
        clip_path: "polygon(100% 100%, 92% 88%, 85% 65%, 79% 89%, 71% 79%, 60% 100%, 0 100%, 0 0, 100% 0);-webkit-clip-path:polygon(100% 100%, 92% 88%, 85% 65%, 79% 89%, 71% 79%, 60% 100%, 0 100%, 0 0, 100% 0)",
        project: "PROJECT12",
        title: "Employee Tracker",
        date: "16/05/2020",
        technology: "MySQL, CRUD and ACID",
        summary: "Build an Employee CLI that allows you to create, read, update and delete information.",
        readme: "https://github.com/Ryuku72/12EmployeeTracker/blob/master/README.md",
        github: "https://github.com/Ryuku72/12EmployeeTracker",
        video: "https://www.youtube.com/watch?v=JosM2APXioY"
    },
    {
        clip_path: "polygon(100% 61%, 98% 80%, 90% 100%, 65% 100%, 0 100%, 9% 79%, 0 59%, 0 0, 100% 0);-webkit-clip-path:polygon(100% 61%, 98% 80%, 90% 100%, 65% 100%, 0 100%, 9% 79%, 0 59%, 0 0, 100% 0)",
        project: "PROJECT13",
        title: "Oh!Bad Burger",
        date: "25/05/2020",
        technology: "Handlebars",
        summary: "A burger app that takes customizable orders.",
        website: "https://aqueous-wildwood-59065.herokuapp.com/",
        readme: "https://github.com/Ryuku72/13OhBadBurger/blob/master/README.md",
        github: "https://github.com/Ryuku72/13OhBadBurger",
    },
    {
        clip_path: "polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0);-webkit-clip-path:polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0)",
        project: "PROJECT14",
        title: "Reverse Engineering Code",
        date: "12/06/2020",
        technology: "Authentication",
        summary: "Reverse engineer and document a passport authentication app.",
        other: "https://drive.google.com/file/d/1iWOxhJ_shnkFwuyXOPgIC12dkcDRfnbK/view?usp=sharing",
        github: "https://github.com/Ryuku72/14ReverseEngineering",
    },
    {
        clip_path: "polygon(100% 0, 100% 76%, 93% 100%, 0 100%, 4% 89%, 0 73%, 0 55%, 0 34%, 0 0);-webkit-clip-path:polygon(100% 0, 100% 76%, 93% 100%, 0 100%, 4% 89%, 0 73%, 0 55%, 0 34%, 0 0)",
        project: "PROJECT15",
        title: "Group Project: BookMarkr",
        date: "08/06/2020",
        technology: "Oauth, Tailwind and Sequelize",
        summary: "In team of 4 create a unique web app that uses a CSS framework other than bootstrap, Authentication and a Database.",
        website: "http://shrouded-shelf-71046.herokuapp.com/",
        readme: "https://github.com/Ryuku72/15Bookmarkr/blob/master/README.md",
        github: "https://github.com/Ryuku72/15Bookmarkr",
    },
    {
        clip_path: "polygon(100% 0, 100% 76%, 93% 100%, 0 100%, 0 29%, 0 0, 8% 0, 16% 12%, 26% 0); background-image: url(./public/img/week16.jpg);-webkit-clip-path:polygon(100% 0, 100% 76%, 93% 100%, 0 100%, 0 29%, 0 0, 8% 0, 16% 12%, 26% 0)",
        project: "PROJECT16",
        title: "Portfolio Update",
        date: "18/06/2020",
        technology: "Netlify and CSS flexbox",
        summary: "Update my PROJECT08 with Flexbox and Netlify.",
        website: "https://joshuakb.netlify.app/",
        readme: "https://github.com/Ryuku72/16Portfolio/edit/master/README.md",
        github: "https://github.com/Ryuku72/16Portfolio",
    },
    {
        clip_path: "polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0);-webkit-clip-path:polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0)",
        project: "PROJECT17",
        title: "WorkOut Tracker",
        date: "28/06/2020",
        technology: "MongoDb and Mongoose",
        summary: "Track a workout schedule using MongoDb",
        website: "https://homew17.herokuapp.com/",
        readme: "https://github.com/Ryuku72/17WorkOutTracker/edit/master/README.md",
        github: "https://github.com/Ryuku72/17WorkOutTracker",
    },
    {
        clip_path: "polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0);-webkit-clip-path:polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0)",
        project: "PROJECT18",
        title: "Budget Tracker",
        date: "28/06/2020",
        technology: "MongoDb and Mongoose",
        summary: "Track your budget on or offline",
        website: "https://jkbbudgettrack.herokuapp.com/",
        readme: "https://github.com/Ryuku72/18BudgetTrackers/edit/master/README.md",
        github: "https://github.com/Ryuku72/18BudgetTrackers/",
    },
    {
        clip_path: "polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0);-webkit-clip-path:polygon(100% 0, 100% 100%, 77% 100%, 57% 89%, 38% 100%, 0 100%, 0 0)",
        project: "PROJECT19",
        title: "Employee Directory",
        date: "09/07/2020",
        technology: "React.JS",
        summary: "Updated version of Project 12: Employee Tracker using React.JS ",
        website: "https://jkbedirect.herokuapp.com/",
        readme: "https://github.com/Ryuku72/19E-Directedit/master/README.md",
        github: "https://github.com/Ryuku72/19E-Direct",
    },
]

db.assignment.find({})
    .then(() => db.assignment.collection.insertMany(projects))
    .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);   
    })
    .catch(err => {
    console.error(err);
    process.exit(1);
});
