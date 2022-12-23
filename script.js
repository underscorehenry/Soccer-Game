let ballPosition = 3;
let myScore = 0;
let cpuScore = 0;
let onOffense = true;

document.addEventListener('DOMContentLoaded', (event) => {
updateEverything();
document.getElementById('interceptPass').addEventListener('click', (event) => {
    interceptPass();
});

document.getElementById('tackle').addEventListener('click', (event) => {
    tackleBall();
})

document.getElementById('shoot').addEventListener('click', (event) => {
    shootBall();
});

document.getElementById('pass').addEventListener('click', (event) => {
    passBall();
});

document.getElementById('dribbleMove').addEventListener('click', (event) => {
    dribbleBall();
});
});

function passBall() {
    let num = Math.floor(Math.random() * 100);
    if(ballPosition === 5) {
        if(num >= 0 && num <= 79) {
            progressForMe();
            document.getElementById('actionLog').innerHTML = "You Pass Was Successful";
            pauseForReading();
            
        }
        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Pass Was Intercepted";
            pauseForReading();
            
        }
    }

    else if(ballPosition === 4) {
        if(num >= 0 && num <= 69) {
            progressForMe();
            document.getElementById('actionLog').innerHTML = "You Pass Was Successful";
            pauseForReading();
            
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Pass Was Intercepted";
            pauseForReading();
            
        }
    }

    else if(ballPosition === 3) {
        if(num >= 0 && num <= 49) {
            progressForMe();
            document.getElementById('actionLog').innerHTML = "You Pass Was Successful";
            pauseForReading();
            
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Pass Was Intercepted";
            pauseForReading();
            
        }
    }

    else if(ballPosition === 2) {
        if(num >= 0 && num <= 39) {
            progressForMe();
            document.getElementById('actionLog').innerHTML = "You Pass Was Successful";
            pauseForReading();
            
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Pass Was Intercepted";
            pauseForReading();
            
        }
    }

    else {
        if(num >= 0 && num <= 19) {
            document.getElementById('actionLog').innerHTML = "You Pass Was Successful";
            pauseForReading();
            
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Pass Was Intercepted";
            pauseForReading();
            
        }
    }
}

function shootBall() {
    let num = Math.floor(Math.random() * 100);
    if(ballPosition === 1) {
        if(num >= 0 && num <= 49) {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "GOAL!!!!";
            addToMyScore();
            ballPosition = 3;
            pauseForReading();
            
        }
        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Missed Your Shot";
            pauseForReading();
            
        }
    }

    else if(ballPosition === 2) {
        if(num >= 0 && num <= 39) {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "GOAL!!!!";
            ballPosition = 3;
            addToMyScore();
            pauseForReading();
           
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Missed Your Shot";
            pauseForReading();
            
        }
    }

    else if(ballPosition === 3) {
        if(num >= 0 && num <= 29) {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "GOAL!!!!";
            ballPosition = 3;
            addToMyScore();
            pauseForReading();
          
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Missed Your Shot";
            pauseForReading();
            
        }
    }

    else if(ballPosition === 4) {
        if(num >= 0 && num <= 19) {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "GOAL!!!!";
            ballPosition = 3;
            addToMyScore();
            pauseForReading();
            
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Missed Your Shot";
            pauseForReading();
            
        }
    }

    else {
        if(num >= 0 && num <= 9) {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "GOAL!!!!";
            ballPosition = 3;
            addToMyScore();
            pauseForReading();
            
        }

        else {
            onOffense = false;
            document.getElementById('actionLog').innerHTML = "You Missed Your Shot";
            pauseForReading();
            
        }
    }
}

function dribbleBall(){
    let num = Math.floor(Math.random() * 100);
    if(num >= 0 && num <= 49) {
        progressForMe();
        document.getElementById('actionLog').innerHTML = "You Juked The Defender";
        pauseForReading();
        
    }

    else {
        onOffense = false;
        document.getElementById('actionLog').innerHTML = "The Defender Took The Ball";
        pauseForReading();
        
    }
}

function interceptPass(){
    let num = Math.floor(Math.random() * 100);
    if(ballPosition === 5) {
        if(num >= 0 && num <= 79) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "You Intercepted The Pass";
            pauseForReading();
            
        }
        else {
            document.getElementById('actionLog').innerHTML = "You Missed The Interception";
            didHeShoot();
            pauseForReading();
            
        }
    }

    else if(ballPosition === 4) {
        if(num >= 0 && num <= 69) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "You Intercepted The Pass";
            pauseForReading();
            
        }

        else {
            progreessForCpu();
            document.getElementById('actionLog').innerHTML = "You Missed The Interception";
            didHeShoot();
            pauseForReading();
            
        }
    }

    else if(ballPosition === 3) {
        if(num >= 0 && num <= 49) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "You Intercepted The Pass";
            pauseForReading();
            
        }

        else {
            progreessForCpu();
            document.getElementById('actionLog').innerHTML = "You Missed The Interception";
            didHeShoot();
            pauseForReading();
            
        }
    }

    else if(ballPosition === 2) {
        if(num >= 0 && num <= 39) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "You Intercepted The Pass";
            pauseForReading();
            
        }

        else {
            progreessForCpu();
            document.getElementById('actionLog').innerHTML = "You Missed The Interception";
            didHeShoot();
            pauseForReading();
            
        }
    }

    else {
        if(num >= 0 && num <= 19) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "You Intercepted The Pass";
            pauseForReading();
            
        }

        else {
            progreessForCpu();
            document.getElementById('actionLog').innerHTML = "You Missed The Interception";
            didHeShoot();
            pauseForReading();
           
        }
    }
}

