function validateUsername(name) {

    if (name.length < 4) {
        return "Too Short";
    } 
    else if (name.includes(" ")) {
        return "No Space Allowed";
    } 
    else if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } 
    else {
        return "Available";
    }
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));   