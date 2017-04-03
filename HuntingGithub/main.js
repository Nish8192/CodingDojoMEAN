$(document).ready(function(){
    button = document.getElementById('button1');
    button.addEventListener("click", showName);
    function showName(){
        $.get("https://api.github.com/users/nish8192", displayName)
}
        function displayName(data) {
          element = document.getElementById('newDiv');
          element.append(
              `${data.name}`
          );
        }
    })
