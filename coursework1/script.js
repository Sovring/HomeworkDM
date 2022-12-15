'use strict'
window.onload = load;
const Week = 604800000;
const Month = 2592000000;
let CalculationResultStorage = [];

let FirstDate;
let SecondDate;

let DataInputs = document.getElementsByClassName("data-input");


 DataInputs[1].addEventListener('input', function(event){

 	if (DataInputs[0].value == '' && DataInputs[1] !== '') {
	console.log("no first input")
 	} else if (DataInputs[1] !== '' && DataInputs[0] !== '' ) {
 		console.log("both inputs");
 	}
})





function CalculationDaysOfWeek(FirstDate, SecondDate, DaysTypeValue) {

	let CountedDays = parseInt((durationBetweenDates(FirstDate, SecondDate, 'Порахувати кількість днів' )).split(' ')[0]).toFixed(0);
	let CountedSelectDays = 0;

	for (let i = 0; i <= CountedDays; i++) {
		let DayOfWeek;

		if (i == 0) {
			DayOfWeek = new Date(FirstDate).toString().slice(0, 3);
		} else { 
			DayOfWeek = new Date(FirstDate.setDate(FirstDate.getDate() + 1)).toString().slice(0, 3);
		}


		
		if (DaysTypeValue === 'Будні дні') {

			if (DayOfWeek !== 'Sun' && DayOfWeek !== 'Sat')  {
				CountedSelectDays++;
				
			}
			
		} else if (DaysTypeValue === 'Вихідні дні') {
			if (DayOfWeek == 'Sun' || DayOfWeek == 'Sat') {
				CountedSelectDays++;		
				console.log(DayOfWeek);	
		} 
	}
}
	console.log(CountedSelectDays);
	return CountedSelectDays;
}


function CalculationAction(event) {

	let FirstDate = new Date(document.getElementById('checkin-date').value);
	let SecondDate = new Date (document.getElementById('checkout-date').value);


	let Preset = document.getElementById('preset-selection').value;
	let DaysTypeValue = document.getElementById('DaysType').value;
	let Dimension = document.getElementById('Dimension').value;
	
	let CalculationResult;
	let SecondDateinMs;

	if (FirstDate > SecondDate || SecondDate < FirstDate) {
		alert("Кінцева дата не може бути меншою за початкову");
	}  else {


		let FirstDateDay = new Date(FirstDate).toString().slice(0, 3);
		let SecondDateDay = new Date(SecondDate).toString().slice(0, 3);


		if (Preset === "Тиждень") {
			SecondDateinMs = FirstDate.getTime() + Week;
			SecondDate = new Date(SecondDateinMs);
			document.getElementById('checkout-date').value = SecondDate.toISOString().split('.')[0];
		} else if (Preset === 'Місяць') {
			SecondDateinMs = FirstDate.getTime() + Month;
			SecondDate = new Date(SecondDateinMs);
			document.getElementById('checkout-date').value = SecondDate.toISOString().split('.')[0];
		} else if (Preset === '') {
			SecondDate = SecondDate.getTime();
		}

	
		if (DaysTypeValue === 'Всі дні') {
			CalculationResult = parseInt(durationBetweenDates(FirstDate, SecondDate, Dimension)) + 1;
		} else { 
			let CountedDaysinMs = (CalculationDaysOfWeek(FirstDate, SecondDate, DaysTypeValue))*24*60*60000;
			CalculationResult = CalculateDimension(Dimension, CountedDaysinMs);
			console.log(CalculationResult);
		}

		CalculationResultStorage.push(CalculationResult);


		document.getElementById('CalculationHistory').innerHTML = CalculationResultStorage;

		localStorage.setItem('LastCalculation', CalculationResultStorage);
		lastTimeClick();
	}
}	

	



function CalculateDimension(Dimension, CalculationResult) {
	switch(Dimension) {
        case 'Порахувати кількість днів': 
        CalculationResult = CalculationResult/60000/60/24;
        return CalculationResult + ' days';
        break;
               
        case 'Порахувати кількість годин': 
        CalculationResult = CalculationResult/60000/60;
        return CalculationResult + ' hours';
        break;

        case 'Порахувати кількість хвилин': 
        CalculationResult = CalculationResult/60000;
        return CalculationResult + ' minutes';
        break;

        case 'Порахувати кількість секунд': 
        CalculationResult = CalculationResult/1000;
        return CalculationResult + ' seconds';
        break;   
    }
}


function durationBetweenDates(FirstDate, SecondDate, Dimension) {

    let FirstDate1 = new Date(FirstDate);
    let SecondDate1 = SecondDate;
    let CalculationResult = 0;
    CalculationResult = Math.abs(FirstDate1 - SecondDate1);

    return CalculateDimension(Dimension, CalculationResult);
}

function lastTimeClick() {
	 if ("LastCalculation" in localStorage) {
    	document.getElementById("CalculationHistory").innerHTML = localStorage.LastCalculation; }
};


function load() {
    lastTimeClick();
};

let CalculateButton = document.getElementById('CalculateButton');
CalculateButton.addEventListener('click', (click) => { this.CalculationAction(click)});

