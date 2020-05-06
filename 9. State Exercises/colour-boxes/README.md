## Solution
Well... this one was a tough one for me. I did go with the further study rather than just creating the more simple solution of holding state in the child.

For this one I track the state of all the boxes in the parent's state and then change the state based on a click.

## Issues I ran into
1) Had an issue with the onClick for the boxes - I set the onClick function in the parent on the <Box /> component but didn't know that I then had to also set it as a prop on the div in the child component. Had to reach out to stack overflow for this one.

2) Tracking all of the box's state in the parent was a little tricky for me - especially when I needed to update it while making sure that the next random colour selected wasn't the current colour. I solved this by 1) get the index and current colour of the box which was passed into the onClick function for each box (probably not the most resource efficent way to do it but for something so small like this, it won't matter) 2) splice and replace a copy of the current state into a new variable 3) select a random colour while excluding the current of the box 4) setState and it all rendered from there

## What could have been done better
Like I mentioned before, binding the function into each of the individual boxes isn't ideal. The instructor did the simple solution of holding state in the child - I'm pretty happy that I could solve this one by going that little bit further... took a while
