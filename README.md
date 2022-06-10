# NG-CONTENT

  -> It is used to Project content of another component in current Component.
  -> It is often used used to embbed re-usable components.
  
## Child Component Template
![image](https://user-images.githubusercontent.com/103558635/172991057-a518f775-79c9-4140-b024-13e6a14f42b8.png)

## Parent Component Template
![image](https://user-images.githubusercontent.com/103558635/172991126-32882a47-df56-4761-a133-2e0bb2165c0f.png)

## Explaination

### Whole Content

  Child Line 2:
    When we use only ng-content, then all the information provided from the parent component is projected directly.
   
  Parent Line 2:
    The Content which will be shown.
    
### Specific Content

  Parent Line 4-5:
    We have added an extra attribute to the tag. Which will be used by the child to show the content
    
  Child Line 5-6:
    Adding binding in ng-content tag, will only bind the data which was provided in that specific attribute.
    
## Output
![image](https://user-images.githubusercontent.com/103558635/172991504-bf64d6de-c3f0-4e63-8ea4-be2fa60d173f.png)
