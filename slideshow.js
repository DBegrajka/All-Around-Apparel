<<<<<<< HEAD
  
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdrown-menu').toggle();
    });
};

=======
  
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdrown-menu').toggle();
    });
};

>>>>>>> b06078d83e28fbfaaac5bc8ca20ca68f42343034
$(document).ready(main);