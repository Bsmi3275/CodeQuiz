var question001 = ["'XML' stands for 'Exemplary Markup language' !",
            "Javascript is hard!",
            "Express javascript is not learned within the first four weeks of the Coding Boot Camp! (don't be tricked)",
            "CSS, javascript, and HTML are technically the same language!",
            "HTML stands for Hypertext Markup Language",
            "CSS stands for Cascading Stylesheet",
            "You cannot progress in knowledge or in the workforce with a skeletal understanding of HTML",
            "[Anything].innerHTML automatically saves an object to local storage when writing javascript",
            "Just because there seems to be multiple pages on a web application does not mean that there are!",
            "The Coding Boot Camp is one of the easiest classes you will ever take!"
        ];

        var options001 = ["<button class=buttons001 onclick=q1i()>True</button><br /><br /><button class=buttons001 onclick=q1c()>False</button>"];
        var options002 = ["<button class=buttons001 onclick=q2c()>False</button><br /><br /><button class=buttons001 onclick=q2i()>True</button>"];
        var options003 = ["<button class=buttons001 onclick=q3c()>True</button><br /><br /><button class=buttons001 onclick=q3i()>False</button>"];
        var options004 = ["<button class=buttons001 onclick=q4i()>True</button><br /><br /><button class=buttons001 onclick=q4c()>False</button>"];
        var options005 = ["<button class=buttons001 onclick=q5c()>False</button><br /><br /><button class=buttons001 onclick=q5i()>True</button>"];
        var options006 = ["<button class=buttons001 onclick=q6i()>False</button><br /><br /><button class=buttons001 onclick=q6c()>True</button>"];
        var options007 = ["<button class=buttons001 onclick=q7c()>True</button><br /><br /><button class=buttons001 onclick=q7i()>False</button>"];
        var options008 = ["<button class=buttons001 onclick=q8c()>False</button><br /><br /><button class=buttons001 onclick=q8i()>True</button>"];
        var options009 = ["<button class=buttons001 onclick=q9c()>True</button><br /><br /><button class=buttons001 onclick=q9i()>False</button>"];
        var options010 = ["<button class=buttons001 onclick=q10i()>True</button><br /><br /><button class=buttons001 onclick=q10c()>False</button>"];

        var num = 0;
        num++;
        var score1 = 0;
        score1++;

        function begin001() {
            time1 = 200;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = num++;
        }

        function q1c() {
            message002.innerHTML = "Correct. Nobody cares about anything exemplary these days.";
            message001.innerHTML = "";
            score001.innerHTML = score1++;
            message003.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
            
            function q1i() {
            message002.innerHTML = "Incorrect. 'XML' stands for 'Extensible Markup Language' !";
            message001.innerHTML = "";
            time1 -= 20;
            message003.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
            
            function q2c() {
            message002.innerHTML = "No, it's not hard. If this is hard for you, then you are in the wrong business!";
            message001.innerHTML = "";
            score001.innerHTML = score1++;
            message003.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
            
            function q2i() {
            message002.innerHTML = "You're right! It is not that hard!";
            message001.innerHTML = "";
            time1 -= 20;
            message003.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }

        function q3c() {
            message003.innerHTML = "Correct, though it may be easier to some people than to others.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3i() {
            message003.innerHTML = "Incorrect. In the Coding Boot Camp, you would start with that around Week 11.";
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4c() {
            message003.innerHTML = "Correct. Even though these languages work together in a tandem, each has a different purpose and a different method of commenting.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4i() {
            message003.innerHTML = "Incorrect. You can have an HTML page (in some cases) without javascript. Therefore, the three languages are not the same or always even dependent on each other";
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5c() {
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5i() {
            message003.innerHTML = "Incorrect. You should have picked 'true'.";
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6c() {
            message003.innerHTML = "Correct.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6i() {
            message003.innerHTML = "Incorrect. Keep on and you will fail.";
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7c() {
            message003.innerHTML = "Correct, HOWEVER alot of HTML knowledge can be a good thing.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7i() {
            message003.innerHTML = "Incorrect. Man cannot live by HTML alone.";
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8c() {
            message003.innerHTML = "Correct. '.innerHTML' just translates one set of text to a place in the HTML page.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8i() {
            message003.innerHTML = "Incorrect. Two methods I like to use are 1) '.val(localStorage.getItem(i))' or 2) on a local host through index.js and server.js.";
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9c() {
            message003.innerHTML = "Correct. This Coding Quiz application just proves it.";
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9i() {
            message003.innerHTML = "Incorrect. Multiple sets of functions as well as a 'next' button function can do the trick.";
            message002.innerHTML = "";
            time1 -= 20;

            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10c() {
            message003.innerHTML = "Correct. The Coding Boot Camp is called a 'Boot Camp' for a reason, but the instructors and students alike are very helpful";
            message005.innerHTML = "Make a note of your final score! Please do not lie"
            message002.innerHTML = "";
            score001.innerHTML = score1++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10i() {
            message003.innerHTML = "Incorrect. If you are looking for an easy time in your life, look elsewhere!";
            message005.innerHTML = "Make a note of your final score! Please do not lie"
            message002.innerHTML = "";
            time1 -= 20;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function next001() {
            if (num == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "6") {
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "7") {
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "8") {
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "9") {
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";
            }

            else if (num == "10") {
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = num++;
                message004.innerHTML = "";

            } else {
                window.clearInterval(update);
                time1 = "-";
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
            time1 = time1 - 1;
            if (time1 < 200) {
                time001.innerHTML = time1;
            }

            else if (time1 < 1) {
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
