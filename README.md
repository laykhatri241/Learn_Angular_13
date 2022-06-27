# HttpClient

  -> A web app without connecting to another web api, its nearly no use.
  -> So for calling api from our Angular app we need to implement HttpClient.
  
## App module ts
![image](https://user-images.githubusercontent.com/103558635/174266776-71fd3b23-e7bc-43ed-8321-eeb645709647.png)

  -> Add "HttpClientModule" in imports array
  
## DataService
![image](https://user-images.githubusercontent.com/103558635/174267000-32618466-895d-48d2-a255-78304e763cee.png)

  -> Create a service.
  -> DI httpClient
  -> Create a method to get data

## App Componenet Ts
![image](https://user-images.githubusercontent.com/103558635/174267239-99b9b942-2a6a-4527-9419-95e9e95e9e1b.png)

  -> DI the service which we created.
  -> OnInit method. Call the function.
  -> Output will be logged in the Console.
  
## Output
![image](https://user-images.githubusercontent.com/103558635/174268437-f2c30a60-d7e1-4ec4-b2a2-f5b09220796a.png)
