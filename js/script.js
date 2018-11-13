$(function() {
		
			//user input minutes & store it in a variable
			let userInput = 0;

			$('#add').on('click', function(){

				userInput = userInput + 1;
				$('.addedMinutes').text(userInput)

			});
			$('#subtract').on('click', function(){
				userInput = userInput - 1;
				$('.addedMinutes').text(userInput)
			})

			$('#clock').on('click', function(e){
				e.preventDefault();			

			//convert user input from string to number, and then to miliseconds
			let timeStart = userInput * 60 * 1000;
			
			function timeRemained(){				
				//calculate the time remained
				timeStart = timeStart - 1000;	
				//change background to orange when 10 seconds remained
				if (timeStart < 11 * 1000){
					$('body').css('background','orange');
				}
				//change background to red when 0 seconds remained
				if (timeStart === 0){
					$('body').css('background','red');
					//stop count when time remained reach 0
					clearInterval(count);
				} 	
				
				//convert timeStart to minutes and seconds
				let minutes = Math.floor(timeStart/(60*1000));
				let seconds = Math.floor((timeStart-(minutes*60*1000))/1000);
				//display time remained in minutes and seconds
				$('.timeDisplay').text(`${minutes} minutes ${seconds} seconds remained`);
				
			}

			//repeat timeRemained every second
			let count = setInterval(timeRemained, 1000);

		});
			
		});
		