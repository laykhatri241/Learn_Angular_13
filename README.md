# Custom Attribute Directive

  We can have our own directive which can perform the custom styling or behaviour when its assigned.
  
## Command

  -> ng g d <name>
  
  This will create new TS file with boilerplate.
  And also add the imports in app.modules.ts
  
## Directive.ts
![image](https://user-images.githubusercontent.com/103558635/173501392-e68c2ccb-a423-4786-8eaa-fd1048178cb1.png
  
  Line 2:
    We added ElementRef. This will help us to get direct access to the DOM element within our class
  
  Line 4:
    ByDefault it will have the selector. you can change the selector as per your need. 
    This represent the name of directive which will be used in HTML tag for binding.
  
  Line 7 to 9:
    Passed a variable of type ElementRef so that we can directly manipulate the element in DOM.
    changed the property of it.
  
## app.component.ts
![image](https://user-images.githubusercontent.com/103558635/173501952-da205a49-59b5-48dc-9589-fae0ea189548.png)
  
  Added a P tag and added the custom directive which we just created.
  
## Output
![image](https://user-images.githubusercontent.com/103558635/173502054-b3e6b395-4131-4333-8731-69d9758a9bc8.png)

  
## Extra
  
  We can have different behaviours for that directive. 
