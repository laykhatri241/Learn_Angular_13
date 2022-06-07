# First Angular App
In this Branch I have created a small Component which shows Hello world.

## What is Component?
	->Components are smaller sections of App.
	->It is used to divide application into smaller parts which can help to maintain and debug in longer run.

## Create an Component:
	-> Navigate to ./src/app
	-> Create new File. 
	-> Name it "<name>.component.ts"
	
## Structure of Component:

![image](https://user-images.githubusercontent.com/103558635/172300188-be970692-8777-4b12-b679-9c7e5532611b.png)

	It consist of 3 Major Sections:
	
	1) Import Section (Line 1)
	2) Component Section (Line 3 to 13)
	3) Export Section (Line 14 to 16)
	
### Import Section
	-> This section contains all the imports for this file.
	-> Any external library or component to be used in this.

### Component Section
	-> This section actually contains the code about the View and Logic of it.
	-> It have Sub Section
		1) selector: This holds the name of selector, where this Component will be rendered to.
		2) template / templateUrl: This holds the HTML code of the Component.
			template is used when you directly write your HTML code in this file only.
			templateUrl is used when you have created different file for the HTML code.
		3) styles / stylesUrl: This holds the CSS styling in this Component.
			styles is used to diectly write CSS styling in same file.
			stylesUrl is used to link external file for CSS styling.
			
### Export Section
	-> This is class section of Component.
	-> As of now you can say, It will hold the Variable for us.
	-> Those variables can be used anywhere in the component.
	
## Link New Component

![image](https://user-images.githubusercontent.com/103558635/172301329-ff68cdfe-c06a-4dc7-879e-7e5faefd43f9.png)

	-> We need to register the Component in the app, than only we can use it.
		
	Steps for Register The Component:
	1) Navigate to: "/src/app/app.modules/ts
	2) Import your Component
	3) Add component name in "declarations" array.
	
## Actually View the Component.

![image](https://user-images.githubusercontent.com/103558635/172301678-6dabcff6-39bd-485a-b313-e78d5cfe6499.png)

	-> Navigate to "/src/app/app.component.html"
	-> Empty the File
	-> Add your Component as Tag.

