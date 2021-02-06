var time001 = "";

var question001 = ["Question 1",
            "Question 2",
        ];

        var option001 = ["<button class=answer-btn onclick=q1i()>True</button><br /><br /><button class=answer-btn onclick=q1c()>False</button>"];
        var option002 = ["<button class=answer-btn onclick=q2c()>False</button><br /><br /><button class=answer-btn onclick=q2i()>True</button>"];
        var option003 = ["<button class=answer-btn onclick=q3c()>True</button><br /><br /><button class=answer-btn onclick=q3i()>False</button>"];
        

        var number = 0;
        console.log(number++);
        //number++;

        var score1 = 0;
        console.log(score1++);
        //score1++;

        function begin001() {
            let time001 = 200;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = option001;
            number001.innerHTML = number++;
        }

        function q1c() {
            message001.innerHTML = "Correct Answer.";
            message002.innerHTML = "";
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

        function next001() {
            if (number == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = option002;
                message003.innerHTML = "";
                number001.innerHTML = number++;
            }

            else if (number == "3") {
                message004.innerHTML = question002[2];
                message005.innerHTML = option003;
                message006.innerHTML = "";
                number001.innerHTML = number++;
            }
            // will re-add later 

            else {
                window.clearInterval(update);
                time001 = "-";
                message007.innerHTML = "End of Quiz";
                message008.innerHTML = "";
                message009.innerHTML = "";
                
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

                message010.innerHTML = "Initials: " + length001;
                message011.innerHTML = "Score: " + length1;
                message012.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>"
            }
        }

        function timer001() {
            time001 = time001 - 1;
            if (time001 < 200) {
                time.innerHTML = time001;
            }

            else if (time001 < 1) {
                window.clearInterval(update);
                message007.innerHTML = "Time's up";
                message008.innerHTML = "";
                message009.innerHTML = "<h4>Game Over!</h4>";

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

                message010.innerHTML = "Initials: " + length001;
                message011.innerHTML = "Score: " + length1;
                message012.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }  
        }

            update = setInterval("timer001()", 1000);

            function repeat001() {
                location.reload();
        }
