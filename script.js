var time001 = "";

var question001 = ["Question 1",
            "Question 2",
            "Question 3",
            "Question 4",
            "Question 5",
            "Question 6",
            "Question 7",
            "Question 8",
            "Question 9",
            "Question 10"
        ];

        var option001 = ["<button class=answer-btn onclick=q1i()>True</button><br /><br /><button class=answer-btn onclick=q1c()>False</button>"];
        var option002 = ["<button class=answer-btn onclick=q2c()>False</button><br /><br /><button class=answer-btn onclick=q2i()>True</button>"];
        var option003 = ["<button class=answer-btn onclick=q3c()>True</button><br /><br /><button class=answer-btn onclick=q3i()>False</button>"];
        var option004 = ["<button class=answer-btn onclick=q4i()>True</button><br /><br /><button class=answer-btn onclick=q4c()>False</button>"];
        var option005 = ["<button class=answer-btn onclick=q5c()>False</button><br /><br /><button class=answer-btn onclick=q5i()>True</button>"];
        var option006 = ["<button class=answer-btn onclick=q6i()>False</button><br /><br /><button class=answer-btn onclick=q6c()>True</button>"];
        var option007 = ["<button class=answer-btn onclick=q7c()>True</button><br /><br /><button class=answer-btn onclick=q7i()>False</button>"];
        var option008 = ["<button class=answer-btn onclick=q8c()>False</button><br /><br /><button class=answer-btn onclick=q8i()>True</button>"];
        var option009 = ["<button class=answer-btn onclick=q9c()>True</button><br /><br /><button class=answer-btn onclick=q9i()>False</button>"];
        var option010 = ["<button class=answer-btn onclick=q10i()>True</button><br /><br /><button class=answer-btn onclick=q10c()>False</button>"];

        var num = 0;
        console.log(num++);
        //num++;

        var score1 = 0;
        console.log(score1++);
        //score1++;

        function begin001() {
            let time001 = 200;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = option001;
            number001.innerHTML = num++;
        }

        function q1c() {
            message002.innerHTML = "Correct Answer.";
            message001.innerHTML = "";
            score001.innerHTML = score1++;
            message003.innerHTML = "<button class=next-btn onclick=next001()>Next</button>";
            }
            
            function q1i() {
            message005.innerHTML = "Incorrect Answer.";
            message004.innerHTML = "";
            time001 -= 20;
            message006.innerHTML = "<button class=next-btn onclick=next001()>Next</button>";
            }
            
            function q2c() {
            message002.innerHTML = "Incorrect Answer.";
            message00.innerHTML = "";
            score001.innerHTML = score1++;
            message003.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
            
            function q2i() {
            message002.innerHTML = "Correct Answer.";
            message001.innerHTML = "";
            time001 -= 20;
            message003.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }

        function q3c() {
            message003.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3i() {
            message003.innerHTML = "Incorrect Answer.";
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4c() {
            message003.innerHTML = "Correct Answer";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4i() {
            message003.innerHTML = "Incorrect Answer";
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5c() {
            message003.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5i() {
            message003.innerHTML = "Incorrect Answer.";
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6c() {
            message003.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6i() {
            message003.innerHTML = "Incorrect Answer.";
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7c() {
            message003.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7i() {
            message003.innerHTML = "Incorrect Answer.";
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8c() {
            message003.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8i() {
            message003.innerHTML = "Incorrect Answer.";
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9c() {
            message003.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9i() {
            message003.innerHTML = "Incorrect Answer.";
            message002.innerHTML = "";
            time001 -= 20;

            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10c() {
            message003.innerHTML = "Correct Answer.";
            message005.innerHTML = "Make a note of your final score! Please do not lie"
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10i() {
            message003.innerHTML = "Incorrect Answer.";
            message005.innerHTML = "Make a note of your final score! Please do not lie"
            message002.innerHTML = "";
            time001 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function next001() {
            if (a == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = option002;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = option003;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = option004;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = option005;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "6") {
                message001.innerHTML = question001[5];
                message002.innerHTML = option006;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "7") {
                message001.innerHTML = question001[6];
                message002.innerHTML = option007;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "8") {
                message001.innerHTML = question001[7];
                message002.innerHTML = option008;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "9") {
                message001.innerHTML = question001[8];
                message002.innerHTML = option009;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (a == "10") {
                message001.innerHTML = question001[9];
                message002.innerHTML = option010;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";

            } else {
                window.clearInterval(update);
                time001 = "-";
                message001.innerHTML = "End of Quiz";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "";
                var length001 = prompt("Please enter your first, middle, and last initials: ")
                    if (length001 > 3){
                alert("Relax! the initials you have entered are too long!");
                    return;
                }
                    if (length001 < 2){
                alert("Oh, come on! No one has 1 or 0 initials!")
                    return;
                }

            var length1 = prompt("Please enter your score: ")
                if (length1 > 10){
                alert("You are lying! Try again!");
                return;
                }
                if (length1 < 1){
                alert("Take a coding class, will ya!")
                }
                if (length1 == 10){
                alert("Congratulations on your perfect score! ")
                }

                message004.innerHTML = "Initials: " + length001;
                message005.innerHTML = "Score: " + length1;
                message006.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>"
            }
        }

        function timer001() {
            time001 = time001 - 1;
            if (time001 < 200) {
                time.innerHTML = time001;
            }

            else if (time001 < 1) {
                window.clearInterval(update);
                message001.innerHTML = "Time's up";
                message002.innerHTML = "";
                message003.innerHTML = "<h4>Game Over!</h4>";
                message004.innerHTML = "";

            var length001 = prompt("Please enter your first, middle, and last initials: ")
                    if (length001 > 3){
                alert("Relax! the initials you have entered are too long!");
                    return;
                }
                    if (length001 < 2){
                alert("Oh, come on! No one has 1 or 0 initials!")
                    return;
                }

            var length1 = prompt("Please enter your score: ")
                if (length1 > 10){
                alert("You are lying! Try again!");
                return;
                }
                if (length1 < 1){
                alert("Take a coding class, will ya!")
                }
                if (length1 == 10){
                alert("Congratulations on your perfect score! ")
                }

                message004.innerHTML = "Initials: " + length001;
                message005.innerHTML = "Score: " + length1;
                message006.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }  
        }

            update = setInterval("timer001()", 1000);

            function repeat001() {
                location.reload();
        }
