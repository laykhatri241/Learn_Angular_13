# Structural Directive

  -> These directive manipulate the html structure based on the condition and looping
  
## Types

  1) NgIf - It evalutes the condition, if its true than renders the section
  2) NgFor - Used to itrate over the list to get the data
  3) NgSwitch - Upgraded version of If. Supports multiple condition check.

## Component.ts
![image](https://user-images.githubusercontent.com/103558635/173507481-7e722118-ac04-410e-a3fa-41ee724f037a.png)

  Line 11:
    Boolean variable to handle visiblity of title
    
  Line 13:
    List of String
    
  Line 14:
    A variable with object of key value pair.
    
## Template
![image](https://user-images.githubusercontent.com/103558635/173507836-52679d1e-117f-44fe-9422-5945358c2127.png)

  Line 1 to 3:
    Demonstrated NgIf by using the variable as condition
    
  Line 7 to 9:
    Demonstrated NgFor
    
  Line 13 to 16:
    Demonstrated NgSwitch
    
## Output
![image](https://user-images.githubusercontent.com/103558635/173508054-941d35ba-0d8f-4caf-90ad-9aad87753a70.png)

