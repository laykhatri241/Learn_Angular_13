# Component Communication using Binding method

  -> In this method we use @Input and @Output to send data.
  -> @Input is used to receive data from Parent
  -> @Output is used to send data from Child
  
## Parent To Child

### Child TS

![image](https://user-images.githubusercontent.com/103558635/172770529-bfaea49d-0907-4aa0-a6e9-2242742275e4.png)

  Line 1:
    Import "Input" interface from Angular-core
    
  Line 9 to 10:
    Create a Variable with @Input()
    
### Child Template  
    
![image](https://user-images.githubusercontent.com/103558635/172770803-4e27537d-db6a-4c6f-88df-2cd515f42f04.png)

  Line 1:
    Display that variable on page
    
### Parent Template

![image](https://user-images.githubusercontent.com/103558635/172770949-8956fd2d-4487-41df-9580-f73f6019e91c.png)

  Line 1:
    Import Child Component in Template.
    Pass Variable Name and value of it.
    \[<var_name>\]="\<value\>"
    
### App Template

![image](https://user-images.githubusercontent.com/103558635/172771208-16c4e328-e881-48d4-aa08-db68978944d3.png)

  Line 1:
    Import Parent Component in App Template.
    
### Output

![image](https://user-images.githubusercontent.com/103558635/172771285-41367b65-3dcc-4b95-8707-f918a7aec0a8.png)
