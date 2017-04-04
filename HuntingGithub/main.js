$(document).ready(function(){
    button = document.getElementById('button1');
    button.addEventListener("click", showName);
    function showName(){
        // textBox = document.getElementById('userName');
        var userName = $('#userName').val();
        $.get(`https://api.github.com/users/${userName}`, displayName)
}
        function displayName(data) {
          element = document.getElementById('newDiv');
          element.append(
              `${data.name}`
          );
        }
    })
