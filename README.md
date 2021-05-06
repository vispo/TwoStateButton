# TwoStateButton

 TwoStateButton by Jim Andrews, May, 2021. I used this in vispo.com/nio/neo
 Works with mouse or touch, and is accessible. The CSS for this element must 
 set the width and height of the button, and should set cursor to pointer. 
 The HTML element for the button must have a unique ID. This button, when 
 clicked once, stays down. Clicked again, it comes up. It's like a light 
 switch, or a radio box, or a play/pause button. It's on or off, checked or 
 unchecked, up or down. The button can be tabbed to and has the role=button
 aria attribute as well as a customizable aria-label. The aria-pressed attribute
 is maintained by the code. You can tab to the button; once there, the Enter
 key or the space key will 'click' it. TwoStateButton has 6 parameters:
 TwoStateButton(id, upImage, downImage, ariaLabel, title, callback)
    
    * id is the unique id of the existing element you want to be the button.
    * upImage is the path to the image for the button when it's up.
    * downImage is the path to the image for the button when it's down.
    * ariaLabel is the string that describes the button for accessibility.
    * title is the string that describes the button on mouseover.
    * callback is a function that gets called when the user changes the button.
    
    Example:
    
    ```
    var myButton = new TwoStateButton('bobButton', 'up.jpg', 'down.jpg', 'microphone', 'Turn mic on/off', function(down) {
            console.log('down: ' + down);
    })
    ```
