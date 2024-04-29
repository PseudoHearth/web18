var fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'];
        var sizes = ['14px', '16px', '18px', '20px', '22px'];
        function getRandomFont() {
            return fonts[Math.floor(Math.random() * fonts.length)];
        }

        function getRandomSize() {
            return sizes[Math.floor(Math.random() * sizes.length)];
        }

        function generateRandomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }

        function numberClicked(event) {
            var selectedNumber = parseInt(event.target.innerText);
            if (selectedNumber === clickedNumbers.length + 1) {
                event.target.style.color = "#F0FFFF";
                clickedNumbers.push(selectedNumber);
                if (clickedNumbers.length === 25) {
                    alert("Ви виграли! Вітаємо!");
                    clearInterval(timerInterval);  
                    location.reload();       
                }
            } else {
                alert("Не вірне число! Спробуйте ще раз.");
            }
        }
    
        function shuffleNumbers() {
            var numbers = [];
            for (var i = 1; i <= 25; i++) {
                numbers.push(i);
            }
            for (var i = numbers.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }
            return numbers;
        }

        var gameBoard = document.getElementById("game-board");
        var clickedNumbers = [];
        var shuffledNumbers = shuffleNumbers();
        for (var i = 0; i < 25; i++) {
            var number = shuffledNumbers[i];
            var numberBlock = document.createElement("div");
            numberBlock.textContent = number;
            numberBlock.classList.add("number-block");
            numberBlock.style.fontFamily = getRandomFont();
            numberBlock.style.fontSize = getRandomSize();
            numberBlock.style.color = generateRandomColor(); 
            numberBlock.addEventListener("click", numberClicked);
            gameBoard.appendChild(numberBlock);
        }

    
        var timeDisplay = document.getElementById("time-remaining");
        var timerInterval = setInterval(function() {
            var timeLeft = parseInt(timeDisplay.innerText);
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
                alert("Час вичерпано! Гра завершена.");
            } else {
                timeDisplay.innerText = timeLeft;
            }
        }, 1000);
        document.getElementById("restart-button").addEventListener("click", function() {
            location.reload(); 
        });