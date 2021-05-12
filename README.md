# TwoStateButton

 by Jim Andrews. 
 
 ## Description  
 I used this in [NeoNio](http://vispo.com/nio/neo) for the on the sound icons in verse 1 and for several blue buttons in both verse 1 and verse 2.  
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
 The CSS for this element  
 must set the width and height of the button,  
 if you use an upImage and downImage;   
 set the CSS cursor property  
 to pointer, in any case.  
 Text buttons, ie,  
 &lt;div class="TwoStateButton" role="button" aria-label="Sound" tabindex="0"&gt;Play&lt;/div&gt;  
 where the button displays text  
 ("Play", in the above)  
 are supported  
 as well as graphic buttons.  
 TwoStateButton code inserts role="button" and tabindex="0"  
 in its buttons, and will also insert aria-label and title properties  
 if you specify non-empty values  
 for ariaLabel and title parameters.  
 The HTML element for the button must  
 have a unique ID. Do not call  
 TwoStateButton before  
 the button's HTML element exists.  
 
 TwoStateButton has 8 parameters:  
 
     TwoStateButton(id, upImage, upText, downImage, downText, ariaLabel, title, callback)
    
 * id is the unique id of the existing element you want to be the button.
 * upImage is the path to the image for the button when it's up. Use "" if there is no upImage.
 * upText is the text (if any) that is displayed when the button is up. Use "" if there is no upText.
 * downImage is the path to the image for the button when it's down. Use "" if there is no downImage.
 * downText is the text (if any) that is displayed when the button is down. Use "" if there is no downText.
 * ariaLabel is the string that describes the button for accessibility. Use "" if there is no ariaLabel.
 * title is the string that describes the button on mouseover. Use "" if there is no title
 * callback is a function that gets called when the user changes the button's state.  
 
 Example: 
 
    var mic = new TwoStateButton('bobButton', 'up.jpg', '', 'down.jpg', '', 'microphone', 'Turn mic on/off', function(event, down) {
        console.log('button id:' + event.target.id + ' down: ' + down);
    })

There are three methods: 

    myButton.element is the DOM button  
    myButton.setDown(boolean) sets whether the button is down (true) or not (false)
    myButton.getDown() Does the funky chicken. Just kidding. Returns a boolean as to whether the button is down (true) or not (false).
