export function Clock(output) {
    this.output = output;
    this.toString = function()
    {
        let time = new Date();
        let prems = Math.round(time.getMilliseconds() / 100);
        let ms = prems > 9 ? prems : "0" + prems;
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let h = time.getHours();
        return `${h} : ${min} : ${sec} : ${ms}`;
    };
    this.show = function()
    {
        // output.innerHTML = this.time;
        this.output.innerText = this.toString();
    };
    this.start = function()
    {
        if (!this.timerId)
        this.timerId = setInterval(() => {this.show();}, 10);
    };
}