function tackleBall() {
    let num = Math.floor(Math.random() * 100);
    if(num >= 0 && num <= 49) {
        onOffense = true;
        document.getElementById('actionLog').innerHTML = "You Took The Ball";
        pauseForReading();
        
    }

    else {
        progreessForCpu();
        document.getElementById('actionLog').innerHTML = "You Missed Your Tackle";
        didHeShoot();
        pauseForReading();
        
    }
}

function didHeShoot() {
    let num = Math.floor(Math.random() * 100);
    if(ballPosition === 5) {
        cpuShoot();
            
    }

    else if(ballPosition === 4) {
        if(num >= 0 && num <= 49) {
            cpuShoot();
            
        }

        else {
            
            
        }
    }

    else if(ballPosition === 3) {
        if(num >= 0 && num <= 29) {
            cpuShoot();
            
        }

        else {
            
            
        }
    }

    else if(ballPosition === 2) {
        if(num >= 0 && num <= 19) {
            cpuShoot();
        }

        else {
            
            
        }
    }

    else {
        if(num >= 0 && num <= 9) {
            cpuShoot();;
            
        }

        else {
            
            
        }
    }
}

function cpuShoot() {
    let num = Math.floor(Math.random() * 100);
    if(ballPosition === 5) {
        if(num >= 0 && num <= 59) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and made A GOAL!!!!";
            addToCpuScore();
            ballPosition = 3;
            pauseForReading();
            
        }
        else {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and He Missed The Shot";
            ballPosition = 5;
            pauseForReading();
            
        }
    }

    else if(ballPosition === 4) {
        if(num >= 0 && num <= 49) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and made A GOAL!!!!";
            addToCpuScore();
            ballPosition = 3;
            pauseForReading();
           
        }

        else {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and He Missed The Shot";
            ballPosition = 5;
            pauseForReading();
            
        }
    }

    else if(ballPosition === 3) {
        if(num >= 0 && num <= 29) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and made A GOAL!!!!";
            addToCpuScore();
            ballPosition = 3;
            pauseForReading();
            
        }

        else {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and He Missed The Shot";
            ballPosition = 5;
            pauseForReading();
            
        }
    }

    else if(ballPosition === 2) {
        if(num >= 0 && num <= 19) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and made A GOAL!!!!";
            addToCpuScore();
            ballPosition = 3;
            pauseForReading();
            
        }

        else {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and He Missed The Shot";
            ballPosition = 5;
            pauseForReading();
            
        }
    }

    else {
        if(num >= 0 && num <= 9) {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and made A GOAL!!!!";
            addToCpuScore();
            ballPosition = 3;
            pauseForReading();
            
        }

        else {
            onOffense = true;
            document.getElementById('actionLog').innerHTML = "The CPU Shot and He Missed The Shot";
            ballPosition = 5;
            pauseForReading();
            
        }
    }
}


function updateEverything() {
    if(myScore >= 5 || cpuScore >= 5) {
        document.getElementById('myScore').innerHTML = myScore;
        document.getElementById('cpuScore').innerHTML = cpuScore;

        let offenseOptions = document.querySelectorAll('.offenseOptions');
        let defenseOptions = document.querySelectorAll('.defenseOptions');
        let continueButton = document.getElementById('continueButton');

        for(let i = 0; i < offenseOptions.length; i++) {
            offenseOptions[i].style.display = 'none';
        }

        for(let i = 0; i < defenseOptions.length; i++) {
            defenseOptions[i].style.display = 'none';
        }

        continueButton.style.display = 'none';
    }
    else {
    document.getElementById('myScore').innerHTML = myScore;
    document.getElementById('cpuScore').innerHTML = cpuScore;
    document.getElementById('ballPosition').innerHTML = ballPosition;
    updateImage();
    updateOptions();
    }
}

