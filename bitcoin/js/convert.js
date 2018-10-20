var Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD',
		Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD',
		Bitcoin  = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
		currency = '$';
$('.select').on('click','.placeholder',function(){
	var parent = $(this).closest('.select');
	if ( ! parent.hasClass('is-open')){
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	}else{
		parent.removeClass('is-open');
	}
}).on('click','ul>li',function(){
	var parent = $(this).closest('.select');
	parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
	parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	var plch = document.getElementById('spn');
	switch (plch.innerHTML) {
		case 'USD' : 
			Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD';
			Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD';
			Bitcoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
			currency = '$';
			break;
		case 'EUR' : 
			Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHEUR';
			Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCEUR';
			Bitcoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCEUR';
			currency = '&euro;';
			break;
		case 'RUB' : 
			Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHRUB';
			Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCRUB';
			Bitcoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCRUB';
			currency = '&#8381;';
			break;
		case 'UAH' : 
			Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUAH';
			Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUAH';
			Bitcoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUAH';
			currency = '&#8372;';
			break;
		case 'GBP' : 
			Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHGBP';
			Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCGBP';
			Bitcoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCGBP';
			currency = '&pound;';
			break;
		default:
			Ethereum = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD';
			Litecoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD';
			Bitcoin = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
			currency = '$';
		}

	function tst(ticker_path, identif, sign) {
		var tick = ticker_path;
		if (Math.sign(tick) > 0) {
			document.getElementById(identif).innerHTML = '+' + tick + sign;
			document.getElementById(identif).classList.add("green_color");
		} else {
			document.getElementById(identif).innerHTML = tick + sign;
			document.getElementById(identif).classList.add("red_color");
		}
	};
		// Ethereum
	var ehr = new XMLHttpRequest();
	ehr.open('GET', Ethereum, true);
	ehr.onreadystatechange = function(){
		if (ehr.readyState == 4){
			let ticker = JSON.parse(ehr.responseText);
			// Price
			let price = ticker.last;
			document.getElementById('etc').innerHTML = currency + price.toFixed(2);
			tst(ticker.changes.price.hour, 'hed', currency);
			tst(ticker.changes.price.day, 'ded', currency);
			tst(ticker.changes.price.week, 'wed', currency);
			tst(ticker.changes.price.month, 'med', currency);
			let check = document.getElementById('one');
			check.addEventListener('click', function(){
				if (check.checked) {
					tst(ticker.changes.percent.hour, 'hed', '%');
					tst(ticker.changes.percent.day, 'ded', '%');
					tst(ticker.changes.percent.week, 'wed', '%');
					tst(ticker.changes.percent.month, 'med', '%');
				} else {
					tst(ticker.changes.price.hour, 'hed', currency);
					tst(ticker.changes.price.day, 'ded', currency);
					tst(ticker.changes.price.week, 'wed', currency);
					tst(ticker.changes.price.month, 'med', currency);
				}
			});
		}
	};
	ehr.send();
	// Litecoin
	var	lhr = new XMLHttpRequest(); 
	lhr.open('GET', Litecoin, true);
	lhr.onreadystatechange = function(){
		if (lhr.readyState == 4){
			var ticker = JSON.parse(lhr.responseText);
			// Price
			var price = ticker.last;
			document.getElementById('ltc').innerHTML = currency + price.toFixed(2);
			tst(ticker.changes.price.hour, 'hld', currency);
			tst(ticker.changes.price.day, 'dld', currency);
			tst(ticker.changes.price.week, 'wld', currency);
			tst(ticker.changes.price.month, 'mld', currency);
			var check = document.getElementById('two');
			check.addEventListener('click', function(){
				if (check.checked) {
					tst(ticker.changes.percent.hour, 'hld', '%');
					tst(ticker.changes.percent.day, 'dld', '%');
					tst(ticker.changes.percent.week, 'wld', '%');
					tst(ticker.changes.percent.month, 'mld', '%');
				} else {
					tst(ticker.changes.price.hour, 'hld', currency);
					tst(ticker.changes.price.day, 'dld', currency);
					tst(ticker.changes.price.week, 'wld', currency);
					tst(ticker.changes.price.month, 'mld', currency);
				}
			});
		}
	};
	lhr.send();
	// Bitcoin
	var	bhr = new XMLHttpRequest();
	bhr.open('GET', Bitcoin, true);
	bhr.onreadystatechange = function(){
		if (bhr.readyState == 4){
			var ticker = JSON.parse(bhr.responseText);
			// Price
			var price = ticker.last;
			document.getElementById('btc').innerHTML = currency + price.toFixed(2);
			tst(ticker.changes.price.hour, 'hbd', currency);
			tst(ticker.changes.price.day, 'dbd', currency);
			tst(ticker.changes.price.week, 'wbd', currency);
			tst(ticker.changes.price.month, 'mbd', currency);
			var check = document.getElementById('three');
			check.addEventListener('click', function(){
				if (check.checked) {
					tst(ticker.changes.percent.hour, 'hbd', '%');
					tst(ticker.changes.percent.day, 'dbd', '%');
					tst(ticker.changes.percent.week, 'wbd', '%');
					tst(ticker.changes.percent.month, 'mbd', '%');
				} else {
					tst(ticker.changes.price.hour, 'hbd', currency);
					tst(ticker.changes.price.day, 'dbd', currency);
					tst(ticker.changes.price.week, 'wbd', currency);
					tst(ticker.changes.price.month, 'mbd', currency);
				}
			});
		}
	};
	bhr.send();

});

