# Form Validation

  -> Form Validations are almost used when there is a need to validate user's input.
  -> It helps in getting proper data from user, which follows the constraints specified.
  -> As we use Vanilla Validations in simple HTML form, we can use those type in Angular also.
  
## App Module ts
![image](https://user-images.githubusercontent.com/103558635/174231070-80503d6c-c508-4458-8cbf-526378c8f801.png)

  Add ReactiveFormsModule
  
## App component ts
![image](https://user-images.githubusercontent.com/103558635/174231152-0be3ffde-f4ad-4f8b-ace5-856000edb150.png)

  Line 12:
    A variable for handling form input.
    
  Line 14 to 19:
    Created FormGroup with the variable and added the validations for it.
    
  Line 21:
    Created Get method to get status of that form variable.
    Which includes any errors attached to it.
    
## App Template
![image](https://user-images.githubusercontent.com/103558635/174231382-4e001e61-b811-4872-b128-3dff8339b023.png)


  Line 1:
    Created form and assigned FormGroup
    and Input tag with FormControl
    
  Line 6 to 9:
    Created a div to show errors based on the data return from the GET method.
    
## Output
![image](https://user-images.githubusercontent.com/103558635/174231553-f3e1ecdb-d4dc-4667-9ae5-919e172ecc1d.png)
![image](https://user-images.githubusercontent.com/103558635/174231586-76ec5765-5705-4a71-9d8f-dcd973972b15.png)
![image](https://user-images.githubusercontent.com/103558635/174231617-da19bc85-39d1-4d0d-aef1-06b0902c4ec0.png)



