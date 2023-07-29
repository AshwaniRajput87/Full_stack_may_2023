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


        // I need use it to check or match the value from minMSB/minLSB or secMSB/secLSB
        this.msbInputIds = ['minMSB', 'minLSB'];
        this.lsbInputIds = ['secMSB', 'secLSB'];

        this.minutes = 0;
        this.seconds = 0;

        this.onClick = this.onClick.bind(this);
        this.onInput = this.onInput.bind(this);
        console.log('Timer')  
    }

    onClick() {
      
    }

    onInput() {

    }

}


// Using Class Timer

new Timer('minMSB', 'minLSB', 'secMSB', 'secLSB', 'start', 'stop', 'reset', 'display');