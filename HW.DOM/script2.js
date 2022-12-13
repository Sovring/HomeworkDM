'use strict'
window.onload = load;
let Switch = document.getElementById('Switch');
let today;
let DateHistoryValue = document.getElementById("DateHistory");
let status;
let button; 

function lastTimeClick() {
	if (localStorage.getItem('knopkaValue') == "Turn On") {
		turnOn()} else turnOff();

    if ("lastData" in localStorage) {
    	document.getElementById("DateHistory").innerHTML = localStorage.lastData;
    };
};



function DataSet() {
    today = new Date;
    today = formatTime(today);
    document.getElementById("status").innerHTML = status;
    localStorage.lastData = `${status}`;
};

function formatTime(data) {
    return (new Intl.DateTimeFormat("ua", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second : "2-digit"
    })).format(data);
};


function load() {
    button = document.getElementById("Switch");
    Switch.onclick = DataSet;
    lastTimeClick();
};


function ButtonStatusChange(){
	if (Switch.value == "Turn Off") {
		turnOn();
	} else {
		turnOff();
	};
	DateHistoryValue.hidden = true;
	localStorage.setItem('knopkaValue', Switch.value);
};



function turnOn() {	
   		Switch.value = "Turn On";
   		document.body.style.backgroundColor = "gray";
   		status = `Last Turn Off: ${today}`;
};

function turnOff() {
		Switch.value = "Turn Off";
   		document.body.style.backgroundColor = "yellow";
   		status = `Last Turn On: ${today}`;
};





Switch.addEventListener('click', (click) => { this.DataSet(click), this.ButtonStatusChange(click)});
