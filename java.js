
	  function toggleDarkMode() {
		const body = document.body;
		body.classList.toggle("dark-mode");
	  }
  
	  function toggleTextOnlyMode() {
		const body = document.body;
		body.classList.toggle("battery-optimized-mode");
	  }
  
	  function toggleBatteryOptimizedMode() {
		const body = document.body;
		body.classList.toggle("text-only-mode");
	  
		if (navigator.getBattery) {
		  navigator.getBattery().then(function(battery) {
			if (battery.level < 0.1) {
			  body.classList.add("battery-optimized-mode");
			  body.style.opacity = "0.5";
			} else {
			  body.classList.toggle("battery-optimized-mode");
			  body.style.opacity = "1";
			}
		  });
		}
	  
		// Automatically switch to battery optimized mode when battery falls below 10%
		if (navigator.getBattery) {
		  navigator.getBattery().then(function(battery) {
			if (battery.level < 0.1 && !body.classList.contains("battery-optimized-mode")) {
			  body.classList.add("battery-optimized-mode");
			  body.style.opacity = "0.5";
			}
		  });
		}
	  }
	  
	  // Check the battery level periodically (e.g., every minute) to see if it falls below 10%
	  setInterval(function() {
		if (navigator.getBattery) {
		  navigator.getBattery().then(function(battery) {
			if (battery.level < 0.1) {
			  toggleBatteryOptimizedMode();
			}
		  });
		}
	  }, 60000); // 60000 milliseconds = 1 minute
	  