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

    this.msbInputIds = ["minMSB", "secMSB"];
    this.lsbInputIds = ["minLSB", "secLSB"];

    this.minutes = 0;
    this.seconds = 0;

    this.intervalId = null;

    this.onClick = this.onClick.bind(this);
    this.onInput = this.onInput.bind(this);

    this.display.addEventListener("input", this.onInput);
    document.body.addEventListener("click", this.onClick);
  }

  onClick(event) {
    // if (event.target.tagName === "INPUT") event.target.select();
    if (event.target.id === "start") this.onStart(event);
    else if (event.target.id === "stop") this.onStop(event);
    else if (event.target.id === "reset") this.onReset(event);
  }

  onStart() {
    this.setControls(true, false);
    this.display.classList.add("progress");
    this.setInputsDisabledStatus(true);
    this.setTime();
    this.startTimer();
  }

  onStop() {
    this.setControls(false, true);
    this.display.classList.remove("progress");
    this.setInputsDisabledStatus(false);
    clearInterval(this.intervalId);
  }

  onReset() {
    this.setControls(false, true);
    this.resetControls();
    this.resetTimerValue();
  }

    setControls(startStatus = false, stopStatus = false) {
    this.start.disabled = startStatus;
    this.stop.disabled = stopStatus;
  }

  onInput(event) {
    const value = Number(event.data);

    if (Number.isInteger(value)) {
      if (this.msbInputIds.includes(event.target.id)) {
        this.onValueEntry(this.minMSB, this.secMSB, value);
      } else if (this.lsbInputIds.includes(event.target.id)) {
        this.onValueEntry(this.minLSB, this.secLSB, value);
      }
    }
  }

  onValueEntry(targetMSB, targetLSB, value) {
    if (value >= 0 && value <= 5) {
      targetMSB.value = value;
      targetLSB.focus();
      targetLSB.select();
    } else {
      targetMSB.value = 0;
      targetMSB.select();
    }
  }

  setInputsDisabledStatus(isDisabled = false) {
    this.minMSB.disabled = isDisabled;
    this.minLSB.disabled = isDisabled;
    this.secMSB.disabled = isDisabled;
    this.secLSB.disabled = isDisabled;
  }

  resetControls() {
    clearInterval(this.intervalId);
    this.display.classList.remove("progress");
    this.setInputsDisabledStatus(false);
  }

  resetTimerValue() {
    this.minMSB.value = 0;
    this.minLSB.value = 0;
    this.secMSB.value = 0;
    this.secLSB.value = 0;
  }

  setTime() {
    this.minutes =
      parseInt(this.minMSB.value) * 10 + parseInt(this.minLSB.value);
    this.seconds =
      parseInt(this.secMSB.value) * 10 + parseInt(this.secLSB.value);
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
    [this.minMSB.value, this.minLSB.value] = String(mins).padStart(2, "0");
    [this.secMSB.value, this.secLSB.value] = String(secs).padStart(2, "0");
  }

}// End of Timer class.

const timer = new Timer(
  "minMSB",
  "minLSB",
  "secMSB",
  "secLSB",
  "start",
  "stop",
  "reset",
  "display"
);