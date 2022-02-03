function checkNull(variable: number | string | null | undefined):void {
    if (variable !== null) console.log(`${variable} is not null.`);
    else console.log(`${variable} is null`);
}

checkNull(2);
checkNull(null);
checkNull(undefined);

interface Container { value: number | null | undefined }

function checkNullOrUndefined(container: Container) {
    if (container.value != null) console.log(`${container.value} is not null or undefined`);
    else console.log(`${container.value} is null or undefined`);
}

// != null checks if is not null or undefined

checkNullOrUndefined({ value: 10 });
checkNullOrUndefined({ value: null });
checkNullOrUndefined({ value: undefined });