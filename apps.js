function displayDiv(id){
    var x = document.getElementById(id);
    if (x.style.display === ""){
        x.style.display = "block";
            } else {
                x.style.display = "";
    }

}

var quotes = [
    "'What you're looking for, you're looking with.'<br><br>-Anonymous",
    "'Funny is funny.'<br><br>-Don Rickles",
    "'The best way out is always through.' <br><br>-Robert Frost",
    "'I know you've heard it a thousand times before. But it's true - hard work pays off. If you want to be good, you have to practice, practice, practice. If you don't love something, then don't do it.' <br><br>-Ray Bradbury",
    "'The merit of originality is not novelty; it is sincerity.' <br><br>-Thomas Carlyle",
    "'As soon as you have made a thought, laugh at it.' <br><br>-Lao Tzu",
    "'Don't be afraid to change the model.'<br><br>-Reed Hastings",
    "'The internet is a great way to get on the net.'<br><br>-Bob Dole",
    "'Biology is the most powerful technology created. DNA is software, protein are hardware, cells are factories.' <br><br>-Arvind Gupta",
    "'Technology, like art, is a soaring exercise of the human imagination.' <br><br>-Daniel Bell",
    "'Be so good they can't ignore you.' <br><br>-Steve Martin",
    "'You never get tired unless you stop and take time for it'<br><br>- Bob Hope",
    "'It is better to fail in originality than to succeed in imitation'<br><br>-Herman Melville",
    "'Success usually comes to those who are too busy to be looking for it.'<br><br>-Henry David Thoreau",
    "'Don't wish it were easier, wish you were better.'<br><br>-Jim Rohn",
    "'If you really look closely, most overnight successes took a long time.'<br><br>-Steve Jobs",
    "'In life you need either inspiration or desperation.'<br><br>- Tony Robbins",
    "'We know what we are, but we know not what we may be.'<br><br>-William Shakespeare",
    "'Don't practice things that you do not want to become.'<br><br>- Jordan Peterson",
    "'I'm against picketing, but I don't know how to show it.'<br><br>-Mitch Hedberg",
    "'It takes considerable knowledge just to realize the extent of your own ignorance.'<br><br>-Thomas Sowel"
]


//Thanks @visph
function newQuote(){
    if (!quotes.length) {
        quotes = done;
        done = [];
    }

    var randomNumber = Math.floor(Math.random() * (quotes.length));

    out.innerHTML = quotes[randomNumber];
    done.push(quotes.splice(randomNumber,1));
}

var out, done = [];
window.onload = function() {
    // initialization of targeted output element global ref
    out = document.getElementById('quotes');
}
