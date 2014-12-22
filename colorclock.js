

/**
 * Calculate rgb values
 * 
 * @param  {double}  time     Value between 0...1 representing the current moment of the day
 * @return {[int, int, int]}  [red, green, blue] 0...255
 */
function rgb( time ) {

    time = time * 60;

    var red   = 0.0;
    var green = 0.0;
    var blue  = 0.0;
    
    if (time >= 0 && time <= 10) {
        red   = 255;
        green = 0;
        blue  = time / 10 * 255;
    }

    else if (time > 10 && time <= 20) {
        red   = 255 - (time - 10) / 10  * 255;
        green = 0;
        blue  = 255;
    }

    else if (time > 20 && time <= 30) {
        red   = 0;
        green = (time - 20) / 10 * 255;
        blue  = 255;
    }

    else if (time > 30 && time <= 40) {
        red   = 0;
        green = 255;
        blue  = 255 - (time - 30) / 10  * 255;
    }

    else if (time > 40 && time <= 50) {
        red   = (time - 40) / 10 * 255;
        green = 255;
        blue  = 0;
    }

    else if (time > 50 && time <= 60) {
        red   = 255;
        green = 255 - (time - 50) / 10 * 255;
        blue  = 0;
    }

    return [
        Math.round(red),
        Math.round(green),
        Math.round(blue)
    ];

}

/**
 * Calculates the current position of the day (00:00 - 24:00)
 * @param  {int}     hours
 * @param  {int}     minutes
 * @param  {int}     seconds
 * @return {double}  value between 0 ... 1
 */
function scaleTime( hours, minutes, seconds ) {
    return (hours * 3600 + minutes * 60 + seconds) / (24 * 3600);
}

/**
 * Gets the current time and updates background color and indicator position
 */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var scaled = scaleTime(h, m, s);

    var color = rgb(scaled);
    var rgbstring = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";

    $("body").css("background-color", rgbstring );
    $("#now").css("left", scaled*100 +"%");

    setTimeout(function(){ startTime() }, 500);
}

