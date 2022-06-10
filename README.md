# Pipes

  -> These are inbuild functions which can help to format data type or object.
  
## Inbuit Types of Pipes

  1) Date
  2) UpperCase
  3) Currency
  4) Percent

## Component
![image](https://user-images.githubusercontent.com/103558635/172995257-0ed41d25-befb-41c2-a55a-8e4b7779a268.png)

## Template
![image](https://user-images.githubusercontent.com/103558635/172995297-1d5d6da6-e719-44c1-b6bf-7f71f19a185a.png)

## Explaination

  Component:
    We have 2 variables, one is string and other is date object
    
  Template:
  
    Line 1:
      Date object is used, and piped with Date
      
    Line 2:
      title variable is used, and piped with UpperCase
      
    Line 3:
      Number is used, and piped with currency with specific option of currency
      
    Line 4:
      Number is used, and piped  with Percentage
      
## Custom Pipes

  -> We can create our own custom pipes which hands the formatting as the way we want it to be.
  
### Command

  ng g p <Pipe_name>
  
  ![image](https://user-images.githubusercontent.com/103558635/172996197-ffa285e3-981e-4888-a9c5-35b36c9a559d.png)

  
## Pipe

![image](https://user-images.githubusercontent.com/103558635/172996249-4481e16b-37ae-4510-a6d7-33e7f2493122.png)

    Line 3 - 5:
      Pipe attribute which initializes the name. so it can be used anywhere in the project
      
    Line 7 -9:
      Transform method, it does the real magic behind the scene.
      
### Template
![image](https://user-images.githubusercontent.com/103558635/172996501-2b1a28f2-c688-4959-8dfb-3ebec2deec43.png)


### Output
![image](https://user-images.githubusercontent.com/103558635/172996532-183aacfc-2d48-42ca-83d6-1b8612ff977c.png)