function updateImage() {
    let image = document.body;
 if(onOffense) {
    if(ballPosition === 5) {
        image.style.backgroundImage = "url('/photos/Offense\ possition\ 5.png')"
    }

    else if(ballPosition === 4) {
        image.style.backgroundImage = "url('/photos/Offense\ possition\ 4.png')"
    }

    else if(ballPosition === 3) {
        image.style.backgroundImage = "url('/photos/Offense\ possition\ 3.png')"
    }

    else if(ballPosition === 2) {
        image.style.backgroundImage = "url('/photos/Offense\ possition\ 2.png')"
    }

    else if(ballPosition === 1) {
        document.body.style.backgroundImage = "url('/photos/Offense\ possition\ 1.png')";
    }
 }

 else {
    if(ballPosition === 5) {
        image.style.backgroundImage = "url('/photos/Defense\ possition\ 5.png')"
    }

    else if(ballPosition === 4) {
        image.style.backgroundImage = "url('/photos/Defense\ possition\ 4.png')"
    }

    else if(ballPosition === 3) {
        image.style.backgroundImage = "url('/photos/Defense\ possition\ 3.png')"
    }

    else if(ballPosition === 2) {
        image.style.backgroundImage = "url('/photos/Defense\ possition\ 2.png')"
    }

    else if(ballPosition === 1) {
        image.style.backgroundImage = "url('/photos/Defense\ possition\ 1.png')"
    }
 }

   
}

function updateOptions() {
    let offenseOptions = document.querySelectorAll('.offenseOptions');
    let defenseOptions = document.querySelectorAll('.defenseOptions');
    let continueButton = document.getElementById('continueButton');

    continueButton.style.display = 'none';

    if(onOffense === false) {

        for(let i = 0; i < offenseOptions.length; i++) {
            offenseOptions[i].style.display = 'none';
        }

        for(let i = 0; i < defenseOptions.length; i++) {
            defenseOptions[i].style.display = 'inline';
        }

        document.getElementById('actionLog').innerHTML = "You Are On Defense. Select An Action.";
        // didHeShoot();
        
    }

    else if(onOffense === true) {
        for(let i = 0; i < offenseOptions.length; i++) {
            offenseOptions[i].style.display = 'inline';
        }

        for(let i = 0; i < defenseOptions.length; i++) {
            defenseOptions[i].style.display = 'none';
        }
        document.getElementById('actionLog').innerHTML = "You Are On Offense. Select An Action.";

    }
}

function pauseForReading() {
    let offenseOptions = document.querySelectorAll('.offenseOptions');
    let defenseOptions = document.querySelectorAll('.defenseOptions');
    let continueButton = document.getElementById('continueButton');

    for(let i = 0; i < offenseOptions.length; i++) {
        offenseOptions[i].style.display = 'none';
    }

    for(let i = 0; i < defenseOptions.length; i++) {
        defenseOptions[i].style.display = 'none';
    }

    continueButton.style.display = 'inline';

    continueButton.addEventListener('click', (event) => {
        updateEverything();
    })
}

function pauseIfHeShot() {
    let offenseOptions = document.querySelectorAll('.offenseOptions');
    let defenseOptions = document.querySelectorAll('.defenseOptions');
    let continueButton = document.getElementById('continueButton');

    for(let i = 0; i < offenseOptions.length; i++) {
        offenseOptions[i].style.display = 'none';
    }

    for(let i = 0; i < defenseOptions.length; i++) {
        defenseOptions[i].style.display = 'none';
    }

    continueButton.style.display = 'inline';

    continueButton.addEventListener('click', (event) => {
        continueButton.style.display = 'none';
        cpuShoot();
    })
}

function progressForMe() {
    if(ballPosition <= 1) {
        ballPosition = 1;
    }

    else {
        ballPosition = ballPosition - 1;
    }
}

function progreessForCpu() {
    if(ballPosition >= 5) {
        ballPosition = 5;
    }

    else {
        ballPosition = ballPosition + 1;
    }
}

function addToMyScore() {
    myScore = myScore + 1;
    if(myScore >= 5) {
        document.getElementById('actionLog').innerHTML = "GOAL!!!!!  Congratulations. You Won!";

        let offenseOptions = document.querySelectorAll('.offenseOptions');
        let defenseOptions = document.querySelectorAll('.defenseOptions');
        let continueButton = document.getElementById('continueButton');

        for(let i = 0; i < offenseOptions.length; i++) {
            offenseOptions[i].style.display = 'none';
        }

        for(let i = 0; i < defenseOptions.length; i++) {
            defenseOptions[i].style.display = 'none';
        }

        continueButton.style.display = 'none';
    }
}

function addToCpuScore() {
    cpuScore = cpuScore + 1;
    if(cpuScore >= 5) {
        document.getElementById('actionLog').innerHTML = "The CPU Shot and made A GOAL!!!! You Lost!";

        let offenseOptions = document.querySelectorAll('.offenseOptions');
        let defenseOptions = document.querySelectorAll('.defenseOptions');
        let continueButton = document.getElementById('continueButton');

        for(let i = 0; i < offenseOptions.length; i++) {
            offenseOptions[i].style.display = 'none';
        }

        for(let i = 0; i < defenseOptions.length; i++) {
            defenseOptions[i].style.display = 'none';
        }

        continueButton.style.display = 'none';
    }
}



