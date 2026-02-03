var Firstname = "Balamurugan" //11

console.log(Firstname.toLowerCase());
console.log(Firstname.toUpperCase());
console.log(Firstname.length)
console.log(Firstname.charAt(4));
console.log(Firstname.slice(4,11));
console.log(Firstname.concat(" Thavamani"));
console.log(Firstname.includes("John"));
console.log(Firstname.endsWith("gan"));
console.log(Firstname.startsWith("Ba"));

var locations = "Chennai,Delhi,Bangalur"
console.log(locations.split(","));
console.log(locations.split(",")[1]);
var country = "  India  "
console.log(country);
console.log(country.trim());
console.log(country.trimStart());
console.log(country.trimEnd());
console.log(country.repeat(3));
console.log(country.replace("  India  ", "US"));

var program = "I love Java and work as Java Developer"
console.log(program.replace("Java","Python"));
console.log(program.replaceAll("Java","Python"));

let number = 20 
console.log(typeof(number));

console.log(typeof(number.toString()));

let countryCode = "91"

console.log(countryCode+1); //911
console.log(parseInt(countryCode)+1); //92

console.log(typeof (countryCode));
console.log(typeof parseInt(countryCode));