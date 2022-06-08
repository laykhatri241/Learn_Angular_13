# Lifecycle methods in Angular

  1) constructor
  2) ngOnChanges = Gets called when any Bound Inputs are changed. If there is no changes than this method won't be called.
  3) ngOnInit = Gets called once to initialize the component.
  4) ngDoCheck = Gets called on every change Detected in the Component
  5) ngOnDestroy = Gets called when Component is destroyed.

## Steps to Implement
![image](https://user-images.githubusercontent.com/103558635/172535461-11455a96-f4ba-4dac-b59f-53368d2be2c7.png)

  Import the Life cycle methods
  
![image](https://user-images.githubusercontent.com/103558635/172535575-7973040a-b455-4f0d-a3c2-2c8f66961620.png)

  Implement those interfaces in class to change Life cycle methods.
  
![image](https://user-images.githubusercontent.com/103558635/172535666-fb191875-04e9-447b-a6d7-ebed6f2b088f.png)

  Output Example
