function describeValue (params) {

    let textType = typeof params;

    const resultValue = params ? "truthy" : "falsy";
    return `${textType} | ${resultValue}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));