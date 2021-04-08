class Timer{
  constructor(selector, countdown) {
    this.elem = document.querySelector(selector);
    this.countdown = countdown;
   
  }
  getSec() {
    return Math.floor((this.countdown % (1000 * 60)) / 1000);
   }
  getMin() {
    return Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
   }
  getHours() {
    return Math.floor((this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   }
  getDays() {
    return Math.floor(this.countdown / (1000 * 60 * 60 * 24));
   }
  render() {
    this.elem.innerHTML =
      `<div class="field">
            <span class="value" data-value="days">${this.getDays()}</span>
            <span class="label">Days</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="hours">${this.getHours()}</span>
            <span class="label">Hours</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="mins">${this.getMin()}</span>
            <span class="label">Minutes</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="secs">${this.getSec()}</span>
            <span class="label">Seconds</span>
        </div>`
  }
  init() {
    const intervalId = setInterval(() => {
      this.countdown -= 1000;
      if (this.countdown <= 0) {
        this.countdown = 0;
        clearInterval(intervalId);
      }
      this.render()
    }, 1000)
  }
};

const timer = new Timer('#timer-1', 100000000);
timer.init();
