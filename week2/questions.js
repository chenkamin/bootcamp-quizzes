// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    // ------ CSS Grid ------
    1: {
        question: `When you use grid-template-columns:`,
        answers: {
            a: "You must also use grid-template-rows",
            b: "You must also use grid-template-areas",
            c: "Both a and b",
            d: "None of the above"
        }
    },
    2: {
        question: `When you use grid-template-areas:`,
        answers: {
            a: "You must also use grid-area in all the children elements",
            b: "You must also use grid-area in the direct children elements",
            c: "You can only use single-letter named-spaces",
            d: "None of the above"
        }
    },
    3: {
        question: `When you use CSS Grid:`,
        answers: {
            a: `You never have to worry about any of the basic CSS stuff again`,
            b: `Specificity doesn't matter anymore (id versus class, for example)`,
            c: `Both a and b`,
            d: `None of the above`
        }
    },
    // ------ Responsive Design ------
    4: {
        question: "What does `@media(max-width: 768px)` mean?",
        answers: {
            a: `The max-width of the page is 768px`,
            b: `At 768px or more, we will apply different CSS`,
            c: `At 768px or fewer, we will apply different CSS`,
            d: `At exactly 768px, we will apply different CSS`
        }
    },
    // ------ Callbacks & Arrow Functions ------
    5: {
        question: `What will we see in the console log?
        let x = {
            count: 12,
            go: () => {
                setTimeout(function () {
                    console.log(this.count)
                }, 1500)
            }
        }
        x.go()
        `,
        answers: {
            a: `12, 1.5 seconds later`,
            b: `An error immediately`,
            c: `undefined, 1.5 seconds later`,
            d: `Nothing, this doesn't run`,
            e: "None of the above"
        }
    },
    6: {
        question: `What is the difference between an anonymous and named function?`,
        answers: {
            a: `Anonymous functions don't have names, named functions do`,
            b: `Anonymous functions get invoked automatically, named functions need to be invoked`,
            c: `Anonymous functions have to be callbacks, named functions do not`,
            d: `a and c`,
            e: `All of the above`
        }
    },
    7: {
        question: `What will we see in the console log? 
                   setInterval(()=>{console.log("hi")}, 2000)
                   `,
        answers: {
            a: `"hi" every two seconds`,
            b: `"hi" after two seconds`,
            c: `"hi"`,
            d: `undefined`,
            e: `Nothing, there is no invocation`
        }
    },
    8: {
        question: `What gets printed here?
            const run = (name) => {console.log("Run, " + name + ", run!")}
            const yell = function(action){
                let env = "Forest"
                action(env)
            }
            run(yell)
        `,
        answers: {
            a: "Syntax Error, because `yell` is defined before `run`",
            b: "Run, Forest, run!",
            c: "`Run, ${yell function}`, run!",
            d: "undefined"
        }
    },
    // ------ Closures & Modules ------
    9: {
        question: `Given the following code: 
            let _memories = ["that time at band camp", "yesterday's breakfast"]
    
            const Brain = function(){
                const dayDream = () => _memories
                const experience = memory => _memories.push(memory)
                const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
                const spazz = () => console.log("bleurg")

                return{
                    reminisce: dayDream,
                    live: experience,
                    blank: forget,
                    freakOut: spazz
                }
            }

            const brain = Brain()
            brain.freakOut()
    
            Do we have closure here?`,
        answers: {
            a: "Yes",
            b: "No, because `brain.freakOut` doesn't access `_memories`",
            c: "No, because `_memories` is outside of Brain",
            d: "No, because we're returning the wrong functions"
        }
    },
    10: {
        question: "Using the same code from the previous question, what does `_memories` mean?",
        answers: {
            a: "Nothing, it's just a variable",
            b: "It means `_memories` needs to get its value from outside",
            c: "It means `_memories` should be treated as a 'private' variable",
            d: "It means we have to use `this` to access `_memories`"
        }
    },
    11: {
        question: `What is true about closures in JS?`,
        answers: {
            a: "Closures are the same as modules",
            b: "Closures only work with objects",
            c: "Closures prevent the memory from setting variables free",
            d: "Closures don't work differently with `this`, they use lexical scope"
        }
    },
    // ------ jQuery ------
    12: {
        question: `What is $ ?`,
        answers: {
            a: "The jQuery library",
            b: "The jQuery function",
            c: "The jQuery object",
            d: "The jQuery framework"
        }
    },
    13: {
        question: `What will the following code do (assume there is an element with an id of 'btn')?
            $('#btn').click(alert('hi'))
        `,
        answers: {
            a: "Nothing",
            b: "Throw an error",
            c: "Alert 'hi' when `#btn` is clicked",
            d: "Alert 'hi' when the script runs"
        }
    },
    14: {
        question: `What will the following code do (assume an element with an id of 'posts' exists)?
            let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]
            for(let post of posts){
                $("#posts").append('
                    <div>${post.name}</div>
                    <input type="text" placeholder="say something nice" />
                ')
            }
            posts.splice(0, 1)
        `,
        answers: {
            a: "Display only 'Kayne' in a `div`, with an input box below",
            b: "Display both 'Shoobert' and 'Kayne' in the same `div` with an input box below",
            c: "Display [objectObject] instead of 'Shoobert' and 'Kayne'",
            d: "Display both 'Shoobert' and 'Kayne' in separate `div`s with an input box below each",
        }
    },
    15: {
        question: `What will the following do (assume several elements with a class of 'box' exist)?
            $('.box').css('background-color', 'red')
        `,
        answers: {
            a: "Change the background color of all `.box`es to red",
            b: "Nothing, `.css` returns an array of elements",
            c: "Throw an error",
            d: "Change the background color of the first `.box` to red"
        }
    },
    // ------ Data Flow ------
    16: {
        question: `What is MVC?`,
        answers: {
            a: "Model View Command",
            b: "Mapping View Command",
            c: "Model View Controller",
            d: "Mapping View Controller"
        }
    },
    17: {
        question: `Which of the following is *not* necessarily a benefit of MVC?`,
        answers: {
            a: "Single Responsibility",
            b: "Efficiency",
            c: "Separation of concerns",
            d: "All of the above *are* necessarily benefits of MVC"
        }
    },
    18: {
        question: `In MVC, `,
        answers: {
            a: "The Controller (user actions) affect the View (DOM), then updates the Model (data)",
            b: "The Controller invokes functions in the Model, and then updates the View",
            c: "The Model responds to changes in the View that are triggered by the Controller",
            d: "The Model updates the View when it gets triggered by the Controller"
        }
    },
    19: {
        question: `According to MVC principles, when a user clicks on the 'remove' button and we get an ID of an element to remove,`,
        answers: {
            a: "We should invoke `$('#id').remove()` (assume '#id' is the correct id)",
            b: "We should update our data model, then re-render the whole view",
            c: "Neither a nor b",
            d: "Either a or b"
        }
    },
    // ------ DOM Traversal ------
    20: {
        question: `Given the following code, which of the following will alert the correct value?
            <div class="container">
                <input class="username" type="text" />
                <button class="btn">Submit</button>
            </div>
            <div class="container">
                <input class="username" type="text" />
                <button class="btn">Submit</button>
            </div>
        `,
        answers: {
            a: `$(".btn").on("click", function(){
                    alert($(this).closest(".container").find(".username").val())
                })`,
            b: `$(".btn").on("click", () =>{
                    alert($(this).closest(".container").find(".username").val())
                })`,
            c: "Either a or b",
            d: "None of the above"
        }
    },
    // ------ Boom ------
    21: {
        question: `What will happen here?
            //HTML
            <div id="main">
                <p class="nalo"></p>
                <h1 id="corq">Pop</h1>
            </div> 

            //JS
            let x = "flap"
            let y = {a: "shlop", x: "dub"}
            const all = [x, y]

            x = all[1].x
            $("#corq").siblings(".nalo").append("<div>" + x + " - Ryk</div>")
        `,x`
        answers: {
            a: "Throws an error",
            b: "Nothing",
            c: "The `p` changes to `<p class='nalo'>dub - Ryk</p>",
            d: "The `p` changes to `<p class='nalo'>flap - Ryk</p>",
            e: "The `p` changes to `<p class='nalo'>undefined - Ryk</p>",
            f: "The `p` changes to `<p class='nalo'>[objectObject] - Ryk</p>",
            g: "The `p` changes to `<p class='nalo'><div>dub - Ryk</div></p>",
            h: "The `p` changes to `<p class='nalo'><div>flap - Ryk</div></p>",
            i: "The `p` changes to `<p class='nalo'><div>undefined - Ryk</div></p>",
            j: "The `p` changes to `<p class='nalo'><div>[objectObject] - Ryk</div></p>",
        }
    }
}
