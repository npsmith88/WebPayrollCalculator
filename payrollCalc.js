function calcPayroll() {
    
    var hours = document.getElementById("hours").value;
    var rate = document.getElementById("rate").value;
	if (hours > 40) {
		var regularPay = hours * rate;
		var overtimePay = (hours - 40) * rate * 1.5;
		var totalPay = regularPay + overtimePay;
	}
	else {
		var regularPay = hours * rate;
		var overtimePay = 0;
		var totalPay = regularPay;
	}
	var r1 = regularPay.toFixed(2);
	var o1 = overtimePay.toFixed(2);
	var t1 = totalPay.toFixed(2);
	
    var displayPay = "Output: regular pay = " + r1 + ", overtime pay = " + o1 + ", total pay = " + t1 + " ";
    document.getElementById("resultsLabel").innerHTML = displayPay;
}