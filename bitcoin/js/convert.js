// drop down menu at the top
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
});
// drop down menu at the top

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', true);

// Bitcoin
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4){
		var ticker = JSON.parse(xhr.responseText);
		// Price
		var price = ticker.last;
		document.getElementById('btc').innerHTML = price;
			tst(ticker.changes.price.hour, 'hbd', '$');
			tst(ticker.changes.price.day, 'dbd', '$');
			tst(ticker.changes.price.week, 'wbd', '$');
			tst(ticker.changes.price.month, 'mbd', '$');
		var check = document.getElementById('three');
		check.addEventListener('click', function(){
			if (check.checked) {
				tst(ticker.changes.percent.hour, 'hbd', '%');
				tst(ticker.changes.percent.day, 'dbd', '%');
				tst(ticker.changes.percent.week, 'wbd', '%');
				tst(ticker.changes.percent.month, 'mbd', '%');
			} else {
				tst(ticker.changes.price.hour, 'hbd', '$');
				tst(ticker.changes.price.day, 'dbd', '$');
				tst(ticker.changes.price.week, 'wbd', '$');
				tst(ticker.changes.price.month, 'mbd', '$');
			}
		});
	}
};

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
xhr.send();
