// Bitcoin
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', true);
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4){
		var ticker = JSON.parse(xhr.responseText);
		// Price
		var price = ticker.last;
		document.getElementById('btc').innerHTML = price;
	}
};
xhr.send();