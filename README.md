# packaging
Namespacing utility under 100 bytes!

Dynamically creates nested object trees, does not overwrite existing parts.

## Usage
Just add a script tag to your html before other scripts where it will be used
```html
<script type="text/javascript" src="packaging.min.js"></script>
```
Or just copy it to your source code
```javascript
// Code lines before

function packaging(path) {
    return path.split('.').reduce(function (packing, part) {
        return packing[part] = packing[part] || {};
    }, window);
}

// Code lines after
```
Then call the function with a dot separated path like:
```javascript
packaging('com.company.project').User = function (firstName, lastName) {

    return {
        firstName: firstName,
        lastName: lastName
    }
};

packaging('com.company.project').Group = function () {
    var storage = []

    function addUser(user) {
        storage.push(user);
    }
    
    function getUsers() {
        return storage;
    }

    return {
        addUser: addUser,
        getUsers: getUsers
    }
};

var group = new com.company.project.Group();
var someOne = new com.company.project.User('Some', 'One');
var otherOne = new com.company.project.User('Other', 'One');
var anotherOne = new com.company.project.User('Another', 'One');

group.addUser(someOne);
group.addUser(otherOne);
group.addUser(anotherOne);

var users = group.getUsers();
console.log(users);
```

## Examples
There are some other examples for usage in the examples folder