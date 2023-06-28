var timerInterval = null;
    var stopwatchInterval = null;
    
    function startTimer() {
      var timerElement = document.getElementById("timer");
      var time = parseInt(timerElement.innerHTML);
      
      if (isNaN(time)) {
        time = 0;
      }
      
      timerInterval = setInterval(function() {
        time++;
        timerElement.innerHTML = time;
      }, 1000);
      
      document.getElementById("startTimerButton").disabled = true;
      document.getElementById("stopTimerButton").disabled = false;
    }
    
    function stopTimer() {
      clearInterval(timerInterval);
      
      document.getElementById("startTimerButton").disabled = false;
      document.getElementById("stopTimerButton").disabled = true;
    }
    
    function startStopwatch() {
      var stopwatchElement = document.getElementById("stopwatch");
      var time = parseFloat(stopwatchElement.innerHTML);
      
      if (isNaN(time)) {
        time = 0.00;
      }
      
      stopwatchInterval = setInterval(function() {
        time += 0.01;
        stopwatchElement.innerHTML = time.toFixed(2);
      }, 10);
      
      document.getElementById("startStopwatchButton").disabled = true;
      document.getElementById("stopStopwatchButton").disabled = false;
    }
    
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      
      document.getElementById("startStopwatchButton").disabled = false;
      document.getElementById("stopStopwatchButton").disabled = true;
    }