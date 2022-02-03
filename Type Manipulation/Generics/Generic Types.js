function identity(arg) {
    return arg;
}
var myIdentity = identity;
var temp = myIdentity(10);
console.log(temp);
var myNewIdentity = identity;
temp = myNewIdentity(144);
console.log(temp);
