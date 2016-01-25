window.onload = function() {
    var mazeSquares;
    $.get("https://s3-us-west-1.amazonaws.com/circleup-challenge/maze.json", function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(data);
        mazeSquares = data;
        draw();
    });

    var canvas = document.getElementById("canvas");

    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');

        for (var i in mazeSquares.maze) {
            for (var j in mazeSquares.maze[i]) {

                // console.log(mazeSquares.maze[i][j]);
                if (mazeSquares.maze[i][j] == true) {
                    // console.log('true');
                    ctx.fillStyle = "black";
                }
                if (mazeSquares.maze[i][j] == false) {
                    // console.log('false');
                    ctx.fillStyle = "white";
                }
                // console.log(j, i);
                ctx.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }

};