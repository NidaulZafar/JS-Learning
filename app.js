var life = 100; //sfsfsfsf
var Name = "Hunny";
const age = 35;
var box;
var secondbox = null;
console.log('hey buuddy');
console.log(life);
console.log(Name);
console.log(box);
console.log(secondbox);

const name = "hunny bunny";
function logger() {
console.log("party time");
console.log("party time");
console.log("party time");
console.log("party time");
}

logger();

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper(name);

console.log(`Hello my name's ${name}`);  // modern way to concatenate different things
console.log("hey" + " buddy");  // modern way to concatenate different things

console.log(  // old way//
    "Hello from " + Name + " and my age is " + age + " blH BLh blah "
)
//new way to do the same thing
console.log(  // new and simple  way//
    `Hello its me ${name} and my age is ${age} and blah blah`
);
//concatenating a string and number will result in conversion of number into a string
const combined = Name + age;
console.log(combined);
console.log(typeof combined); //typeof will give us the type of const eg string number etc
console.log(typeof age); //typeof will give us the type of const eg string number etc


let heading = "Semantic HHTTMMLL";
const diffHeadings = {
    second: "The Document Outline",
    third: "Headers",
    againThird: "Footers",
    next: "Inline Semantic HTML"
}

const content = `
<main class="maincontent">
      <h1>${heading}</h1>
      <p>By Troy McClure. Published January 3rd</p>
      <p>This is an example web page explaining HTML5 semantic markup.</p>

      <h2>${diffHeadings.second}</h2>
      <p>
        HTML5 includes several “sectioning content” elements that affect the
        document outline.
      </p>

      <h3>${diffHeadings.third}</h3>
      <p>
        The <code>&lt;header&gt;</code> element is one such sectioning element.
      </p>

      <h3>${diffHeadings.againThird}</h3>
      <p>And so is the <code>&lt;footer&gt;</code> element.</p>

      <h2>${diffHeadings.next}</h2>
      <p>
        The <code>&lt;time&gt;</code> element is semantic, but it's not
        sectioning content.
      </p>

      <p>
        This fake article was written by somebody at InternetingIsHard.com,
        which is a pretty decent place to learn how to become a web developer.
      </p>
    </main>
    <p>&copy; 2017 InternetingIsHard.com</p>
`;

document.body.innerHTML = content;





/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-4-observable

Complete the `createObservable()` function as follows:

- The `subscribe` function should take the function passed to it as an argument
   and push it onto the `subscribers` array. (Yes, you can store functions in an
   array. Functions are treated in JavaScript like any other value.

- The `notify` function should iterate through, and call, all subscribers from 
  the `subscribers` array, passing on the notification message to each 
  subscriber.
------------------------------------------------------------------------------*/





// function createObservable() {
//   const subscribers = [];
//   return {
//     subscribe: function (subscriber) {
//       subscribers.push(subscriber)// TODO complete this function
//     },
//     notify: function (message) {
//       // TODO complete this function
//       subscribers.forEach((subscriber) => {
//         subscriber(message);
//       })
//     },
//   };
// }




// // A candidate subscriber function
// function consoleUpperCase(message) {
//   console.log(message.toUpperCase());
// }

// // Another candidate subscriber function
// function consoleLowerCase(message) {
//   console.log(message.toLowerCase());
// }

// // Create an observable object
// const observable = createObservable();

// // Add three subscribers
// observable.subscribe(console.log);
// observable.subscribe(consoleUpperCase);
// observable.subscribe(consoleLowerCase);

// // Send a message to all current subscribers
// observable.notify("Let's see what happens here!");
// // Let's see what happens here! (console.log subscriber)
// // LET'S SEE WHAT HAPPENS HERE! (consoleUpperCase subscriber)
// // let's see what happens here! (consoleLowerCase subscriber)

// function asd(a){
// let digits = (""+a).split("");
// console.log(digits);
// }
// function secondFunction(a){

//   let digits = Array.from(a.toString()).map(Number);
// console.log(digits);
// }
// asd(10);
// asd(931)
// asd(193278)
// secondFunction(10);
// secondFunction(931)
// secondFunction(193278)

// function newFunc(a) {
   
// console.log(a.slice(3));
// }
// newFunc("'abcdefg")
// newFunc("1234")
// newFunc("fgedcba")

// // let string = "hello"
// // console.log(string.charAt(2))



