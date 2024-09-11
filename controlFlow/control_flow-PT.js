//Organization Dietary Services
//Access Levels
let userRole = "employee";
let accessLevel;

if (userRole === "employee") {
    accessLevel = "Full access to Dietary Services";
} else if (userRole === "enrolled member") {
    accessLevel = "Access to Dietary Services and Dietician";
} else if (userRole === "subscriber") {
    accessLevel = "Partial Access to Dietary Services only";
} else {
    accessLevel = "Subscirbe first to access this facility.";
}
console.log("Access Level:", accessLevel);

