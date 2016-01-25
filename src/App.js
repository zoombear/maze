window.onload = function(){
    $.get("https://s3-us-west-1.amazonaws.com/circleup-challenge/maze.json", function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(data);
    });
};