 /* ADDED LINE NUMBERING TO THE CODEBLOCKS with 'show-line-numbers' */
 
 window.addEventListener('DOMContentLoaded', (event) => {
    // Create a NodeList of all elements with the class 'show-line-numbers'
    let codeBlocks = document.querySelectorAll('.show-line-numbers');

    // Iterate over each element in the NodeList
    codeBlocks.forEach(function(codeBlock) {
        // Split the innerHTML of the code block into an array by line breaks
        let lines = codeBlock.innerHTML.split('\n');
        let numberedLines = '';

        // Iterate over each line
        lines.forEach(function(line, index) {
            // If the line is not empty, wrap it with a span and prepend the line number
            if(line.trim() !== '') {
                numberedLines += '<span class="num">' + line + '</span>\n';
            }
        });

        // Replace the innerHTML of the codeBlock element with the new numbered lines
        codeBlock.innerHTML = numberedLines;
    });
});
