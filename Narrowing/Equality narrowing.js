function checkNull(variable) {
    if (variable !== null)
        console.log("".concat(variable, " is not null."));
    else
        console.log("".concat(variable, " is null"));
}
checkNull(2);
checkNull(null);
checkNull(undefined);
function checkNullOrUndefined(container) {
    if (container.value != null)
        console.log("".concat(container.value, " is not null or undefined"));
    else
        console.log("".concat(container.value, " is null or undefined"));
}
checkNullOrUndefined({ value: 10 });
checkNullOrUndefined({ value: null });
checkNullOrUndefined({ value: undefined });
