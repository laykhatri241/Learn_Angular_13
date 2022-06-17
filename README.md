# Reactive Forms

  -> Reactive forms are based on Model Driven approach.
  -> It provides better binding and communication between Model and Forms.
  -> When ever any state gets changed, updated state is returned and updates the value inside it.
  -> It maintains the Integrity of he model.
  
## App module ts
![image](https://user-images.githubusercontent.com/103558635/174227261-e4151f06-8dbc-4833-aaad-fd958c9fe228.png)

  We have to import and Add "ReactiveFormsModule"
  
## App Component TS

![image](https://user-images.githubusercontent.com/103558635/174227467-0790c2ab-7e0b-4ed4-a490-f6f1583dfbcc.png)

## App Template

![image](https://user-images.githubusercontent.com/103558635/174227524-576f8076-d1a3-463e-a912-56d9cd25d833.png)


## Explanation 

1) Simple Form Control
  
    Component=>
      Line 12:
        Created a variable of type FormControl
        
      Line 19 to 21:
        Created a method to Update the value of FormControl variable
        
    Template =>
    
      Line 1 & 2:
        Adding label and Input tag for that Form control.
        
      Line 5:
        Displaying the realtime value.
        
      Line 8:
        Button to call the method to update the value
        

    Output =>
    ![image](https://user-images.githubusercontent.com/103558635/174227852-8dada6cf-393a-4402-aeaa-aa81147d7e2c.png)
    ![image](https://user-images.githubusercontent.com/103558635/174227872-23ac437c-e35e-4acb-bc1b-ac3a0d3dd428.png)

2) Form Group

    Component =>
      Line 14 to 17:
        Created a object of FormGroup type.
        Added other objects of FormControl type.
        
      Line 23 to 25:
        Created onSubmit method, to log the values provided in FormGroup
        
    Template =>
      Line 12 to 18:
        Created Form with FormGroup property attaching to FromGroup object
        And other required input fields.
        
    Output =>
    ![image](https://user-images.githubusercontent.com/103558635/174228328-c02c698d-ce77-4ad4-8d7b-61f78c212ceb.png)
    ![image](https://user-images.githubusercontent.com/103558635/174228357-c81607bf-9da4-40ce-8840-2ba319116bda.png)

        
