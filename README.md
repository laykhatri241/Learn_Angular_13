# Template Driven Form

  -> Template Driven forms are prefered to be used when there is less number of fields to be taken in form.
  -> Ideal for small size form.
  -> We manually need to add fields and bind its methods and data
  
## AppModule.ts
![image](https://user-images.githubusercontent.com/103558635/174002421-704e01f8-527a-4f7b-b24f-0a389b91685a.png)

  Add FormsModule in Imports
  
## Gaming Model
![image](https://user-images.githubusercontent.com/103558635/174002478-20854573-df2e-4d79-90f4-672c0e1cd33c.png)

## AppComponent.ts
![image](https://user-images.githubusercontent.com/103558635/174002521-b24f49cc-f93d-4c02-8788-e776266f6189.png)

  Import our created model
  Create a array of string, pass some values to it.
  Create a model of our Class
  Create a variable to get track of submission
  Create function to handle Submission
  
## AppTemplate
![image](https://user-images.githubusercontent.com/103558635/174002808-f0f012ca-b464-482b-8c42-5afbf90824d3.png)

  Create 2 div's. Visibility of those is handled by the value set in isSubmitted variable which tracks the submission.
  In 1st Div, Create your form with appropriate inputs and form elements.
  In 2nd Div, Show the values submitted.
  
## Output
![image](https://user-images.githubusercontent.com/103558635/174003210-e47cce6c-401b-4ebb-825c-d8eba84d0de3.png)

![image](https://user-images.githubusercontent.com/103558635/174003231-e08075c7-9c49-4480-98ce-89b2a09c9189.png)
