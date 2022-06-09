# Reference Data sharing between parent and child

  -> In this method we use ViewChild and ContentChild. To get data from child.
  
## Access child variable inside Parent child.

### Child TS

![image](https://user-images.githubusercontent.com/103558635/172784106-466ff588-5a6b-47f9-a4bf-f045a94dd80e.png)

  -> Add a variable in Child.
  
### Parent Templae

![image](https://user-images.githubusercontent.com/103558635/172784454-3d257157-3d87-4127-a73d-3b2ab6d882ce.png)

  -> Add Child Component
  
### Parent TS

![image](https://user-images.githubusercontent.com/103558635/172784719-f689ae88-59f4-4eca-a62a-15c62f78ca6c.png)

  Line 1:
    Import  "ViewChild" and "AfterViewInit"
    
  Line 2:
    Import your Child Component
    
  Line 11:
    Create @ViewChild property. Name it Child.
    Pass your Child component into it.
    
  Line 13-15:
    Create Life cycle method AfterViewInit
    Alert the variable of child component.
    
### Output
![image](https://user-images.githubusercontent.com/103558635/172785154-541c90f1-4f72-41b5-b4a4-566e9b5a0ef8.png)
