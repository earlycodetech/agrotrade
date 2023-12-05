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