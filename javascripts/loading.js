function loaded() {
  setTimeout(function() {
    document.getElementById('loader').className = 'hide';
    document.getElementById('wrapper').className = 'wrapper show';
  }, 150)
}
