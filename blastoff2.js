//This is the function that will create the count down
function begincount()
    



    {
        //This is the statement that declares the variables
        for ( countdown = 10, timeout = 10000; countdown >= 0; countdown--)
           {
                //This says that if the countdown equals zero, then do the following
                if (countdown == 0)
                    { 
                        //This will replace the 0 on the page with blastoff!
                        document.getElementById("number").innerHTML = "Blastoff!"
                    }
                //This else statement continues the countdown until it hits zero
                else
                    {
                        //This is the statement that calls upon the delay function
                        delay((10-countdown), timeout);
                    }
                    //This will take away one second from the timer
                    timeout = timeout - 1000;
            }
        
    }
//This is the delay funtion 
function delay (countdown, timeout)
    {
        //This sets the timeout and deducts numbers from the countdown
        setTimeout(()=>{
            document.getElementById("number").innerHTML = countdown;
            }, timeout)
    }
//This function sets the start and stop buttons
function startStart()
    {
        //This will disable the start button
        document.getElementById("startButton").disabled = true
        //This will enable the stop button
        document.getElementById("stopButton").disabled = false
    }
//This funtion sets the start and stop buttons
function startStop()
    {
        //This will enable the start button
        document.getElementById("startButton").disabled = false
        //This will disable the stop button
        document.getElementById("stopButton").disabled = true
    }
//This functions plays the music
function playMusic()
    {
        //This pulls the mp3 file and creates a variable
        var audio = new Audio('SpaceMusic.mp3');
        //This plays the audio
        audio.play();
    }