/*
    TwoStateButton by Jim Andrews, April, 2021. I used this in vispo.com/nio/neo
    Works with mouse or touch, and is accessible. The CSS for this element must 
    set the width and height, if you use images, and should set cursor to pointer. 
    The HTML element for the button must have a unique ID. This button, when 
    clicked once, stays down. Clicked again, it comes up. It's like a light switch, 
    or a radio box, or a play/pause button. It's on or off, checked or unchecked, 
    up or down. 
    Example: 
    var myButton = new TwoStateButton('bobButton', 'up.jpg', "", 'down.jpg', "", 'microphone', 'Turn mic on/off', function(down) {
            whatever;
    })
*/

function TwoStateButton(id, upImage, upText, downImage, downText, ariaLabel, title, callback) {
    /* 
    -- id is the id of the DOM element that is the button.
    -- upImage is the path to the graphic displayed when user does not have mousedown.
       Use "" if there is no up image.
    -- upText is the string that displays on the button when it is up.
       Use "" if there is no upText.
    -- downImage is the path to the graphic displayed when user presses mouse or touches button.
       Use "" if there is no down image.
    -- downText is the string that displays when the button is down.
    -- ariaLabel is the string used to describe the button for accessibility.
       Use "" if there is no ariaLabel
    -- title is the string that displays near the button on mouseover.
       Use "" if there is no title.
    -- callback is called after button is clicked. It takes at least two parameters.
       a boolean, that indicates if the button is down (true) or up (false).
    */
    var b = document.getElementById(id); // b for button 
    if (downImage) b.style.backgroundImage = "url(" + downImage + ")";
    if (upImage) b.style.backgroundImage = "url(" + upImage + ")";
    b.down = false;
    b.downText = downText;
    b.upText = upText || b.textContent;
    b.setAttribute("aria-pressed", b.down);
    b.addEventListener("mousedown", mDown, false);
    b.addEventListener("touchstart", mDown, false);
    b.addEventListener("keydown", kDown, false);
    b.setAttribute("role", "button");
    if (ariaLabel) b.setAttribute("aria-label", ariaLabel);
    if (title) b.setAttribute("title", title);
    b.setAttribute("tabindex", 0);

    this.element = b;
    
    this.setDown = function(aBoolean) {
        // aBoolean = true means button is set to down or pressed.
        b.down = aBoolean;
        b.setAttribute("aria-pressed", aBoolean);
        setImage();
        if (aBoolean) {
            if (b.downText) {
                b.textContent = b.downText;
            }
        }
        else {
            if (b.upText) {
                b.textContent = b.upText;
            }
        }
    }

    this.getDown = function() {
        // Returns a boolean indicating if button is down.
        return b.down;
    }

    function mDown(e) {
        // Runs when mouse goes down or touch starts.
        if (downImage) b.style.backgroundImage = "url(" + downImage + ")";
        if (b.downText) b.textContent = b.downText;
        var t1 = window.removeEventListener("mouseup", mUp, {passive: true});
        var t2 = window.removeEventListener("touchend", mUp, {passive: true});
        console.log('mUp removed via mouseup: ' + t1 + ' mUp removed via touchend: ' + t2);
        window.addEventListener("mouseup", mUp, {passive: true});
        window.addEventListener("touchend", mUp, {passive: true});
        //e.preventDefault(); Causes Android problems
    }

    function mUp(e) {
        // Runs when mouse goes up or touch ends.
        var bRect = b.getBoundingClientRect();
        if (e.clientX >= bRect.left && e.clientX <= bRect.left + bRect.width && e.clientY >= bRect.top && e.clientY <= bRect.top + bRect.height) {
            toggleValue();
            callback(e, b.down);
        }
        setImage();
        if (b.down) {
            b.textContent = b.downText;
        }
        else {
            b.textContent = b.upText;
        }
        window.removeEventListener("mouseup", mUp, {passive: true});
        window.removeEventListener("touchend", mUp, {passive: true});
        //console.log(b.down);
    }

    function kDown(e) {
        // Runs when the 'Enter' or space keys are pressed when this button has focus.
        if (e instanceof KeyboardEvent && e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        toggleValue();
        setImage();
        callback(e, b.down)
    }

    function toggleValue() {
        // Toggles b.down and 'aria-pressed'
        b.down = !b.down;
        b.setAttribute("aria-pressed", b.down);
    }

    function setImage() {
        // Sets the button's background image.
        if (b.down) {
            if (downImage) b.style.backgroundImage = "url(" + downImage + ")";
        }
        else {
            if (upImage) b.style.backgroundImage = "url(" + upImage + ")";
        }
    }
}