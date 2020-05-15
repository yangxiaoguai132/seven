/*
 * @Author: nanyang.yang
 * @Date: 2020-04-09 08:38:51
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-09 08:40:00
 * @Descripttion: 
 */
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];
  
async function getTodos() {
    const promises = urls.map(async (url, idx) => 
        console.log(`Received Todo ${idx+1}:`, await fetch(url))
    );
    await Promise.all(promises);
    console.log('Finished!');
}
getTodos();

