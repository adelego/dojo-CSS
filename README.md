# Welcome to the Integration DOJO

### Tasks

#### 1 Clone this repository
`git clone git@github.com:theodo/dojo-CSS.git && cd dojo-CSS`

#### 2 Install the project
`yarn install`

#### 3 Go to the DOJO branch
`git co start-branch`

#### 4 Check out the expected design on In-vision
Ask us to invite you on the Invision project to have access to the mocj-up (you'll need to register)

#### 5 Let's go !
`yarn start`

The target is to reproduce the design of the mock-up, you already have the start of the project with :
 - 2 react components, Header.js and Card.js with their own stylesheets
 - 1 global stylesheet with some basic fonts / colors
 - the needed API requests to populate your card, from the pokemonList you have, for each pokemon you can access the requested data with : 
    - name : `pokemon.sprites.name`
    - logo : `pokemon.sprites.front_default`
    - types : `pokemon.types[x]type.name, pokemon.types[x+1]type.name` ...
    - id : `pokemon.sprites.id`
 
 
##### Ticket 1 : 
As a user, on the url `localhost:3000`, I can see a header designed as it is on the mock-up, if I scroll, the header is sticky.

##### Ticket 2 : 
As a user, on the url `localhost:3000`, I can see a Card with the information of my Pokemon team, designed as it is on the mock-up.
  
###As a reminder :

**Check the standard below to make sure you have everything in your ticket:**
 - I can see a static visible result like a screenshot of the mock up or a drawing
 - I have all the assets I need
 - I know what the edge cases are
 - I know how it looks like on different screen size

**and:**

 - List all the components /containers you will use/create/insert content into
 - List for each component their margin and padding
 - List for each component the fixed sizes
 - List position properties for each element
 - List tricky cosmetic properties 
  
 **Don't hesitate to andon if you have any technical or mock-up related question !**

###Good luck !

