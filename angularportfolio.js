var app=angular.module("myModule",[]);
app.controller("myController",function($scope){
    $scope.id="0";
    $scope.info = [{
        id:1,
        name:"Sonali Bhalla",
        profession:"Student",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"▪	Library Management System (June 2018): The project was to make a library management System. This code was written in Java language and it was linked to My sql. It’s for students and staff to search, issues, return or get to know about book from library. New student can create his/her new member account.",
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
                class:"10th",
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
    },{
    id:2,
    name:"Sonal Bhalla",
    profession:"Student",
    place:"Ludhiana Pubjab India",
    email:"sonalibhalla98@gmail.com",
    phoneno:"956945786",
    Skills:["web developer","photography","Java"],
    Languages:["English","Hindi","Punjabi"],
    Projects:[{
        field:"FRONT END DEVELOPER",
        timeStart:"NOV-2019",
        timeEnd:"Current",
        descrition:"",
    },{
        field:"REACT",
        timeStart:"JUL-2019",
        timeEnd:"AUG-2019",
        descrition:"",
    },
    {
        field:"JAVA",
        timeStart:"JUN-2018",
        timeEnd:"JUL-2018",
        descrition:"",
    }
    ],
    Education:[
        {
            school:"Lovely Professional University",
            time:"2017-2021",
            class:"10th",
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
},
    {
        id:3,
        name:"Shareef",
        profession:"Student",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java","photoshop"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"10th",
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
    },
    {

        id:4,
        name:"Yudhvir",
        profession:"Student",
        place:"Ludhiana Pubjab India",
        email:"sonalibhalla98@gmail.com",
        phoneno:"956945786",
        Skills:["web developer","photography","Java","photoshop"],
        Languages:["English","Hindi","Punjabi"],
        Projects:[{
            field:"FRONT END DEVELOPER",
            timeStart:"NOV-2019",
            timeEnd:"Current",
            descrition:"",
        },{
            field:"REACT",
            timeStart:"JUL-2019",
            timeEnd:"AUG-2019",
            descrition:"",
        },
        {
            field:"JAVA",
            timeStart:"JUN-2018",
            timeEnd:"JUL-2018",
            descrition:"",
        }
        ],
        Education:[
            {
                school:"Lovely Professional University",
                time:"2017-2021",
                class:"10th",
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
    }



    ]


    $scope.allinfo=[{
        name:"Sonali Bhalla",
        profession:"Student / Web Developer",
    },{
        name:"Yudhvir",
        profession:"Student / Web Developer", 
    },{
        name:"Saeef",
        profession:"Student / Web Developer",  
    },
    {
        name:"Sonai",
        profession:"Student / Web Developer",
    },{
        name:"Yudhvi",
        profession:"Student / Web Developer", 
    },{
        name:"Shaeef",
        profession:"Student / Web Developer",  
    },
    {
        name:"Sonvi",
        profession:"Student / Web Developer",
    },{
        name:"Yudhir",
        profession:"Student / Web Developer", 
    },{
        name:"Shareef",
        profession:"Student / Web Developer",  
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

    $scope.d=function(target){
        $(".individualportfolio").toggle();
        $(".allportfolio").toggle();
       $scope.id="Sonali Bhalla";
    }
})