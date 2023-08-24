<!DOCTYPE html>
<html>
<head>
  <title>Counter (Task1)</title>
</head>
<body>
  <h1>Counter </h1>
  <p>Count: <span id="count">0</span></p>
  <button id="updateButton">Update Count</button>

  <script>
    const countElement = document.getElementById("count");
    const updateButton = document.getElementById("updateButton");
    let count = 0;

    function updateCountDisplay() {
      countElement.textContent = count;
    }

    // Function to handle the button click
    function updateCount() {
      count++;
      updateCountDisplay();
    }

   
    updateButton.addEventListener("click", updateCount);

  
    updateCountDisplay();
  </script>
</body>
</html>