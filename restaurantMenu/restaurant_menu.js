//initialize three arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Fritters'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

//iterates through breakfastMenu array using MAP Method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
    //Converts breakfast menu array into HTML Strings using map()

//Traverse mainCourseMenu using forEach
let mainCourseItem = ''; //initialized using empty string
mainCourseMenu.forEach((item, index) => { //loops until last part of the index is reached
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;}); //Iterates through mainCourseMenu
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//Iterate the dessertMenu array using for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;} //Iterates through the dessertMenu using For-Loop instead of forEach
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

