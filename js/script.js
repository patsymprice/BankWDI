

$(document).ready(function(){

	var checking = 1000;
	var savings = 2300;

$("#checking_results").text(currency("$", checking));
$("#savings_results").text(currency("$", savings));

$('#withdraw').on('click', withdrawChecking);
$('#deposit').on('click', depositChecking);
$('#deposit2').on('click', depositSavings);
$('#withdraw2').on('click', withdrawSavings);


function currency(sSymbol, vValue) {
   aDigits = vValue.toFixed(2).split(".");
   aDigits[0] = aDigits[0].split("").reverse().join("").replace(/(\d{3})(?=\d)/g, "$1,").split("").reverse().join("");
   return (sSymbol + aDigits.join("."));
}


function withdrawChecking(event){
		var chx = parseInt($('#c_balance').val());
	  	checking = parseInt(checking);
	 	savings = parseInt(savings);

		if (chx > checking + savings) {
			alert("Not enough funds for this transaction");
			$('#c_balance').val("");
		}

	    else if  (chx > checking) {
			var update_balance = (savings + (checking - chx));
			$("#checking_results").text(currency("$", 0));
			$("#savings_results").text(currency("$", update_balance));
			checking = 0;
			$("#zero").slideDown();
			$('#c_balance').val("");
			event.preventDefault();
		}
		else{
			var update_balance = checking - chx;
			$("#checking_results").text(currency("$", update_balance));
			checking = update_balance;
			$('#c_balance').val("");
			event.preventDefault();
		}
		event.preventDefault();
}

function depositChecking(event){
		checking = parseInt(checking);
		var chx = parseInt($('#c_balance').val()) + checking;
		$("#checking_results").text(currency("$", chx));
		checking = chx;
		$("#zero").hide();
		$('#c_balance').val("");
		event.preventDefault();
}

function depositSavings(event){
		savings = parseInt(savings);
		var sav = parseInt($('#s_balance').val()) + savings;
		$("#savings_results").text(currency("$", sav));
		savings = update_balance;
		$('#s_balance').val("");
		event.preventDefault();

}

function withdrawSavings(event){
		var sav = parseInt($('#s_balance').val());
	 	savings = parseInt(savings);
		
    	if(sav > savings) {
			alert("not enough funds to withdraw this amount")
			$('#s_balance').val("");

		}

		else{
			var update_balance = (savings - sav);
			$("#savings_results").text(currency("$", update_balance));
			savings = update_balance;
			$('#s_balance').val("");
			event.preventDefault();

		}
		event.preventDefault();
}

   
});


	


	  

