/***
 *  Real use cases:
 *     - deals on e-commerce website
 *     - online tests
 *     - OTP resend
 * 
 *  Requirements:
 *     - you need a timer in HH: MM: SS
 *     - you should validatee the input values taken for HH: MM: SS
 *     - play and pause
 *     - reset the timer
 * 
 *   Inputs:
 *     - MM:SS -> 25:30
 *     - if i click on start button, timer has to start, decrement the values in seconds and mintutes
 *       if timer gets started then disabled the input fields of MM:SS
 *       disabled your start button and enable yours stop, so that you can stop the timer
 *     - if you click on reset button, all the input field has to be set by 00:00
 *     - input validation 
 *        - MM: 0-5(tens place) and 0-9(unit place)
 *        - SS: 0-5(tens place) and 0-9(unit place)
 *     - reusablitity of your code and your must be maintainable easily
 */

class Timer {
    constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display) {
        this.minMSB = document.getElementById(minMSB);
        this.minLSB = document.getElementById(minLSB);
        this.secMSB = document.getElementById(secMSB);
        this.secLSB = document.getElementById(secLSB);

        this.start = document.getElementById(start);
        this.stop = document.getElementById(stop);
        this.reset = document.getElementById(reset);
        this.display = document.getElementById(display);

        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;

        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onInput = this.onInput.bind(this);

        this.start.addEventListener('click', this.onStart);
        this.stop.addEventListener('click', this.onStop);
        this.reset.addEventListener('click', this.onReset);

        this.display.addEventListener('input', this.onInput);        
    }

    onStart() {
        this.setControls(true, false);
        this.display.classList.add('progress');
        this.setTime();
        this.startTimer();
    }

    onStop() {
        this.setControls(false, true);
        this.display.classList.remove('progress');
        clearInterval(this.intervalId);
    }

    onReset() {
        // this.display.classList.remove('progress');
        // this.setControls(false, true);
        // clearInterval(this.intervalId);
        this.onStop();
        this.resetTimer();
    }

    onInput(event) {
        // console.log(event.data);
        const value = Number(event.data);

        if (Number.isInteger(value)) {
            if (this.minMSB === document.activeElement) {
                this.onValueEntry(this.minMSB, this.minLSB, value, 0, 5);
            } else if (this.minLSB === document.activeElement) {
                this.onValueEntry(this.minLSB, this.secMSB, value, 0, 9);
            } else if (this.secMSB === document.activeElement) {
               this.onValueEntry(this.secMSB, this.secLSB, value, 0, 5); 
            } else if (this.secLSB === document.activeElement) {
                this.onValueEntry(this.secLSB, null, value, 0, 9);
            }
            
        }

    }
    
    onValueEntry(target, nextTarget, value, minAllowed, maxAllowed) {
        if (value >= minAllowed && value <= maxAllowed) {
           // To do
            target.value = value;
            if (nextTarget) {
                nextTarget.focus();
                nextTarget.select();
            }
        } else {
            target.value = 0;
            target.select();
       }
    }

    setTime() {
        this.minutes = parseInt(this.minMSB.value) * 10 + parseInt(this.minLSB.value);
        this.seconds = parseInt(this.secMSB.value) * 10 + parseInt(this.secLSB.value);
    }

    startTimer() {
        if (this.minutes === 0 && this.seconds === 0) {
            this.onReset();
            return;
        }
    
        this.intervalId = setInterval(() => {
            this.seconds -= 1;

            if (this.seconds < 0) {
                this.seconds = 59;
                this.minutes -= 1;
            }

            if (this.minutes === 0 && this.seconds === 0) {
                this.onReset();
            }

            this.setDisplay(this.minutes, this.seconds);
            
        }, 1000);
    }

    setDisplay(mins, secs) {
        this.minMSB.value = String(Math.floor(mins / 10));
        this.minLSB.value = String(mins % 10);
        this.secMSB.value = String(Math.floor(secs / 10));
        this.secLSB.value = String(secs % 10);
    }

    setInputsDisabledStatus() {


    }

    setControls(startStatus = false, stopStatus = false) {
        this.start.disabled = startStatus;
        this.stop.disabled = stopStatus;
    }

    resetTimer() {
        this.minLSB.value = 0;
        this.minMSB.value = 0;
        this.secLSB.value = 0;
        this.secMSB.value = 0;
    }

}


// Using Class Timer
new Timer('minMSB', 'minLSB', 'secMSB', 'secLSB', 'start', 'stop', 'reset', 'display');





