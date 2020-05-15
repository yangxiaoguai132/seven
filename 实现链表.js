/*
 * @Author: nanyang.yang
 * @Date: 2020-04-11 14:28:26
 * @LastEditors: nanyang.yang
 * @LastEditTime: 2020-04-11 14:29:29
 * @Descripttion: 用js实现一个链表结构
 */
function ListNode(value){
    this.val = value;
    this.next = null;
}

function List(value){
    this.head = new ListNode(value);
}

List.prototype.add = function(ele, val) {
    const newNode = new ListNode(ele);
    let cur = this.head;
    while(cur){
        if(cur.val === val){
            newNode.next = cur.next;
            cur.next = newNode;
            break;
        }else{
            cur = cur.next;
        }
    }
}
const list = new List(2);
console.log('list--------', JSON.stringify(list));
console.log(list.add(4,2));
console.log('list--------', JSON.stringify(list));