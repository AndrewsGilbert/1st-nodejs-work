const prompt = require('prompt-sync')();
 
var expr = prompt('Enter the String');
console.log(expr);

context(expr);
function context(expr) { 


var a = Array.from(expr); 

num1 = [];
ope = [];
num2 = [];

for ( i=0; i < a.length; i++ ) { 

var b = Number(a[i]);

var c = Number.isNaN(b);


if (!c || a[i] === '.' )  { if ( ope.length > 0 ) { num2.push(ope.pop()); ope.splice(0,ope.length);  num1.push(a[i]); } 

								else {	num1.push(a[i]);}	}


else  { if ( num1.length > 0 ) {  d = num1.join(""); num2.push(Number(d));    num1.splice(0,d.length);  ope.push(a[i]); } 

else { ope.push(a[i]); } } 


if ( i === a.length -1 ) { d = num1.join(""); num2.push(Number(d)); } 

}  

dive(num2); 

}  
	
function dive(num2) {  

	var ab = num2.includes("/"); if (ab) {
	
	
for ( j=1;  j< num2.length; j++) {

	for ( i =1; i< num2.length;) {
	
	var di = num2.includes("/",i); 
	
		if (di) { 
		
		 x = num2.indexOf("/",i); y = x-1; z = x+1; p = z-2; a = num2[y]; b = num2[z]; e = a/b; num2.splice(y,3,e); }
			 

				 else { multi(num2);} 
			
				}  }  }  multi(num2);  } 
				
		

function multi(num2) {  

var ab = num2.includes("*"); if (ab) {

for ( j=1;  j< num2.length; j++) {

	for ( i =1; j< num2.length; ) {

		var mu = num2.includes("*",i);
		
	 if (mu) { 
		
		 x = num2.indexOf("*",i); y = x-1; z = x+1; p = z-2; a = num2[y]; b = num2[z]; e = a*b; num2.splice(y,3,e);  }
			
				else { sub(num2);} 
				
				} } }   sub(num2); } 
				
			

function sub(num2) { 

var ab = num2.includes("-"); if (ab) {


for ( j=1;  j< num2.length; j++) {

	for ( i =1; j< num2.length; ) {

		var su = num2.includes("-",i);
		
	 if (su) { 
		
		 x = num2.indexOf("-",i); y = x-1; z = x+1; p = z-2; a = num2[y]; b = num2[z];  e = a-b; num2.splice(y,3,e);   }
			
				else { add(num2); } 
				
				} } }    add(num2); } 
					
function add(num2) {

	var ab = num2.includes("+"); if (ab) {

		for (j = 1; j < num2.length; j++) {

			for (i = 1; j < num2.length;) {

				var ad = num2.includes("+", i);
		
				if (ad) {
		
					x = num2.indexOf("+", i); y = x - 1; z = x + 1; p = z - 2; a = num2[y]; b = num2[z]; e = a + b; num2.splice(y, 3, e);
				}
			
				else { return false; }
				
			}
		}
	} 
};

console.log(num2);