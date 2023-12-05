# Documentation for Agrotrade Development
## This documentation compiles changes and update on the projects
### It would be best you apply the changes listed here, one at a time, from top to bottom
### Subsequent changes/updates may not be available on all my branches. Please always check my prototype branch.

**05/12/2023 => 1**
* Issue: unwanted redirection to /buyer directory. *
* Solution: Go to the /seller/index.js file, and scroll to the bottom. Notice the conditional statement for the buyer section, it is set to "!=" This is not correct. Change it to "==" After this correction, visiting localhost:3000/seller  on your browser would automatical redirect you to localhost:3000/auth/continue-registration*

**05/12/2023 => 2**
* Update: Addition of farmer/buyer tabs  *
* Solution: You notice the changes and apply them on yours. You can copy some them on signup.js *

**05/12/2023 => 3**
* Update: removal of unused feature on /auth/signup.js  *
* Solution: since we would no longer implement the other authentication providers, we have to clean up our page by removing them (including the farmer/buyer tabs). *

**05/12/2023 => 4**
* Update: prevent authenticated users from accessing on /auth/signup.js  *
* Solution: On this update, we would prevent authenticated users from accessing the signup page since it's the ideal thing to do - if people are already signed in, they shouldn't be able to visit the signup page. All you have to do is to go to /seller/index.js and copy the last block of code, the one about getServerSideProps. Next, paste it at the bottom of your /auth/signup.js Remember to import getServerSession, and authOptions*