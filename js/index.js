'use strict';

var billTotal, peopleTotal, tipPercent, billTotalNum, peopleTotalNum, tipPerPerson, totalPerPerson;
peopleTotalNum = 1;

function totalBillUpdate(event) {
    billTotal = document.querySelector('#billTotal');
    billTotal.value = event.target.value;
    billTotalNum = billTotal.value;
    console.log(billTotalNum);
    updatePerPersons();
}

function totalPeopleUpdate(event) {
    peopleTotal = document.querySelector('#peopleTotal');
    peopleTotal.value = event.target.value;
    peopleTotalNum = peopleTotal.value;
    console.log(peopleTotalNum);
    updatePerPersons();
}

function getTipPercent(event) {
    let customPercent = document.querySelector('#percentNum');
    customPercent.value = event.target.value;
    tipPercent = customPercent.value / 100;
    console.log(tipPercent);
    updatePerPersons();
}

function setTipPercent(event) {
    let customInput = document.getElementById('percentNum');
    switch(event.target.value) {
        case '10%':
            tipPercent = 0.1;
            customInput.setAttribute('type', 'hidden');
            console.log(tipPercent);
            break;
        case '15%':
            tipPercent = 0.15;
            customInput.setAttribute('type', 'hidden');
            console.log(tipPercent);
            break;
        case '20%':
            tipPercent = 0.2;
            customInput.setAttribute('type', 'hidden');
            console.log(tipPercent);
            break;
        case '25%':
            tipPercent = 0.25;
            customInput.setAttribute('type', 'hidden');
            console.log(tipPercent);
            break;
        case '50%':
            tipPercent = 0.5;
            customInput.setAttribute('type', 'hidden');
            console.log(tipPercent);
            break;
        case 'Custom':
            customInput.setAttribute('type', 'number');
            customInput.setAttribute('placeholder', 'Input a percent here');
            customInput.setAttribute('onchange', 'getTipPercent(event)');
            buttonBox.append(customInput);
    }
    updatePerPersons();
}

function updatePerPersons() {
    tipPerPerson = Math.ceil(((billTotalNum * tipPercent) / peopleTotalNum) * 100) / 100;
    totalPerPerson = Math.ceil((Math.ceil((billTotalNum / peopleTotalNum) * 100) / 100 + tipPerPerson) * 100) / 100;
    console.log(tipPerPerson);
    console.log(totalPerPerson);
}
