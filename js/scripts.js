console.log("Hi World! Welcome to My Portfolio Site. Take a look around, I hope you enjoy my Worker!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle' && $(window).width() <640) {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }