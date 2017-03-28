 
/* activate localStorage */
var localStore = window.localStorage;


/* surveyQuestion Model (This time, written in "JSON" format to interface more cleanly with Mustache) */
/* This is used to input the questions you would like to ask in your experience sampling questionnaire*/
var weeklyQuestions = [
               /*0*/
               {
               variableName: "attitude1",
               questionPrompt: "hallo" + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very good"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very bad"}
                        ]
               },
               
               /*1*/
               {
               variableName: "attitude2",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very useful"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very worthless"}
                        ]
               },

               /*2*/
               {
               variableName: "attitude3",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very beneficial"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very harmful"}
                        ]
               },

               /*3*/
               {
               variableName: "attitude4",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very pleasant"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very unpleasant"}
                        ]
               },

               /*4*/
               {
               variableName: "automaticity1",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I do without having to consciously remember.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*5*/
               {
               variableName: "automaticity2",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I do automatically.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*6*/
               {
               variableName: "automaticity3",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I do without thinking.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*7*/
               {
               variableName: "automaticity4",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I start doing before I realize I'm doing it.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*8*/
               {
               variableName: "bf",
               questionPrompt: "How many times did you brush your teeth " + localStore.personalText + " in the last 7 days?",
               },

                /*9*/
               {
               variableName: "submit",
               questionPrompt: "Thanks! This is the end of the weekly survey. Please click 'Submit' to submit your answers. If you want to modify your answers, click 'Back'.",
               }, 
               ];

/*Reminder and in-situ suggestions*/
var messagePage = [
               
               /*10*/
               {
               variableName: "reminder",
               questionPrompt: "Brushing teeth twice a day is recommended by all dentists and is important for your oral health. Please keep learning this new habit!",
               },

               /*11*/
               {
               variableName: "in-situ suggestion morning",
               questionPrompt: "Brushing teeth twice a day is recommended by all dentists and is important for your oral health. Please keep learning this new habit and don't forget to brush your teeth this morning!",
               },

               /*12*/
               {
               variableName: "in-situ suggestion evening",
               questionPrompt: "Brushing teeth twice a day is recommended by all dentists and is important for your oral health. Please keep learning this new habit and don't forget to brush your teeth before sleep today!",
               },
               ];

/*Questions to set up participant notifications so that notifications are customized to participant's schedule*/                
var participantSetup = [
              /*-34*/
              {
              variableName: "participant_id",
              questionPrompt: "Welcome! Please enter your 3-digit participant ID:",
              },

               /*-33*/
              {
              variableName: "age",
              questionPrompt: "Your age:",
              },

               /*-32*/
              {
              variableName: "gender",
              questionPrompt: "Your gender:",
              minResponse: 0,
              maxResponse: 1,
              labels: [
                        {label: "Male"},
                        {label: "Female"},
                        ]
               },

              /*-31*/
              {variableName: "phone",
              questionPrompt: "Model of your smartphone (e.g., iPhone 6s, Samsung Note 5):",
              },

              /*-30*/
              {variableName: "OS",
              questionPrompt: "Operation system of your smartphone (e.g, iOS 9.1, Android 6.0):",
              },

              /*-29*/
              {variableName: "brushing_time",
              questionPrompt: "I usually only brush my teeth in the...",
              minResponse: 0,
              maxResponse: 1,
              labels: [
                        {label: "Morning"},
                        {label: "Evening"},
                        ]
               },

              /*-28*/
              {variableName: "brushing_before",
              questionPrompt: "Did you have the habit of brushing teeth twice a day in the last 5 years?",
              minResponse: 0,
              maxResponse: 2,
              labels: [
                        {label: "No, I don't"},
                        {label: "Yes, I had the habit briefly"},
                        {label: "Yes, I had the habit for quite some time"},
                        ]
               },

              /*-27*/
              {variableName: "wakeup_weekday",
              questionPrompt: "When do you usually wake up on weekdays (e.g., 8:30)?",
              },

               /*-26*/
              {variableName: "sleep_weekday",
              questionPrompt: "When do you usually go to sleep on weekdays (e.g., 23:00)?",
              },

               /*-25*/
              {variableName: "wakeup_weekend",
              questionPrompt: "When do you usually wake up in the weekend (e.g., 10:00)?",
              },

               /*-24*/
              {variableName: "sleep_weekend",
              questionPrompt: "When do you usually go to sleep in the weekend (e.g., 0:00)?",
              },

               /*-23*/
               {
               variableName: "attitude1",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very good"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very bad"}
                        ]
               },
               
               /*-22*/
               {
               variableName: "attitude2",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very useful"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very worthless"}
                        ]
               },

               /*-21*/
               {
               variableName: "attitude3",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very beneficial"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very harmful"}
                        ]
               },

               /*-20*/
               {
               variableName: "attitude4",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is...",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very pleasant"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very unpleasant"}
                        ]
               },

               /*-19*/
               {
               variableName: "automaticity1",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I do without having to consciously remember.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*-18*/
               {
               variableName: "automaticity2",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I do automatically.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*-17*/
               {
               variableName: "automaticity3",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I do without thinking.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*-16*/
               {
               variableName: "automaticity4",
               questionPrompt: "Brushing my teeth " + localStore.personalText + " is something I start doing before I realize I'm doing it.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Strongly agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4 Neutral"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Strongly disagree"}
                        ]
               },

               /*-15*/
               {
               variableName: "tsc_intro",
               questionPrompt: "For the last 13 questions, please indicate how much the statement on each page reflects how you typically are.",
               },

               /*-14*/
               {
               variableName: "tsc1",
               questionPrompt: "I am good at resisting temptation.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-13*/
               {
               variableName: "tsc2",
               questionPrompt: "I have a hard time breaking bad habits.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-12*/
               {
               variableName: "tsc3",
               questionPrompt: "I am lazy.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-11*/
               {
               variableName: "tsc4",
               questionPrompt: "I say inappropriate things.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-10*/
               {
               variableName: "tsc5",
               questionPrompt: "I do certain things that are bad for me, if they are fun.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-9*/
               {
               variableName: "tsc6",
               questionPrompt: "I refuse things that are bad for me.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-8*/
               {
               variableName: "tsc7",
               questionPrompt: "I wish I had more self-discipline.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-7*/
               {
               variableName: "tsc8",
               questionPrompt: "People would say that I have iron self-discipline.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-6*/
               {
               variableName: "tsc9",
               questionPrompt: "Pleasure and fun sometimes keep me from getting work done.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-5*/
               {
               variableName: "tsc10",
               questionPrompt: "I have trouble concentrating.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-4*/
               {
               variableName: "tsc11",
               questionPrompt: "I am able to work effectively toward long-term goals.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-3*/
               {
               variableName: "tsc12",
               questionPrompt: "Sometimes I cannot stop myself from doing something, even if I know it is wrong.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*-2*/
               {
               variableName: "tsc13",
               questionPrompt: "I often act without thinking through all the alternatives.",
               minResponse: 1,
               maxResponse: 5,
               labels: [
                        {label: "5 Very much"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

              /*-1*/
              {
              variableName: "submit",
              questionPrompt: "Thanks! Now we have all the information we need. Please click 'Submit' to submit your answers. If you want to modify your answers, click 'Back'.",
              }, 

              ];


/*These are the messages that are displayed at the end of the questionnaire*/
var lastPage = [
        /*input your last-page message*/
                /*message for normal homepage*/
                {
                message: "Now you don't need to do anything with the app. Please wait for your next weekly survey."
                },
                /*message after first two weekly surveys*/
                {
                message: "Thanks for answering the questions. See you at next survey!"
                },
                /*message after the third weekly surveys*/
                {
                message: "Thanks for answering the questions. In the last 7 days in the study, your behavior will no longer be monitored by the sensor. We hope that you can keep brushing your teeth twice every day!"
                },
                /*message after the last weekly surveys*/
                {
                message: "Thanks for answering the questions. This is the end of the study. We hope that you can keep brushing your teeth twice every day!"
                },
                /*message when the study is over*/
                {
                message: "The study is over. Thanks for your participation. We hope that you can keep brushing your teeth twice every day!"
                },
                ];


/*Populate the view with data from surveyQuestion model*/
// Making mustache templates
var questionTmpl = "<p>{{questionPrompt}}</p><ul>{{{buttons}}}</ul><br><button type='submit' class='next' value='Enter'>Next</button><br><button class='back' value='Back'>Back</button>";
var introTmpl = "<p>{{questionPrompt}}</p><br><button type='submit' class='next' value='Enter'>Next</button><br><button class='back' value='Back'>Back</button>";
var questionFirstTmpl = "<p>{{questionPrompt}}</p><ul>{{{buttons}}}</ul><br><button type='submit' class='first' value='Enter'>Next</button>";
var questionLastTmpl = "<p>{{questionPrompt}}</p><br><button type='submit' class='submit' value='Enter'>Submit</button><br><button class='back' value='Back'>Back</button>";
var questionMessageTmpl = "<p>{{questionPrompt}}</p><br><button type='submit' class='start' value='Enter'>Got it!</button>";
var buttonTmpl_blue = "<li><button id='{{id}}' class='options_blue' value='{{value}}'>{{label}}</button></li>";
var buttonTmpl_green = "<li><button id='{{id}}' class='options_green' value='{{value}}'>{{label}}</button></li>";
var textTmpl = "<li><textarea cols=50 rows=1 id='{{id}}'></textarea></li>";
var lastPageTmpl = "<h3>{{message}}</h3>";

var uniqueRecord;
//the next three variables are added for allowing users to go back and forth through questions
var newCount;
var lastCount;
var response;

//This uniqueKey is for iOS version
//the uniqueKey tags the set of responses from one questionnaire so that the compliance script can determine whether not a participant
//has completed a sufficient number of questionnaires for the day.
//The unique key also helps organize the data when preparing for data analysis
//uncomment next line if developing for iOS
//var uniqueKey;  


var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("pause", this.onPause, false);

},

//these functions tell the app what to do at different stages of running
onDeviceReady: function() {
    // Enable background mode
    cordova.plugins.backgroundMode.setDefaults({ text:''});
    cordova.plugins.backgroundMode.enable();
    // Randonly assign the user to a condition
    if (!localStore.condition || localStore.condition == "undefined") {
          localStore["condition"] = 0;
    }
    
    app.init();
},

onResume: function() {
    app.sampleParticipant();
},

onPause: function() {app.pauseEvents();},



//this function loop through the keys in localStore to find the key that matches a string (a question name or a timestamp). Return the postion of the key
findKey: function(name, key, underline) {
    var q = NaN;
    //find the occurrence
    for (var p = 0; p < localStore.length; p++) {
            if (localStore.key(p).indexOf(key + underline + name) != -1){
                    q = p;
                    break;
            }
    }   
    return q;
},

//this function check if inputs for open questions are valid
checkValid: function(value, index) {
        if (index == -34) {
                if (isNaN(Number(value)) == false && value.length == 3) {return true;}
        }
        else if (index == -33) {
                if (isNaN(Number(value)) == false && Number(value) <= 100 && Number(value) >= 0) {return true;}
        }
        else if (index == -27 || index == -25) {
                if (value.search(":") != -1) {
                        var position = value.search(":");
                        var hour = Number(value.slice(0, position));
                        var minute = Number(value.slice(position + 1));
                        if (hour >= 5 && hour <= 12 && minute >= 0 && minute <= 59) {
                                 return true;
                        }
                }
        }
        else if (index == -26 || index == -24) {
                if (value.search(":") != -1) {
                        var position = value.search(":");
                        var hour = Number(value.slice(0, position));
                        var minute = Number(value.slice(position + 1));
                        if (((hour >= 20 && hour <= 23) || (hour >= 0 && hour <= 3)) && (minute >= 0 && minute <= 59)) {
                                 return true;
                        }
                }
        }
        else if (index == 8) {
                if (isNaN(Number(value)) == false && Number(value) <= 7 && Number(value) >= 0) {return true;}
        }
        else if (index == -31 || index == -30) {return true;}
        return false;
},

//Beginning our app functions
/* The first function is used to specify how the app should display the various questions. You should note which questions 
should be displayed using which formats before customizing this function*/
renderQuestion: function(question_index) {
    //First load the correct question from the JSON database
    participantSetup[-23 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is...";
    participantSetup[-22 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is...";
    participantSetup[-21 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is...";
    participantSetup[-20 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is...";
    participantSetup[-19 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is something I do without having to consciously remember.";
    participantSetup[-18 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is something I do automatically.";
    participantSetup[-17 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is something I do without thinking.";
    participantSetup[-16 + 34].questionPrompt = "Brushing my teeth " + localStore.personalText + " is something I start doing before I realize I'm doing it.";

    var question;
    var uniqueKey = localStore.uniqueKey;
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var day = new Date().getDate();
    var hour = new Date().getHours();
    var time = new Date().getTime();
    if (hour <= 3) {
          var yesterday = new Date().getTime() - parseInt(86400) * 1000;
          day = new Date(yesterday).getDate();
    }

    //The if-else statement transfers question index (-21 to 18) to the index in the right question set
    if (question_index <= -1) {question = participantSetup[question_index + 34];}
    else if (question_index >= 10) {question = messagePage[question_index - 10];}
    else {question = weeklyQuestions[question_index];}

    var color, color_next, color_back;
    var buttonTmpl;
    var buttonOption;
    if (Math.abs(question_index) % 2 == 0) {
            color = "#4169E1";
            color_next = "#2E8B57";
            color_back = "#2E8B57";
            buttonTmpl = buttonTmpl_blue;
            buttonOption = "#question button.options_blue";
    }
    else {
            color = "#2E8B57";
            color_next = "#4169E1";
            color_back = "#4169E1";
            buttonTmpl = buttonTmpl_green;
            buttonOption = "#question button.options_green";
    }

    //Now populate the view for this question, depending on whether it uses buttons or textarea
    /*This next statement is a conditional statement saying that questions that are not equal to this number should be displayed as 
    *rating scales (i.e., small numbers at the top of the screen and larger numbers at the bottom of the screen). */
    
    if (question_index == -32 || question_index == -29 || question_index == -28 || (question_index >= -23 && question_index < 8 && question_index != -1 && question_index != -15)) {
            question.buttons = "";
            var label_count = 0;
            for (var i = question.minResponse; i <= question.maxResponse; i++) {
                var label = question.labels[label_count++].label;
                question.buttons += Mustache.render(buttonTmpl, {
                                                    id: question.variableName+i,
                                                    value: i,
                                                    label: label
                                                    }
                                                    );
            };
            //Render a question with different template depending on whether it is the first question
            if (question_index == 0) {
                    $("#question").html(Mustache.render(questionFirstTmpl, question));
            }
            else {
                    $("#question").html(Mustache.render(questionTmpl, question));
            }

            //The following if structure defines what happens when the user click "Next", "Back", and option buttons
            $("#question button").click(function(){
                //When the user click on "Next" 
                if (this.innerHTML=="Next") {
                        //A variable element is created and used to get the option that is selected (i.e., with blue background-color)
                        var element = "";
                        for (var j = question.minResponse; j <= question.maxResponse; j++) {
                                var tempColor = $("#question button[value="+j+"]").css("color");
                                if (tempColor == "rgb(255, 255, 255)") {
                                        element = $("#question button[value="+j+"]");
                                        break;
                                }
                        }
                        //When one option is selected
                        if (element != ""){
                                app.recordResponse(element, question_index);
                                //The following part solves the problem of the situation when a user clicks "Back" and then "Next", the system needs to know which option was selected and change the color
                                //Find out which option of the next question was selected and render it (change the color or value in the text area)
                                if (question_index < -1) {
                                        var nextQuestion = participantSetup[newCount + 34];
                                }
                                else {var nextQuestion = weeklyQuestions[newCount];}
                                var k = app.findKey(nextQuestion.variableName, "", "");
                                if (isNaN(k) == false) {
                                        if (question_index == -32 || question_index == -28 || question_index == 7) {
                                                $("textarea").val(localStore[localStore.key(k)].toString());
                                        }
                                        else {
                                                $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_next);
                                                $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                        }     
                                }
                        }
                        //When no option is selected, app gives an alert message
                        else {
                                navigator.notification.alert("Oops! Please choose one option.", function(){}, "", "");
                        }
                }

                //When the user click on "Back"
                else if (this.innerHTML=="Back"){
                        if (question_index >= 0 && question_index < 8) {
                                var backQuestion = weeklyQuestions[question_index - 1];
                        }
                        else if (question_index <= -1) {
                                var backQuestion = participantSetup[question_index - 1 + 34];
                        }
                        app.renderQuestion(question_index - 1);                             
                        
                        //Find out which option of the next question was selected and render it (change the color or value in the text area)
                        if (question_index <= -1) {
                                var k = app.findKey(backQuestion.variableName, "", "");
                        }
                        else {
                                var k = app.findKey(backQuestion.variableName, uniqueKey, "_");  
                        }
                        if (isNaN(k) == false){
                                if (question_index == -32 || question_index == -29 || question_index == -23) {
                                        $("textarea").val(localStore[localStore.key(k)].toString());
                                }
                                else {
                                        $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_back);
                                        $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                }
                        }                 
                }
                //When the user click on one of the options
                else {
                        $(buttonOption).css("background-color", "#FFFFFF");
                        $(this).css("background-color", color);
                        $(buttonOption).css("color", color);
                        $(this).css("color", "#FFFFFF");
                }
            });
    }

    //Render the TSC intro page separately
    else if (question_index == -15) {
            $("#question").html(Mustache.render(introTmpl, question));
            $("#question button").click(function(){
                    //When the user click on "Next"
                    if (this.innerHTML == "Next") {
                            app.renderQuestion(-14);
                            var nextQuestion = participantSetup[-14 + 34];
                            var k = app.findKey(nextQuestion.variableName, "", "");
                            if (isNaN(k) == false) {
                                   $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_next);
                                   $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                            }
                    }
                    //When the user click on "Back"
                    else {
                            app.renderQuestion(-16);
                            var backQuestion = participantSetup[-16 + 34];
                            var k = app.findKey(backQuestion.variableName, "", "");
                            if (isNaN(k) == false) {
                                   $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_back);
                                   $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                            }
                    }
            });
    }
    //Render the last confirmation question separately
    else if (question_index == -1 || question_index == 9) {
            $("#question").html(Mustache.render(questionLastTmpl, question));
            $("#question button").click(function(){
                    //When the user click on "Submit"
                    if (this.innerHTML == "Submit") {
                            if (question_index == 9) {
                                       var uniqueRecord = "weeklySurvey_"+ year + "_" + month + "_" + day;
                                       localStore[uniqueRecord] = 1;
                                       app.saveDataLastPage();
                                       var surveyDateList = JSON.parse(localStore.surveyDateList);
                                       if (time >= surveyDateList[2] && time < surveyDateList[3]) {
                                              app.renderLastPage(lastPage[2]);
                                       }
                                       else if (time >= surveyDateList[3]) {
                                              app.renderLastPage(lastPage[3]);
                                       }
                                       else {app.renderLastPage(lastPage[1]);}   
                            }
                            else {
                                    var uniqueRecord = "setup"
                                    localStore[uniqueRecord] = 1;
                                    app.schedulingQuestionnaires();
                                    app.saveDataLastPage();
                                    app.renderLastPage(lastPage[1]);
                            }
                            
                    }
                    //When the user click on "Back"
                    else {
                            app.renderQuestion(lastCount);
                            if (question_index == 9) {
                                    var lastQuestion = weeklyQuestions[lastCount];
                                    var k = app.findKey(lastQuestion.variableName, uniqueKey, "_");
                                    if (isNaN(k) == false){
                                            $("textarea").val(localStore[localStore.key(k)].toString());
                                    }
                            }
                            else {
                                    var lastQuestion = participantSetup[lastCount + 34];
                                    var k = app.findKey(lastQuestion.variableName, "", "");
                                    if (isNaN(k) == false){
                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_back);
                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                    }
                            }
                    }
            });
    }

    //Render the message page separately
    else if (question_index >= 10) {
            $("#question").html(Mustache.render(questionMessageTmpl, question));
            $("#question button").click(function(){
                    //When the user click on "Got it!"
                    if (this.innerHTML == "Got it!") {
                            app.renderLastPage(lastPage[0]);
                            var uniqueRecord = "reminderReceived_"+ year + "_" + month + "_" + day;
                            localStore[uniqueRecord] = 1;
                    }
            });               
    }

    //Render open-ended questions
    else {
            question.buttons = Mustache.render(textTmpl, {id: question.variableName +"1"});
            if (question_index == -34) {
                    $("#question").html(Mustache.render(questionFirstTmpl, question));
            }
            else {
                    $("#question").html(Mustache.render(questionTmpl, question));
            }
            $("#question button").click(function() {
                    //When the user click on "Next" 
                    if (this.innerHTML == "Next") {
                            if ($("textarea").val() != "") {
                                    if (app.checkValid($("textarea").val(), question_index)) {
                                            app.recordResponse($("textarea"), question_index);
                                            var nextQuestion = participantSetup[newCount + 34];
                                            var k = app.findKey(nextQuestion.variableName, "", "");
                                            if (isNaN(k) == false) {
                                                    if (question_index == -33 || question_index == -30 || question_index == -24) {
                                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_next);
                                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                                    }
                                                    else {$("textarea").val(localStore[localStore.key(k)].toString());}
                                            }
                                    }
                                    else {
                                            if (question_index == -34) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in your answer. You should fill in your 3-digit participant ID.", function(){}, "", "")
                                            }
                                            else if (question_index == -33) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in age you filled in.", function(){}, "", "")
                                            }
                                            else if (question_index == -27 || question_index == -25) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in the time you filled in (hour and minute should be separated by colon, and hour should be between 5 and 12).", function(){}, "", "")
                                            }
                                            else if (question_index == -26 || question_index == -24) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in the time you filled in (hour and minute should be separated by colon, and hour should be between 20 and 3 in the midnight).", function(){}, "", "")
                                            }
                                            else if (question_index == 8) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in your answer. You should fill in a number between 0 and 7.", function(){}, "", "")
                                            }
                                    }
                            }
                            else {
                                    if (question_index == -34) {
                                                navigator.notification.alert("Oops! Please fill in your 3-digit participant ID.", function(){}, "", "")
                                    }
                                    else {
                                                navigator.notification.alert("Oops! Please fill in an answer.", function(){}, "", "")
                                    }
                            }
                    }
                    //When the user click on "Back"
                    else if (this.innerHTML == "Back") {
                            app.renderQuestion(question_index - 1);
                            var backQuestion = participantSetup[question_index - 1 + 34];
                            var k = app.findKey(backQuestion.variableName, "", "");
                            if (isNaN(k) == false){
                                    if (question_index == -31 || question_index == -27 || question_index == 8) {
                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", color_back);
                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                    }
                                    else {
                                            $("textarea").val(localStore[localStore.key(k)].toString());  
                                    }
                            }
                    }
                    //When the user click on "Submit"
            });
    }
},
    
renderLastPage: function(pageData) {
    $("#question").html(Mustache.render(lastPageTmpl, pageData));
    //snooze function logic
    //this conditional statement executes the snooze function when the snooze message is shown
    //Uncomment the function below when testing the snooze function (Stage 4 of Customization)
},

/* Initialize the whole thing */
init: function() {
    //uncomment line below if developing for Android*/
    var sessionDate = new Date();
    var sessionTime = sessionDate.getTime();
    localStore.uniqueKey = sessionTime;
    var year = sessionDate.getFullYear();
    var month = sessionDate.getMonth();
    var day = sessionDate.getDate();
    var hour = sessionDate.getHours();
    if (hour <= 3) {
          var yesterday = sessionTime - parseInt(86400) * 1000;
          day = new Date(yesterday).getDate();
    }
    
  //change X to the number of questions in the participant setup
  //for example, if there are 9 questions in the participant setup, then X = 9
  //Make sure the value is negative (i.e., do not delete the negative sign)
  //This value is negative because they precede the first question of the questionnaire, which is question number 0
    if (!localStore.setup || localStore.setup == "undefined") {app.renderQuestion(-34);} //to setup page
    else {
            app.saveData();
            var end_study = localStore.end_study;
            var reminderDateList = JSON.parse(localStore.reminderDateList);
            var surveyDateList = JSON.parse(localStore.surveyDateList);

            if (sessionTime >= end_study) {
                     app.renderLastPage(lastPage[4]);
            }
            else {
                     // Show different pages depending on the date, time, and condition
                     var onReminder = false;
                     var onSuggestion = false;
                     var onSurvery = false;
                     for (i = 0; i < reminderDateList.length; i++) {
                            the_date = Number(reminderDateList[i]);
                            if (sessionTime >= (the_date - 3 * 60 * 1000) && sessionTime <= (the_date + 30 * 60 * 1000)) {
                                  if (!localStore["reminderReceived_" + year + "_" + month + "_" + day] || localStore["reminderReceived_" + year + "_" + month + "_" + day] == "undefined") {
                                          if (localStore.condition == 0) {
                                                onReminder = true; 
                                          }
                                          else if (localStore.condition == 1) {
                                                onSuggestion = true; 
                                          }
                                  }
                                  break;        
                            }
                     }

                     for (i = 0; i < surveyDateList.length; i++) {
                            the_date = Number(surveyDateList[i]);
                            if (sessionTime >= (the_date - 3 * 60 * 1000) && sessionTime <= (the_date + 3 * 60 * 60 * 1000)) {
                                  if (!localStore["weeklySurvey_" + year + "_" + month + "_" + day] || localStore["weeklySurvey_" + year + "_" + month + "_" + day] == "undefined") {
                                        onSurvery = true;
                                  }
                                  break; 
                            }
                     }
                     
                     if (onReminder == true) {
                            app.renderQuestion(10);
                     }
                     else if (onSuggestion == true) {
                            if (localStore.brushing_time == 0) {
                                 app.renderQuestion(12); 
                            }
                            else if (localStore.brushing_time == 1) {
                                  app.renderQuestion(11); 
                            }
                            
                     }
                     else if (onSurvery == true) {
                            app.renderQuestion(0);
                     }
                     else {
                            app.renderLastPage(lastPage[0]);
                     }
            }
    }   
},
  
/* Record User Responses */  
recordResponse: function(button, count) {
    //uncomment up to "localStore[uniqueRecord] = response;" to test whether app is recording and sending data correctly (Stage 2 of Customization)
//     //Record date (create new date object)
    var datestamp = new Date();
    //this line for uniqueKey was lacking in the original document
    var uniqueKey = localStore.uniqueKey;
    var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds();
//     //Record value of text field
    var currentQuestion;
    lastCount = count;
    //Specify which questions are open-ended, so that the app will record the response as a string by replacing these numbers
    // add more conditions if necessary
    if (count <= -33 || count == -31 || count == -30 || (count <= -24 && count >= -27) || count == 8) {
         response = button.val();
         currentQuestion = button.attr('id').slice(0,-1);
    }
    //Record value of clicked button
    else {
        response = button.val();
//         //Create a unique identifier for this response
        //currentQuestion = button.id.slice(0,-1);
        currentQuestion = button.attr('id').slice(0,-1);
    }

    //Delete previous answers to the same question
    var previousKey = "";
    var target;
    if (count <= -1) {
            target = currentQuestion;
    }
    else {target = uniqueKey + "_" + currentQuestion;}
    for (var i = 0; i < localStore.length; i++) {
            if (localStore.key(i).indexOf(target) != -1){
                    previousKey = localStore.key(i);
                    break;
            }
    }
    localStore.removeItem(previousKey);

    if (count <= -1) {uniqueRecord = currentQuestion;}
    else {uniqueRecord = uniqueKey + "_" + currentQuestion + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds}
//     //Save this to local storage
    localStore[uniqueRecord] = response;
    if (count == -29) {
            if (response == 0) {
                    localStore["personalText"] = "in the evening";
            }
            else {localStore["personalText"] = "in the morning";}
    }
    app.renderQuestion(count + 1); 
    newCount = count + 1;
},
    
/* Prepare for Resume and Store Data */
/* Time stamps the current moment to determine how to resume */
pauseEvents: function() {
    localStore.pause_time = new Date().getTime();
},
      
sampleParticipant: function() {
      var current_moment = new Date();
      var current_time = current_moment.getTime();
      var pause_time = localStore.pause_time;
      var date = new Date(Number(pause_time));
      var pauseHour = date.getHours();
      var pauseMinute = date.getMinutes();
      var pauseSecond = date.getSeconds();
      var pauseMillisecond = date.getMilliseconds();
      var critical_duration;

      if (!localStore.setup || localStore.setup == "undefined") {
            uniqueKey = localStore.uniqueKey;
      }
      else {
            if ((pauseHour >= 17 || (pauseHour == 16 && pauseMinute >= 57)) && pauseHour < 20) {
                  critical_duration = ((20 - pauseHour) * 3600 - pauseMinute * 60 - pauseSecond) * 1000 - pauseMillisecond;
                  if ((current_time - pause_time) > critical_duration) {
                          app.init();
                  }
                  else {uniqueKey = localStore.uniqueKey;}
            }
            else {app.init();}
      }
      
    //app.triggeredNotifs();
    /*Because saving data will remove those data in the localstorage, participants cannot go back to see their previous answers, so I commented the next line to 
    disable data saving when the app is resumed */
    //app.saveData();
},

//uncomment this function to test data saving function (Stage 2 of Customization)
saveDataLastPage:function() {
    var datestamp = new Date();
    var year = datestamp.getFullYear();
    var month = datestamp.getMonth();
    var day = datestamp.getDate();
    $.ajax({
           type: 'post',
           url: 'http://reflection.nfshost.com/data_collector.cgi',
           data: localStore,
           crossDomain: true,
           success: function (result) {
          //Define all the variables that need to be retained after sending the data
           var pid = localStore.participant_id, setup = localStore.setup, condition = localStore.condition, end_study = localStore.end_study, reminderDateList = localStore.reminderDateList, surveyDateList = localStore.surveyDateList;
           var reminderReceived = localStore["reminderReceived_" + year + "_" + month + "_" + day], weeklySurvey = localStore["weeklySurvey_" + year + "_" + month + "_" + day], brushing_time = localStore.brushing_time, personalText = localStore.personalText;
//        //uncomment next line if developing for Android*/
           var uniqueKey = localStore.uniqueKey;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.setup = setup;
           localStore.condition = condition;
           localStore.end_study = end_study;
           localStore.reminderDateList = reminderDateList;
           localStore.surveyDateList = surveyDateList;
           localStore["reminderReceived_" + year + "_" + month + "_" + day] = reminderReceived; 
           localStore["weeklySurvey_" + year + "_" + month + "_" + day] = weeklySurvey;
           localStore.brushing_time = brushing_time;
           localStore.personalText = personalText;
//        //uncomment next line if developing for Android*/
           localStore.uniqueKey = uniqueKey;
           navigator.notification.alert("Data Sent Successfully", function(){}, "", "");
           },
           error: function (request, error) {console.log(error);navigator.notification.alert("Data are locally stored but cannot be sent now. Please try to have Internet Connection next time!",function(){}, "", "");}
           });
},

//uncomment this function to test data saving function (Stage 2 of Customization)
saveData:function() {
    var datestamp = new Date();
    var year = datestamp.getFullYear();
    var month = datestamp.getMonth();
    var day = datestamp.getDate();
    $.ajax({
           type: 'post',
           url: 'http://reflection.nfshost.com/data_collector.cgi',
           data: localStore,
           crossDomain: true,
           success: function (result) {
          //Define all the variables that need to be retained after sending the data
           var pid = localStore.participant_id, setup = localStore.setup, condition = localStore.condition, end_study = localStore.end_study, reminderDateList = localStore.reminderDateList, surveyDateList = localStore.surveyDateList;
           var reminderReceived = localStore["reminderReceived_" + year + "_" + month + "_" + day], weeklySurvey = localStore["weeklySurvey_" + year + "_" + month + "_" + day], brushing_time = localStore.brushing_time, personalText = localStore.personalText;
//        //uncomment next line if developing for Android*/
           var uniqueKey = localStore.uniqueKey;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.setup = setup;
           localStore.condition = condition;
           localStore.end_study = end_study;
           localStore.reminderDateList = reminderDateList;
           localStore.surveyDateList = surveyDateList;
           localStore["reminderReceived_" + year + "_" + month + "_" + day] = reminderReceived; 
           localStore["weeklySurvey_" + year + "_" + month + "_" + day] = weeklySurvey;
           localStore.brushing_time = brushing_time;
           localStore.personalText = personalText;
//        //uncomment next line if developing for Android
           localStore.uniqueKey = uniqueKey;
           },
           error: function (request, error) {console.log(error);}
           });
},
    
// Local Notifications Javascript
// Stage 5 of Customization
// This code is for signal-contingent designs
schedulingQuestionnaires:function() {
//    //The line below keeps the app running in the background so that the app will fire notifications at the appropriate time
     //window.plugin.backgroundMode.enable();

     var id_survey, id_reminder;
     var date_survey, date_reminder;

     var positionWakeupWeekday = localStore.wakeup_weekday.search(":");
     var wakeupHourWeekday = Number(localStore.wakeup_weekday.slice(0, positionWakeupWeekday));
     var wakeupMinuteWeekday = Number(localStore.wakeup_weekday.slice(positionWakeupWeekday + 1));

     var positionSleepWeekday = localStore.sleep_weekday.search(":");
     var sleepHourWeekday = Number(localStore.sleep_weekday.slice(0, positionSleepWeekday));
     var sleepMinuteWeekday = Number(localStore.sleep_weekday.slice(positionSleepWeekday + 1));

     var positionWakeupWeekend = localStore.wakeup_weekend.search(":");
     var wakeupHourWeekend = Number(localStore.wakeup_weekend.slice(0, positionWakeupWeekend));
     var wakeupMinuteWeekend = Number(localStore.wakeup_weekend.slice(positionWakeupWeekend + 1));

     var positionSleepWeekend = localStore.sleep_weekend.search(":");
     var sleepHourWeekend = Number(localStore.sleep_weekend.slice(0, positionSleepWeekend));
     var sleepMinuteWeekend = Number(localStore.sleep_weekend.slice(positionSleepWeekend + 1));

     if (sleepMinuteWeekday < 30) {
          if (sleepHourWeekday <= 3 && sleepHourWeekday >= 0) {
              var reminderHourWeekday = sleepHourWeekday + 23;
          }
          else {var reminderHourWeekday = sleepHourWeekday - 1;}
          var reminderMinuteWeekday = sleepMinuteWeekday + 30;
     }
     else {
          if (sleepHourWeekday <= 3 && sleepHourWeekday >= 0) {
              var reminderHourWeekday = sleepHourWeekday + 24;
          }
          else {var reminderHourWeekday = sleepHourWeekday;}
          var reminderMinuteWeekday = sleepMinuteWeekday - 30;
     }

     if (sleepMinuteWeekend < 30) {
          if (sleepHourWeekend <= 3 && sleepHourWeekend >= 0) {
              var reminderHourWeekend = sleepHourWeekend + 23;
          }
          else {var reminderHourWeekend = sleepHourWeekend - 1;}
          var reminderMinuteWeekend = sleepMinuteWeekend + 30;
     }
     else {
          if (sleepHourWeekend <= 3 && sleepHourWeekend >= 0) {
              var reminderHourWeekend = sleepHourWeekend + 24;
          }
          else {var reminderHourWeekend = sleepHourWeekend;}
          var reminderMinuteWeekend = sleepMinuteWeekend - 30;
     }

     var dateObject = new Date();
     var now = dateObject.getTime();
     var currentYear = dateObject.getYear(), currentMonth = dateObject.getMonth(), currentDate = dateObject.getDate(), currentHour = dateObject.getHours(), currentMinute = dateObject.getMinutes(), currentSecond = dateObject.getSeconds(), currentMillisecond = dateObject.getMilliseconds(), currentDay = dateObject.getDay();

     var nightLag = ((24 - currentHour) * 60 * 60 - currentMinute * 60 - currentSecond) * 1000 - currentMillisecond;
     var firstSurvey;
     if (localStore.brushing_time == 0) {
            firstSurvey = new Date(now + parseInt(nightLag) + parseInt(86400) * 7 * 1000 + parseInt(17 * 60 * 60 * 1000));
     }
     else {firstSurvey = new Date(now + parseInt(nightLag) + parseInt(86400) * 6 * 1000 + parseInt(17 * 60 * 60 * 1000));}
     var reminderDateList = [];
     var surveyDateList = [];

     //Schedule weekly surveys and get the last day of each week
     for (i = 0; i < 4; i++) {
          id_survey = 101 + parseInt(i);
          date_survey = new Date(firstSurvey.getTime() + parseInt(86400) * 7 * parseInt(i) * 1000);
          if (i == 3) {
                end_study = new Date(date_survey.getTime() + parseInt(7 * 60 * 60 * 1000));
                localStore["end_study"] = end_study.getTime();
          }
          surveyDateList.push(date_survey.getTime());
          window.plugin.notification.local.add({icon: 'ic_launcher', id: id_survey, date: date_survey, message: 'Time for your weekly Survey!', title: "Hello, I'm back", autoCancel: true});
          localStore['notification1_'+ i] = localStore.participant_id + "_" + id_survey + "_" + date_survey;         
     }


     //Schedule daily reminders
     var date_start = new Date(now + nightLag);
     for (i = 0; i < 14; i++) {
             if (localStore.condition == 0) {
                  date_reminder = new Date(date_start.getTime() + parseInt(12 * 60 * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000);
             }
             else if (localStore.condition == 1) {
                  date_midnight = new Date(date_start.getTime() + parseInt(86400) * 1000 * parseInt(i));
                  if (date_midnight.getDay() == 6 || date_midnight.getDay() == 0) {
                        if (localStore.brushing_time == 0) {
                              date_reminder = new Date(date_midnight.getTime() + parseInt(reminderHourWeekend * 60 * 60 * 1000) + parseInt(reminderMinuteWeekend * 60 * 1000))
                        }
                        else if (localStore.brushing_time == 1) {
                              date_reminder = new Date(date_midnight.getTime() + parseInt(wakeupHourWeekend * 60 * 60 * 1000) + parseInt(wakeupMinuteWeekend * 60 * 1000))
                        }
                  }
                  else {
                        if (localStore.brushing_time == 0) {
                              date_reminder = new Date(date_midnight.getTime() + parseInt(reminderHourWeekday * 60 * 60 * 1000) + parseInt(reminderMinuteWeekday * 60 * 1000))
                        }
                        else if (localStore.brushing_time == 1) {
                              date_reminder = new Date(date_midnight.getTime() + parseInt(wakeupHourWeekday * 60 * 60 * 1000) + parseInt(wakeupMinuteWeekday * 60 * 1000))
                        }
                  }
            }
            if (i < 7) {
                  id_reminder = 201 + parseInt(i);
                  reminderDateList.push(date_reminder.getTime());
                  window.plugin.notification.local.add({icon: 'ic_launcher', id: id_reminder, date: date_reminder, message: 'This is a reminder to improve your oral health routine.', title: "Hello, I'm back", autoCancel: true});
                  localStore['notification2_'+ i] = localStore.participant_id + "_" + id_reminder + "_" + date_reminder;  
            }
            else {
                  if (i % 2 == 0) {
                        id_reminder = 201 + parseInt(i);
                        reminderDateList.push(date_reminder.getTime());
                        window.plugin.notification.local.add({icon: 'ic_launcher', id: id_reminder, date: date_reminder, message: 'This is a reminder to improve your oral health routine.', title: "Hello, I'm back", autoCancel: true});
                        localStore['notification2_'+ i] = localStore.participant_id + "_" + id_reminder + "_" + date_reminder; 
                  }
            }
                       
      }
      localStore["reminderDateList"] = JSON.stringify(reminderDateList);
      localStore["surveyDateList"] = JSON.stringify(surveyDateList);
},

};
