export function create() {

    let
        characters = [
            '=', ' ', 'b', 'y', ' ',
            'N', 'a', 't', 'h', 'a', 'n', ' ',
            'B', 'o', 't', 'e', 'l', 'h', 'o'
        ],
        buttons = [
            // <div class="button" id="button-scenery"> Scenery </div>
            // <div class="button" id="button-background"> Background </div>
            // <div class="button" id="button-carcolor"> Car color </div>
            // <div class="button" id="button-speed"> Speed </div>
        ],
        text = [],
        elements = [
            // <div class="speed"></div>
            // <div class="sky"></div>
            // <div class="sea"></div>

            // <div class="cloud-1"></div>
            // <div class="cloud-2"></div>
            // <div class="cloud-3"></div>

            // <div class="mountain"></div>
            // <div class="sun"></div>
            // <div class="moon"></div>
            // <div class="island"></div>

            // <div class="fence"></div>
            // <div class="road"></div>
            // <div class="ink"></div>

            // <div class="tree-1"></div>
            // <div class="tree-2"></div>
            // <div class="tree-3"></div>
            // <div class="tree-4"></div>

            // <div class="car"></div>
        ],
        log = ''

    for (let i = 0; i < characters.length; i++) {
        log += (i === 0) ?
            new Array(27)
                .fill(characters[i])
                .join('') :
            characters[i]
    }

    console.log(log)

    //  // Create anchor element. 
    //  var a = document.createElement('a');  

    //  // Create the text node for anchor element. 
    //  var link = document.createTextNode("This is link"); 

    //  // Append the text node to anchor element. 
    //  a.appendChild(link);  

    //  // Set the title. 
    //  a.title = "This is Link";  

    //  // Set the href property. 
    //  a.href = "https://www.geeksforgeeks.org";  

    //  // Append the anchor element to the body. 
    //  document.body.appendChild(a);  


}