#Text Interpolation in Angular.

  -> There is only one way binding. Which means the data can only be shown from Component to template.
  -> We have to follow this: also known as Mustache Syntax
    {{ <var> }}
  
## Things we can do / put in Mustache Syntax
  1) Text
  2) Number
  3) Number Operations
  4) Function call
  
## Things we cannot do
  1) Assignment (= , +=, -=, *=, /=, %=)
  2) new, typeof, instanceof
  3) Chaining Expressions
  4) Increment or Decrement operator (++ , --)
  
## Implementation

### Component
  
![image](https://user-images.githubusercontent.com/103558635/172537716-6af4c33a-fee2-4c9c-a15f-723daff84ea4.png)

  -> 9th Line: 
  
String variable stroring a string.
  
  -> 11th to 13th Line:
  
Function to get current Datetime as string
  
### Template
![image](https://user-images.githubusercontent.com/103558635/172538240-a9e55786-60dd-4b4a-a7d2-5b88a760ec42.png)

  -> 1st Line:
  
Variable output
  
  -> 2nd Line:
  
Number output
  
  -> 3rd Line:

Number Operations output
  
  -> 4th Line:
  
Calling Function
  
### Output

![image](https://user-images.githubusercontent.com/103558635/172538531-bb97cccd-ec98-438c-b981-b3c0703b1141.png)

  
