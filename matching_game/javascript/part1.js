var colors = ['red', 'blue', 'pink', 'orange', 'cyan', 'magenta', 'maroon', 'green', 'yellow'];
var guesses = 0;
var finished = false;

function do_game() {
    var target = Math.floor(Math.random() * (colors.length - 1));
    var target_color = colors[target];
    var list = '';

    console.log(target_color);
    //alert("target color: " + target_color);

    colors.forEach(function color_list(value) {
        list += value + ' ';
    });

    console.info(list);
    //alert(list);

    while(!finished) {
        var guess_input_text = prompt("I am thinking of one of these colors: \n\n" +
            list + "\n\n" +
            "What color am I thinking of: ");

        guesses += 1;
        finished = check_guess();
    }

}

function check_guess() {
    if( colors.indexOf("guess_input_text") == -1 ) {
        console.log("Sorry, I don't recognize your color \n\n Please try again");
        return false;
    }
    return true;
}