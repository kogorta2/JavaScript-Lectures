var string="soMe text email@test.com";
var email="email@test.com";
var email2="eMail@test.com\nemail2@test.com";
var phone="soMe text +7(567)789-45-56";
var phone2="soMe text +73(567)789-45-56";
var phone3="soMe text 75677894556";

var regExp=/some/i;

function testRegexp(string,regExp){
	return string.match(regExp);
}

console.log(testRegexp(string,/some/));
console.log(testRegexp(string,/some/i));
console.log(testRegexp(string,/^some/i));
console.log(testRegexp(string,/^text/i));
console.log(testRegexp(string,/text/i));
console.log(testRegexp(email,/\w+@\w+\.{1}\w{2,}/i));
console.log(testRegexp(email2,/^\w+@\w+\.{1}\w{2,}$/i));
console.log(testRegexp(email2,/^\w+@\w+\.{1}\w{2,}$/im));
console.log(testRegexp(email2,/^\w+@\w+\.{1}\w{2,}$/img));
console.log(testRegexp(email2,/^\w+@\w+\.{1}\w{2,}$/mg));
console.log(testRegexp(email2,/^\w+@\w+\.{1}\w{2,}$/g));
console.log(testRegexp(email2,/(\w+)@[^]/));
console.log(testRegexp(email2,/(\w+)@[^]+/));
console.log(testRegexp(email2,/([a-z]+)@\w+\.{1}\w{2,}/));
console.log(testRegexp(email2,/(?:[a-z]+)@(\w+)\.{1}(\w{2,})/));
console.log(testRegexp(phone,/\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));
console.log(testRegexp(phone2,/\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));
console.log(testRegexp(phone3,/\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));

var testText="'asd''bcd''ifg'";
console.log(testRegexp(testText,/'(.+)'/g));
console.log(testRegexp(testText,/'(.+?)'/g));

console.log(testText.replace(/"(.+?)"/g,function(elem){
	if(elem==="\"asd\""){
		return elem;
	}
	else{
		return 123;
	}
}))