//alert("can you see this?");

/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates
unique colors and content for each weekday (Sunday to Saturday) into the page.

The content must include:

One unique image, with appropriate and matching content in the alt tag. CHECK 
A paragraph or two of content that describes the daily item (paragraph must include
the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


Image (of specific coffee)
Alt tag (identifies type of coffee)
Description (of this type of coffee)
Weekday
Color (supporting image)

The unique color could affect the background HTML, or an element on the page for each day of the week.
All of the above must occur within one page.

*/

function coffeeTemplate(coffee){
  return `<p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />

             <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
        </p>`;

}


let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}else{//today's day of the week
    myDay = today;
}

//change the string to an integer
myDay = parseInt(myDay);

switch (myDay){
    case 1:
        today = "Monday";
        coffee = {
            color: "#874356",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `a nice sipper that's good with or without coffee. Fun fact: bubble tea originates from Taiwan!`
        };
        break;

        case 2:
            today = "Tuesday";
            coffee = {
                color: "#DAB88B",
                name: "Caramel Latte",
                pic: "caramel-latte.jpg",
                alt: "A picture of a caramel latte",
                day: "Tuesday",
                desc: `a sweet treat! For an extra caramel kick, ask the barista for a light caramel drizzle!`
            };
            break;

        case 3:
            today = "Wednesday";
            coffee = {
                color: "#361500",
                name: "Cold Brew",
                pic: "cold-brew.jpg",
                alt: "A picture of a cold brew coffee",
                day: "Wednesday",
                desc: `Our cold brew steeps for 18 hours, creating a smooth coffee packed with some serious caffeine!`
            };
            break;

        case 4:
            today = "Thursday";
            coffee = {
                color: "black",
                name: "Drip",
                pic: "drip.jpg",
                alt: "A picture of a drip coffee",
                day: "Thursday",
                desc: `some simple and reliable fuel! Some light it black, but you can always dress it up with some cream or sugar.`
            };
            break;

        case 5:
            today = "Friday";
            coffee = {
                color: "#a0937d",
                name: "Frappaccino",
                pic: "frappaccino.jpg",
                alt: "A picture of a frappaccino",
                day: "Friday",
                desc: `a cold, creamy blend of sweetness! We also have non-coffee flavors, like matcha or vanilla bean!`
            };
            break;

        case 6:
            today = "Saturday";
            coffee = {
                color: "#5c3d2e",
                name: "Mocha",
                pic: "mocha.jpg",
                alt: "A picture of a mocha",
                day: "Saturday",
                desc: `made with rich, dark chocolate! You could even try it without coffee for a decadent hot chocolate.`
            };
            break;

        case 0:
            today = "Sunday";
            coffee = {
                color: "#de834d",
                name: "Pumpkin Spice Latte",
                pic: "pumpkin-spice-latte.jpg",
                alt: "A picture of a pumpkin spice latte",
                day: "Sunday",
                desc: `a fall classic! Made with our house-made pumpkin syrup. Our best-seller on those chilly, fall days!`
            };
            break;

    default:
        alert("something went wrong!");
}


console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

 //change the background color of the HTML element
document.querySelector("html").style.backgroundColor = coffee.color;


