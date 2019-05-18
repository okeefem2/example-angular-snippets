# Example Angular Component Lib With Hot Reloading
Created this example library in response to https://github.com/angular/angular/issues/27104 for information purposes!

Sometimes it is useful to be able to develop a library alongside another project. By default to do this, you would have to build the library code, and install it in the project that needs to use it. This is a useful method because it better emulates how another person would consume your library. But sometimes it is nice to be able to develop the library and your own project at the same time. To do this you just need to make a very small change in your tsconfig.

Steps (General):
 - First created library with `ng g lib example-component-lib`
  * Note that by default this creates a module, component an service, and exports them in `src/public_api`
- This step ^ adds the following to `tsconfig.json`

```
"example-component-lib": [
    "dist/example-component-lib"
  ],
  "example-component-lib/*": [
    "dist/example-component-lib/*"
  ]
```
which will let you import from the dist folder of your library when it is built and installed. If you want to develop the project and library side by side with all the benefits of hot reloading, just change those to 
```
"example-component-lib": [
    "projects/example-component-lib/src/public_api"
  ],
  "example-component-lib/*": [
    "projects/example-component-lib/src/"
  ]
```
- Next imported `ExampleComponentLibModule` in `AppModule` and added `import { ExampleComponentLibModule } from 'example-component-lib';`
  * I am able to import directly from the lib because I pointed that library name to `projects/example-component-lib/src/public_api` in `tsconfig.json` and `public_api` handles exporting the module
- Lastly added `<lib-example-component-lib name="Guest"></lib-example-component-lib>` to `app.component.html` and ran `ng serve`
- Now if a change is made in the `ExampleComponentLibComponent` (Change Hello to Goodbye in the template for instance)


