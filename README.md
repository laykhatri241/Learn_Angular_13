# Event Binding

  -> Events are special triggers which occurs when any user interact with the system.
  -> Interaction can be click or key press or it can be even custom event.
  -> Events can be overridden to change its behaviour.
  
## Syntax 

  <button (<event_name>) = "<event_handler>()">Text </button>
  
## Root Component
![image](https://user-images.githubusercontent.com/103558635/173001591-b6a50e29-80b5-4f1d-b6be-574b207bae77.png)


## Root Template
![image](https://user-images.githubusercontent.com/103558635/173001640-0584e14e-75a9-4e67-90ff-be7799303ff5.png)


## Child Component
![image](https://user-images.githubusercontent.com/103558635/173001673-70a94a02-cfb5-43c2-a29f-1fbd77a46155.png)


## Child Template
![image](https://user-images.githubusercontent.com/103558635/173001713-c4f96a7e-4456-43f4-937c-b33943f4b857.png)


## Explanation

### Simple event binding:

  Root Component: (Line 11 to 13):
  
    A method which logs data when clicked
    
  Root Template: (Line 1):
  
    A button with click event bind to the method.
    
### Custom Event Binding:

  This is achieved by doing Emit from child component to parent.
  
## Output
![image](https://user-images.githubusercontent.com/103558635/173002161-2ec7de2a-c28d-4159-ae87-39aa951e5859.png)


![image](https://user-images.githubusercontent.com/103558635/173002207-fe6640b7-47aa-461c-b368-09fd276dc600.png)
