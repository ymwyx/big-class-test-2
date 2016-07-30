'use strict';
const fix=require('../spec/fixture')
    
    
let tags=[
    'ITEM000',
    'ITEM001',
    'ITEM001',
    'ITEM001',
    'ITEM001',
    'ITEM003-2',
    'ITEM005',
    'ITEM005',
    'ITEM005'];



function getCartItems(tags) {
    return tags.map(function (tag) {
        let arr=tag.split("-");
        return arr.length===2?{
            barcode:arr[0],amount:parseInt(arr[1])}:
        {
            barcode:arr[0],amount:1
        }
    });
}

function calAmountItems(items) {
    let amountBarList=[];
    for (let i=0;i<items.length;i++){
        let exsit=amountBarList.find(function (item) {
            return item.barcode===items[i].barcode;
        })
        if (!exsit){
            amountBarList.push(items[i])
        }
        else {
            exsit.amount=parseFloat(items[i].amount)+parseFloat(exsit.amount);
        }
    }
    return amountBarList;
}


let loadPromotions=fix.loadPromotions();
let loadAllItems=fix.loadAllItems();



module.exports={
    getCartItems:getCartItems,calAmountItems:calAmountItems
}