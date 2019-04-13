// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    // ------ OBJECTS & ARRAYS ------
    1: {
        question: "You can store the following data-types in an array:",
        answers: {
            a: "Strings, numbers, and booleans",
            b: "Strings, numbers, booleans, and other arrays",
            c: "Strings, numbers, booleans, and other arrays (but only one level deep)",
            d: "Anything"
        }
    },
    2: {
        question: `Given the following code:
        let x = ages[3] + 20, assuming the array ages looks like this: 
        [0, 17, 2, 4, 31, 3], what will x be?`,
        answers: {
            a: 23,
            b: 22,
            c: 51,
            d: 24
        }
    },
    3: {
        question: `Given the following: 
                    let x = [ 
                        {name: “ant”, 
                        color: “brown”}, 
                        {name: “flower”, 
                        color: “green”}
                    ]
                    What will change after we do x.push( {name: “ant”, color: “green”} ) ?`,
        answers: {
            a: `Now the value of x[0].color is “green”`,
            b: `Now the value of x[1].name is “ant”`,
            c: `Now the value of x[2].name is “ant”`,
            d: `None of the above`
        }
    },
    4: {
        question: `How does splice work?`,
        answers: {
            a: `splice(i) removes the item at index i`,
            b: `splice(i, n) removes all the items starting at index i, and ending at index n`,
            c: `splice(i) removes all the items until index i`,
            d: `splice(i, n) removes all the items starting at index i, and all the n items after`
        }
    },
    5: {
        question: `When accessing object properties, we should use bracket notation`,
        answers: {
            a: `Always`, 
            b: `As little as possible`,
            c: `When the key name is a variable (dynamic)`,
            d: `When the key has non-alphanumeric characters`,
            e: `When the object has nested properties`,
            f: `c and d`,
            g: `c and e`,
            h: `d and e`
        }
    },
    6: {
        question: `What is one of the ways to add the key color and value blue to the object 
                   let car = {wheels: 4} ?`,
        answers: {
            a: `car.push(‘color’, ‘blue’)`, 
            b: `car.push(color, ‘blue’)`,
            c: `car[color] = blue`,
            d: `car[‘color’] = ‘blue’`,
            e: `None of the above`
        }
    },
    7: {
        question: `What is the value of x in this expression: 
                   let x = [ {human: {name: ‘Daena’, age: 31} } ][0].age`,
        answers: {
            a: `31`, 
            b: `Throws an error`,
            c: `undefined`,
            d: `None of the above`
        }
    },
    // ----- LOOPS -------
    8: {
        question: `The difference between 'for in' loops and 'for of' loops is that`,
        answers: {
            a: `The in loop iterates over the values of the array, and the of over the indexes`, 
            b: `The in loop doesn’t need an array, the of loop does`,
            c: `The in loop iterates over the indexes of the array, and the of over the values`,
            d: `The in loops needs an array, the of doesn’t`
        }
    },
    9: {
        question: `Given the following array: 
                        let a = [ 
                            {name: “Hewitt”, 
                            age: 34}, 
                            {name: “Charlene, 
                            age: 21} 
                        ]
                    What would the following loop print?
                        for(let p in a){
                            console.log(p.name)
                        }`,
        answers: {
            a: `Hewitt, then Charlene`, 
            b: `Charlene, then Hewitt`,
            c: `Both Charlene and Hewitt, the order isn’t guaranteed with objects`,
            d: `undefined, then undefined`
        }
    },
    10: {
        question: `What can you say about the following loop?
                        for(let i = 100; i > 0; i++){
                            console.log(i)
                        }`,
        answers: {
            a: `It will print all the numbers between 0 and 100 (excluding 0 and 100)`, 
            b: `It will print all the numbers between 0 and 100 (including 0 and 100)`,
            c: `It will cause an infinite loop`,
            d: `It will print all the numbers between 100 and 200`
        }
    },
    // ------ CSS ------- 
    11: {
        question: `The difference between margin and padding is that`,
        answers: {
            a: `Margin pushes the element from within, padding from outside`, 
            b: `They are basically the same`,
            c: `Margin makes the element inline, padding doesn’t`,
            d: `Margin pushes the element from outside, padding from within`
        }
    },
    12: {
        question: `Absolute positioning`,
        answers: {
            a: `Requires a child-parent relationship`, 
            b: `Allows us to use the top, left, right, and bottom properties`,
            c: `Takes elements out of the normal flow of elements on the page`,
            d: `All of the above`
        }
    },
    13: {
        question: `The Box Model shows us`,
        answers: {
            a: `Where, ultimately, the browser positions our elements and how`, 
            b: `Where, initially, the browser positions our elements (before our styling is applied)`,
            c: `Where, ultimately, the browser positions parent elements, but not necessarily their children`,
            d: `Where, ultimately, the browser positions children elxements, but not necessarily their parents`
        }
    },
    // ------ FUNCTIONS -----
    14: {
        question: `The difference between a function expression and a function declaration is that`,
        answers: {
            a: `Function expressions can be invoked from anywhere`, 
            b: `Function declarations can be invoked from anywhere`,
            c: `They are the same, just different syntax`,
            d: `None of the above`
        }
    },
    15: {
        question: `The difference between a method and a function is that`,
        answers: {
            a: `A method is a function that belongs to an object`, 
            b: `A function is a method that belongs to an object`,
            c: `A method can’t have parameters`,
            d: `A function can’t have parameters`
        }
    },
    16: {
        question: `The return statement in a function`,
        answers: {
            a: `Allows the function to output some data`, 
            b: `Ends a function immediately, even if there is more code after it`,
            c: `a and b`,
            d: `None of the above`
        }
    },
    17: {
        question: `Which one of these is false regarding function parameters?`,
        answers: {
            a: `Parameters effectively become declared variables inside the function`, 
            b: `Parameters need to have their values initialized inside the function`,
            c: `Parameters have no value unless the function is called with arguments`,
            d: `The argument name and parameter name don’t have to match`
        }
    },
    //------------ DOM ----------- 
    18: {
        question: `The DOM is`,
        answers: {
            a: `The HTML the user ultimately sees`, 
            b: `The HTML and CSS the user ultimately sees`,
            c: `The HTML, CSS, and JS the user ultimately sees`,
            d: `An object representing our HTML document`
        }
    },
    19: {
        question: `What does document.getElementsByClassName(“box”) do?`,
        answers: {
            a: `This method does not exist`, 
            b: `Throws an error, you need to have “.box”`,
            c: `Returns an array of elements with the class of “box”`,
            d: `Returns the element with a class of “box”`
        }
    },
    20: {
        question: `If we have an element with an id of “box” in our HTML,
                   how can we change its background color to orange?`,
        answers: {
            a: `document.get(“box”) = {background-color: orange}`,
            b: `document.getElementById(“box”) = {background-color: orange}`,
            c: `document.get(“box”).backgroundColor = “orange”`,
            d: `document.getElementById(“box”).backgroundColor = “orange”`
        }
    },
    // ------ THIS ------
    21: {
        question: `what is going to be printed if we run 
                    questions['21'].code()`,
        code: function() {console.log(this.answers.c + ' is not the answer')},
        answers: {
            a: `answers`,
            b: 'this is not the answer',
            c: `this`,
            d: `21`,
            e: `both a and c`,
            f: 'both a and d'
        }
    }
}
