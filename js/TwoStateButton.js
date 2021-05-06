/*
    TwoStateButton by Jim Andrews, April, 2021. I used this in vispo.com/nio/neo
    Works with mouse or touch, and is accessible. The CSS for this element must 
    set the width and height, and should set cursor to pointer. The HTML element
    for the button must have a unique ID. This button, when clicked once, stays 
    down. Clicked again, it comes up. It's like a light switch, or a radio box,
    or a play/pause button. It's on or off, checked or unchecked, up or down. 
    Example: 
    var myButton = new TwoStateButton('bobButton', 'up.jpg', 'down.jpg', 'microphone', 'Turn mic on/off', function(down) {
            whatever;
    })
*/

function TwoStateButton(id, upImage, downImage, ariaLabel, title, callback) {
    /* 
    -- id is the id of the DOM element that is the button.
    -- upImage is the path to the graphic displayed when user does not have mousedown.
    -- downImage is the path to the graphic displayed when user presses mouse or touches button.
    -- ariaLabel is the string used to describe the button for screenreaders. For instance, if
       the button is a play/pause button, ariaLabel should be "toggle play"
    -- title is the string that appears when you mouseover the button.
    -- callback is called after button is clicked. It takes at least one parameter,
       a boolean, that indicates if the button is down (true) or up (false).
    */
    var b = document.getElementById(id); // b for button 
    b.style.backgroundImage = "url(" + downImage + ")";
    b.style.backgroundImage = "url(" + upImage + ")";
    b.down = false;
    b.setAttribute("aria-pressed", b.down);
    b.addEventListener("mousedown", mDown, false);
    b.addEventListener("touchstart", mDown, false);
    b.addEventListener("keydown", kDown, false);
    b.setAttribute("role", "button");
    b.setAttribute("aria-label", ariaLabel);
    b.setAttribute("tabindex", 0);

    this.element = b;
    
    this.setDown = function(aBoolean) {
        // aBoolean = true means button is set to down or pressed.
        b.down = aBoolean;
        b.setAttribute("aria-pressed", aBoolean);
        setImage();
    }

    this.getDown = function() {
        // Returns a boolean indicating if button is down.
        return b.down;
    }

    function mDown(e) {
        // Runs when mouse goes down or touch starts.
        b.style.backgroundImage = "url(" + downImage + ")";
        window.addEventListener("mouseup", mUp, false);
        window.addEventListener("touchend", mUp, false);
    }

    function mUp(e) {
        // Runs when mouse goes up or touch ends.
        var bRect = b.getBoundingClientRect();
        if (e.clientX >= bRect.left && e.clientX <= bRect.left + bRect.width && e.clientY >= bRect.top && e.clientY <= bRect.top + bRect.height) {
            toggleValue();
            callback(b.down);
        }
        setImage();
        window.removeEventListener("mouseup", mUp);
        window.removeEventListener("touchend", mUp);
    }

    function kDown(e) {
        // Runs when the 'Enter' or space keys are pressed when this button has focus.
        if (e instanceof KeyboardEvent && e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        toggleValue();
        setImage();
        callback(b.down)
    }

    function toggleValue() {
        // Toggles b.down and 'aria-pressed'
        b.down = !b.down;
        b.setAttribute("aria-pressed", b.down);
    }

    function setImage() {
        // Sets the button's background image.
        if (b.down) {
            b.style.backgroundImage = "url(" + downImage + ")";
        }
        else {
            b.style.backgroundImage = "url(" + upImage + ")";
        }
    }
}