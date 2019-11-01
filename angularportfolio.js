var app=angular.module("myModule",[]);
app.controller("myController",function($scope){
    $scope.id="0";
    $scope.info = [{
        id:1,
        name:"Sonali Bhalla",
        profession:"Student",
        img:"./images/sonali.jpeg",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Portfolio project using various technlogies html, css ,javascript , bootstrap and angular js where we can visit and see others profile and to see others progress and compare ourselves with others. I  are currently working on it and soon it will get complete.",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Cryptowiki : This is website which is made using React Environment. In this Ajax calls are used to print the information of different cryptocurrency information according to request made by user. The website was designed using Bootstrap and Reactstrap ",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Library Management System : The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
        },
        {
            field:"PYTHON",
            timeStart:"APR-2018",
            timeEnd:"MAY-2018",
            descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"G.M.T Public School",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"G.M.T Public School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com/sonali.bhalla.94",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://www.linkedin.com/in/sonalibhalla/",
    },{
    id:2,
    name:"Devesh Chaudhary",
    profession:"Student",
    img:"./images/dev.jpeg",
    place:"Ludhiana Pubjab India",
    email:"devesh.chaudhary.30994@gmail.com",
    phoneno:"9729972895",
    Skills:["web developer","photography"],
    Languages:["English","Hindi"],
    Projects:[{
        field:"FRONT END DEVELOPER",
        timeStart:"NOV-2019",
        timeEnd:"Current",
        descrition:"Social networking website for friends.",
    },{
        field:"PYTHON",
        timeStart:"JUL-2019",
        timeEnd:"AUG-2019",
        descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
    },
    {
        field:"C++",
        timeStart:"JUN-2018",
        timeEnd:"JUL-2018",
        descrition:"Sname and Ladder game.",
    }
    ],
    Education:[
        {
            school:"Lovely Professional University",
            time:"2017-2021",
            class:"B.Tech (CSE)",
        },
        {
            school:"jeevan jyoti public school",
            time:"2016-2017",
            class:"12th",
        },
        {
           
            school:"jeevan jyoti public schoo",
            time:"2014-2015",
            class:"10th",

        }
    ],
    linkinstagram:"https://www.instagram.com",
    linkfacebook:"https://www.facebook.com",
    linksnapchat:"https://www.snapchat.com",
    linkslinkedin :"ttps://www.linkedin.com/in/devesh-chaudhary-b21154148/",
},
    {
        id:3,
        name:"Mohd Sharif",
        profession:"Student",
        img:"./images/sharif.jpg",
        place:"Ludhiana Pubjab India",
        email:"telisharif8@gmail.com",
        phoneno:"8058320376",
        Skills:["web developer","photography","photoshop"],
        Languages:["English","Hindi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Basically guiding pateins to know about the hospital and their facilities",
        },{
            field:"Kotlin and XML",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Echo-Music Player : Local media player on android phone",
        },
        {
            field:"C++",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"LPU finder : C++ , keeps record of student",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"Bhartiya",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"Shri Raghunath School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"Instagram.com/mohd.shharif",
        linkfacebook:"https://Facebook.com/mohdsharif",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://LinkedIn.com/mohdsharifteli",
    },
    {

        id:4,
        name:"Yudhvir",
        profession:"Student",
        img:"./images/yudhvir.jpg",
        place:"Pune, Maharashtra",
        email:"yudhviryadav57@gmail.com",
        phoneno:"7020517078",
        Skills:["web developer","Ardino","Python","C++"],
        Languages:["English","Hindi","Marathi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Shopping website",
        },{
            field:"IOT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Mini robo attack",
        },
        {
            field:"IOT",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Water level sensor",
        },
        {
            field:"MBC",
            timeStart:"MAR-2019",
            timeEnd:"APR-2019",
            descrition:"Home Automation",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"Kendriya Vidyalaya 9BRD no. 3 Pune, Maharashtra",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"Kendriya Vidyalaya 9BRD no. 3 Pune, Maharashtra",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"http://linkedin.com/in/yudhvier",
    },
    {
        id:5,
        name:"Sona",
        profession:"Student",
        img:"./images/sona.jpg",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Portfolio project using various technlogies html, css ,javascript , bootstrap and angular js where we can visit and see others profile and to see others progress and compare ourselves with others. I  are currently working on it and soon it will get complete.",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Cryptowiki : This is website which is made using React Environment. In this Ajax calls are used to print the information of different cryptocurrency information according to request made by user. The website was designed using Bootstrap and Reactstrap ",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Library Management System : The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
        },
        {
            field:"PYTHON",
            timeStart:"APR-2018",
            timeEnd:"MAY-2018",
            descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"G.M.T Public School",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"G.M.T Public School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com/sonali.bhalla.94",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://www.linkedin.com/in/sonalibhalla/",
    },
    {
        id:6,
        name:"Son",
        profession:"Student",
        img:"./images/son.jpeg",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Portfolio project using various technlogies html, css ,javascript , bootstrap and angular js where we can visit and see others profile and to see others progress and compare ourselves with others. I  are currently working on it and soon it will get complete.",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Cryptowiki : This is website which is made using React Environment. In this Ajax calls are used to print the information of different cryptocurrency information according to request made by user. The website was designed using Bootstrap and Reactstrap ",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Library Management System : The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
        },
        {
            field:"PYTHON",
            timeStart:"APR-2018",
            timeEnd:"MAY-2018",
            descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"G.M.T Public School",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"G.M.T Public School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com/sonali.bhalla.94",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://www.linkedin.com/in/sonalibhalla/",
    },
    {
        id:7,
        name:"Radhika",
        profession:"Student",
        img:"./images/sonali.jpeg",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Portfolio project using various technlogies html, css ,javascript , bootstrap and angular js where we can visit and see others profile and to see others progress and compare ourselves with others. I  are currently working on it and soon it will get complete.",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Cryptowiki : This is website which is made using React Environment. In this Ajax calls are used to print the information of different cryptocurrency information according to request made by user. The website was designed using Bootstrap and Reactstrap ",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Library Management System : The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
        },
        {
            field:"PYTHON",
            timeStart:"APR-2018",
            timeEnd:"MAY-2018",
            descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"G.M.T Public School",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"G.M.T Public School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com/sonali.bhalla.94",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://www.linkedin.com/in/sonalibhalla/",
    }
    ,
    {
        id:8,
        name:"Bhumika",
        profession:"Student",
        img:"./images/bumika.jpg",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Portfolio project using various technlogies html, css ,javascript , bootstrap and angular js where we can visit and see others profile and to see others progress and compare ourselves with others. I  are currently working on it and soon it will get complete.",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Cryptowiki : This is website which is made using React Environment. In this Ajax calls are used to print the information of different cryptocurrency information according to request made by user. The website was designed using Bootstrap and Reactstrap ",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Library Management System : The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
        },
        {
            field:"PYTHON",
            timeStart:"APR-2018",
            timeEnd:"MAY-2018",
            descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"G.M.T Public School",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"G.M.T Public School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com/sonali.bhalla.94",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://www.linkedin.com/in/sonalibhalla/",
    }
    ,
    {
        id:9,
        name:"Bhumi",
        profession:"Student",
        img:"./images/sonali.jpeg",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"Portfolio project using various technlogies html, css ,javascript , bootstrap and angular js where we can visit and see others profile and to see others progress and compare ourselves with others. I  are currently working on it and soon it will get complete.",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"Cryptowiki : This is website which is made using React Environment. In this Ajax calls are used to print the information of different cryptocurrency information according to request made by user. The website was designed using Bootstrap and Reactstrap ",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"Library Management System : The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
        },
        {
            field:"PYTHON",
            timeStart:"APR-2018",
            timeEnd:"MAY-2018",
            descrition:"Hangman Game :Hangman is the game built using python and its graphics. It is basically a picture recognizing game in which a random picture of technology came and user get three attempts to recognize it.",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"B.Tech (CSE)",
            },
            {
                school:"G.M.T Public School",
                time:"2016-2017",
                class:"12th",
            },
            {
               
                school:"G.M.T Public School",
                time:"2014-2015",
                class:"10th",

            }
        ],
        linkinstagram:"https://www.instagram.com",
        linkfacebook:"https://www.facebook.com/sonali.bhalla.94",
        linksnapchat:"https://www.snapchat.com",
        linkslinkedin :"https://www.linkedin.com/in/sonalibhalla/",
    }




    ]


    $scope.allinfo=[{
        name:"Sonali Bhalla",
        profession:"Student / Web Developer",
        img:"./images/sonali.jpeg"
    },{
        name:"Yudhvir",
        profession:"Student / Web Developer",
        img:"./images/yudhvir.jpg" 
    },{
        name:"Mohd Sharif",
        profession:"Student / Web Developer",  
        img:"./images/sharif.jpg"
    },
    {
        name:"Devesh Chaudhary",
        profession:"Student / Web Developer",
        img:"./images/dev.jpeg"
    },{
        name:"Sona",
        profession:"Student / Web Developer",
        img:"./images/sona.jpg" 
    },
    {
        name:"Son",
        profession:"Student / Web Developer",
        img:"./images/son.jpeg"
    },
    {
        name:"Radhika",
        profession:"Student / Web Developer", 
        img:"./images/sonali.jpeg" 
    },{
        name:"Bhumika",
        profession:"Student / Web Developer", 
        img:"./images/bumika.jpg"
    },{
        name:"Bhumi",
        profession:"Student / Web Developer",  
        img:"./images/sonali.jpeg"
    }]

   
    var flag=false;
    $scope.display=function(target){
        $(".individualportfolio").toggle();
        $(".allportfolio").toggle();
        if(flag){
            flag=false;
        }
        else{
        $scope.id=target.currentTarget.id;
        console.log(target.currentTarget.id);
            flag=true;
        }
    }

    $scope.d=function(){
        $(".individualportfolio").show();
        $(".allportfolio").hide();
       $scope.id="Sonali Bhalla";
    }
})