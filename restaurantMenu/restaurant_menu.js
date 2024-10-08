//initialize three arrays
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Fritters - $15'];
const mainCourseMenu = ['Steak - $25', 'Pasta - $18.99', 'Burger - $10.99', 'Salmon - $19.00'];
const dessertMenu = ['Cake - $22', 'Ice Cream - $4.99', 'Pudding - $7.99', 'Fruit Salad - $8.00'];

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

