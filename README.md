# Routing

  -> Routing is one of crucial part of any website or web app.
  -> Routing helps to navigate from one page to another.
  -> Moving across the website with the payload data.
  
## Create atleast 2 component for navigate.

![image](https://user-images.githubusercontent.com/103558635/173997998-b18d872e-63e7-4e1b-999b-95f5670557d9.png)

## AppRouter.ts
![image](https://user-images.githubusercontent.com/103558635/173998056-a5f087ec-abca-4020-9011-d50b08579e90.png)

  Line 1:
    Import NgModule to make this class recognized as Module
    
  Line 2:
    Import Router and RouterModule for enabling the routing.
    
  Line 6 to 9:
    Create a Constant variable which holds the array of object.
    A object contains atleast 2 fields, Path and Component.
    Path: the url which will be requested
    Component: the component to show when Url is requested.
    
    /:<var>
    It is used in Route to send variable with the Request
    
  Line 11 to 14:
    Define imports and exports.
    
## AppModule.ts
![image](https://user-images.githubusercontent.com/103558635/173998339-85f304db-4a4b-4351-b5a1-eb636e4ae210.png)

  Import Router module in "Imports"
  
## App Template
![image](https://user-images.githubusercontent.com/103558635/173998432-3b821511-2c0e-4f80-8397-bbcb168a9af8.png)

  Create Anchor tag with routerLink to redirect to a page.
  And define RouterOutlet. To show the component in that part
  
  We can pass the request variable in url.
  
## First Component Ts
![image](https://user-images.githubusercontent.com/103558635/173998761-edad843d-af7e-461c-b4bd-bf02153a44ee.png)

  Import Router, ActivatedRoute, ParamMap
  Pass the DI (dependency injection) of ActivatedRoute
  NgOnInt: get the data from url.
  
## Output
![image](https://user-images.githubusercontent.com/103558635/173998982-39d917fd-5130-4fa6-9b84-aade91ba5984.png)

![image](https://user-images.githubusercontent.com/103558635/173999011-88b82476-2395-46fa-bce9-6e4d2e2ce461.png)

![image](https://user-images.githubusercontent.com/103558635/173999033-2e97cd07-25aa-4382-9591-b21fc9ad012e.png)
