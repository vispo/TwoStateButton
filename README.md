# TwoStateButton

 by Jim Andrews. 
 
 ## Description  
 I used an earlier version of this in [NeoNio](http://vispo.com/nio/neo).  
 Works with mouse or touch, and is accessible. This button, when 
 clicked once, stays down. Clicked again, it comes up. It's like a light 
 switch, or a radio box, or a play/pause button. It's on or off, checked or 
 unchecked, up or down. The button can be tabbed to and has the role=button
 aria attribute as well as a customizable aria-label. The aria-pressed attribute
 is maintained by the code. You can tab to the button; once there, the Enter
 key or the space key will 'click' it.  
 
 ## Installation  
 Link to TwoStateButton.js in the head of the HTML file.  
 
 ## Usage  
 The CSS for this element must 
 set the width and height of the button, 
 if you use an upImage and downImage; 
 set the CSS cursor property  
 to pointer, in any case.  
 Text buttons, ie,  
 <div class="TwoStateButton" role="button" aira-label="Sound" tabindex="0">Play</div>  
 where the button displays text  
 ("Play", in the above)  
 are supported  
 as well as graphic buttons.  
 The HTML element for the button must  
 have a unique ID. Do not call  
 TwoStateButton before  
 the button's HTML element exists.  
 
 TwoStateButton has 6 parameters:  
 
     TwoStateButton(id, upImage, downImage, ariaLabel, title, callback)
    
 * id is the unique id of the existing element you want to be the button.
 * upImage is the path to the image for the button when it's up. Use "" if there is no upImage.
 * downImage is the path to the image for the button when it's down. Use "" if there is no downImage.
 * ariaLabel is the string that describes the button for accessibility. Use "" if there is no ariaLabel.
 * title is the string that describes the button on mouseover. Use "" if there is no title
 * callback is a function that gets called when the user changes the button's state.  
 
 Example: 
 
    var myButton = new TwoStateButton('bobButton', 'up.jpg', 'down.jpg', 'microphone', 'Turn mic on/off', function(down) {
        console.log('down: ' + down);
    })  

There are three methods: 

    myButton.element is the DOM button  
    myButton.setDown(boolean) sets whether the button is down (true) or not (false)
    myButton.getDown() Does the funky chicken. Just kidding. Returns a boolean as to whether the button is down (true) or not (false).
