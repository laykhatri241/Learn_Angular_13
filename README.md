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


## Child To Parent

### Child TS
 
![image](https://user-images.githubusercontent.com/103558635/172772268-12f9e92a-9d55-4277-a001-811f1dd33bed.png)

  Line 1:
    Import "Output" and "EventEmitter"
  Line 12:
    Create Output Variable with a new object of EventEmitter
    The name of Output Variable is going to be used identify which event got triggered.
    
  Line 14 to 16:
    Create a method to send an Emmit.
    <Output_Variable>.emit(<value>);
  
### Child Template

![image](https://user-images.githubusercontent.com/103558635/172772823-a5abaa9a-a0da-4af3-9e96-fcc8271a7672.png)

  Create a button to call the function From TS
  
### Parent TS
  
![image](https://user-images.githubusercontent.com/103558635/172772929-dadba817-5892-400c-b7ff-52409b24375c.png)

  Line 9 to 11:
    Created a function to show data in Alert box.
    The data send by the child component in Emit.
  
### Parent Template
  
![image](https://user-images.githubusercontent.com/103558635/172773049-4b88609a-3129-4f24-8930-57c93d6c8b50.png)

  Line 3:
    The Output variable created in Child TS, Now it will be a function call here.
    So, use that and assign a method to be called.

### Output

![image](https://user-images.githubusercontent.com/103558635/172773453-dc848aaf-541c-4d16-9f50-c93dfb425bf2.png)
  
![image](https://user-images.githubusercontent.com/103558635/172773493-d3c395c0-9ccd-4a47-b0cf-cebe7f809dd3.png)


