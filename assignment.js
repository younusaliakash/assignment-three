function kilometerToMeter(kilometer) {
	var meter = kilometer * 1000;
	if (meter < 0 || !meter) {
		return "Please Input The Right Value. Your input is not Number."; //Error Message
	} else {
		return meter;
	}
}




function budgetCalculator(watch, phone, laptop) {
	if ( watch < 0 || phone < 0 || laptop < 0) {
		return "Please Recheck! Do not submit any Negative value ."; //Negative Value Error Message
	} else if (Number.isInteger(watch) && Number.isInteger(phone) && Number.isInteger(laptop)) {
		var watch = watch * 50;
		var phone = phone * 100;
		var laptop = laptop * 500;
		var total = watch + phone + laptop;
		return total;
	} else {
		return "Please Recheck! Do not submit the text, Symbol. And fill up all required fields."; //Others occurs Error Message
	}
}


function hotelCost(day) {
	if (Number.isInteger(day) && day >= 0) {
		var cost = 0;
		if (day <= 10) {
			var cost = day * 100;
			return cost;
		} else if (day <= 20) {
			var firstTenDays = 10 * 100;
			var nextdays = day - 10;
			var totalCost = firstTenDays + nextdays * 80;
			return totalCost;
		} else {
			var firstTenDays = 10 * 100;
			var secondTenDays = 10 * 80;
			var nextdays = day - 20;
			var totalCost = firstTenDays + secondTenDays + nextdays * 50;
			return totalCost;
		}
	} else {
		return "Opps!! Don't Submit Negative number or Text or Special  Character."; //Error Message
	}
}



function megaFriend(friendNameList) {
	var bigestName = friendNameList[0];
	for (var i = 0; i < friendNameList.length; i++) {
		var bigestNameLength = bigestName.length;
		if (friendNameList[i].length > bigestNameLength) {
			bigestName = friendNameList[i];
		}
	}
	return bigestName;
}
