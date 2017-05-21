```
ng new ablinks
```

Change into that directory

```
cd ablinks
```

```
ng serve
```

```
http://localhost:4200
```

Look at file structure

Change some html in the `app.component.html`

```
<p>Here is some text</p>
```

Change title property in `app.component.ts`
```
// from
    title = 'app works!';
// to
    title = 'My 1st Angular app';
```

Add style to `styles.css`. These are global styles.

```
h1 {
    color: green;
}
```

Add style to `app.component.css`. Component Styles override global styles.

```
h1 {
    color: red;
}
```

## Add Bootstrap

Add jQuery, Bootstrap, and ngx-bootstrap using NPM

```
npm install jquery bootstrap ngx-bootstrap --save
```

Add this style to "styles": ["styles.css"] in `.angular-cli.json`


```
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

Add these scripts to "scripts": [] in `.angular-cli.json`

```
"scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```

Restart dev server

```
ng s
```

    
## Property Binding
Add a property to `app.component.ts`

```
imageUrl = "http://lorempixel.com/400/200/"
```

Add image tag to the template `app.component.html` using interpolation (property binding)
```
<img src="{{ imageUrl }}">
```

Add image tag putting the DOM porperty in square brackets (also property binding)

```
<img [src]="imageUrl">
```

You can set the textContent property of the H1 DOM element using this [] syntax

```
<h1 [textContent]="title"></h1>
```

## Class Binding

Add a buttons to `app.component.html`

```
<button class="btn btn-primary">Submit</button>
```

Use class binding to add the "active" class to button when the isActive property is true

```
// change from 
    <button class="btn btn-primary">Submit</button>
// to
    <button class="btn btn-primary" [class.active]="isActive">Submit</button>
```

Add isActive property to `app.component.ts`

```
isActive = true;
```

## Style Binding

Use style binding to set the backgroundColor style to "green" the isActive property is true otherwise set it to "gray"

```
<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'gray'">Submit</button>
```

## Event Binding

Use event binding to handle events raised by the DOM such as clicks and keystrokes

```
<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'gray'" (click)="onClick()">Submit</button>
```

## Firebase

Sign up for a [Firebase](https://firebase.google.com/) account

Install [angularfire2](https://github.com/angular/angularfire2) (Before you start installing AngularFire2, make sure you have latest version of angular-cli installed. See [installation instructions](https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md).

Install AngularFire 2 and Firebase

```
npm install angularfire2 firebase --save
```