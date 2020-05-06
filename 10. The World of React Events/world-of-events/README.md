## Learnings
This section was focused a lot around events and binding.

Not too much to learn on events - works in a similar way to vanilla JS, just different naming conventions.

Biggest learnings were from binding and the best way to bind. Should not bind inline because everytime react re-renders then it is going to create seperate functions over and over again (every time you bind a seperate function is created). This includes using arrow functions inline.

There is also the experimental method of using arrow functions as a method - this will bind, I've also seen this floating around the web when I was looking for solutions for the colour exercise.

Best way to do it is in the constructor function as it is explicit with what it is doing and it will only create 1 function comapred to inline which will create a new function every time it is called.

## Another huge learning for me
How to pass parameters into function in react. This was an issue that I was having with the last exercise. I now know that we can pass methods as props to children and then call the function from there - this will be done with a handleClick() or similar method which will then call the method which we can then pass parameters into.

## Flow of data 
parent component defines functino => function passed as prop to child => child component invokes the prop => parent function is called which will likely set the state => parent re-renders with children

## Keys
Let's react identify component - needs to be unique. Don't use index as a key if possible - just use UUID