# Dependency Injeciton

  -> When we want to have functionality of another class in our class, we have to create the objects of those type of class in our class.
  -> Dependency Injection helps us to automatically make object for us when class constructor is called.

## Command to create Service

  -> ng g s <name>
  
## Service.ts
  
![image](https://user-images.githubusercontent.com/103558635/173992536-868cad48-c309-4e3d-9f1a-afa0c2b4544a.png)

  -> Boilerplate will be provided by the command.
  
  Line 9 to 11:
    created a custom function to log a message with Key and Value.
  
## App.ts
![image](https://user-images.githubusercontent.com/103558635/173992699-fb56b096-afb0-4c8d-a51d-00c4b6d1f9b6.png)

  Line 12:
    Pass the private parameter in constructor as type of Service.
  
  Line 13 to 16:
    In NgOnInit(), we have used that service to log the different message
  
## Output
![image](https://user-images.githubusercontent.com/103558635/173993636-2df3b1ee-7eab-45a0-91ad-1502501d9b01.png)
