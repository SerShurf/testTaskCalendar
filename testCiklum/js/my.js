
let height = 10, width = 6;
let arrDivCont = [];
let daysArr = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let daysArrChoose = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let membersArr = ['Geralt', 'Tris', 'Jenifer', 'Ciri'];
let membersFitterArr = ['All Members', 'Geralt', 'Tris', 'Jenifer', 'Ciri'];
let timeArr = [ 10, 11, 12, 13, 14, 15, 16, 17, 18];
tableName();
filterFoo( membersFitterArr);
btnAddEventf();
tableView();

let qqq = document.getElementsByClassName('filter');

filter.onchange = function() {
    console.log(this.value);
    let items = table.getElementsByClassName('allMem');
    for (let  i=0; i<items.length; i++) {
        if (items[i].classList.contains(this.value)) {
            items[i].style.display = 'flex';
        } else {
            items[i].style.display = 'none';
        }
    }
};


function filterFoo (arr) {

    let select = document.createElement('select');
    select.id = 'filter';
    document.body.appendChild(select);

    for (let i = 0; i < arr.length; i++) {
        let selectList = document.createElement('option');
        selectList.className = `${arr[i]} allMem`;
        selectList.value = (arr[i]);
        selectList.append(arr[i]);
        select.appendChild(selectList);
    }

    filter.firstChild.value = 'allMem';

}


function tableName() {
    let divText = document.createElement('div');
    divText.id = 'text';
    divText.append('Calendar');
    document.body.appendChild(divText);


}



function btnAddEventf() {
    let div = document.createElement('div');
    div.id = 'btnAddEvent';
    div.className = 'btn';
    div.append('Add Event +');
    document.body.appendChild(div);

    btnAddEvent.addEventListener('click', viewAddEvent);
}



function tableView() {
    let divTable = document.createElement('div');
    divTable.id = 'table';
    document.body.appendChild(divTable);

    arrDiv = createDiv(daysArr.length, height);

    // addMarker();

}


function createDiv(x, y) {
    let arr =[];
    for (let i = 0; i < x; i++) {
        arr[i]=[];
        let divCont = document.createElement('div');
        divCont.className = `divCont`;
        arrDivCont[i] = divCont;
        table.appendChild(arrDivCont[i]);
        for (let j = 0; j < y; j++) {
            let divPole = document.createElement('div');
            divPole.className = `pole`;
            arr[i][j] = divPole;
            arrDivCont[i].appendChild(arr[i][j]);
            if (i === 0) {
                divPole.classList.add(`metingTime`);
                divPole.textContent = (( j + 9  )+':00')
            }
            if (j === 0) {
                divPole.classList.add(`metingDay`);
                divPole.textContent = (daysArr[i])
            }
        }
    }
    return arr;
}


function chooseMem() {


    let checkMem = document.createElement('div');
    checkMem.id = 'checkMembers';
    divBg.appendChild(checkMem);

    for (let i = 0; i < membersFitterArr.length; i++) {

        let div = document.createElement('div');
        checkMem.appendChild(div);

        let checkBoxMem = document.createElement('input');
        // checkBoxMem.append(membersFitterArr[i]);
        checkBoxMem.value = membersFitterArr[i];
        checkBoxMem.type = 'checkbox';
        checkMem.appendChild(checkBoxMem);
        div.appendChild(checkBoxMem);

        div.append(membersFitterArr[i]);

    }
}


function addCheckBoxClasses() {

    let str= 'allMem ';

    // console.log(checkMembers.childNodes[0].input.checked );
    console.log(checkMembers.childNodes[0].firstChild );
    console.log(checkMembers.childNodes[0].firstChild.checked );


    if (checkMembers.childNodes[0].firstChild.checked ) {
        str =str+ membersArr.join(' ');
    } else  {

        for (let i = 0;  i < membersFitterArr.length; i++) {
            if (checkMembers.childNodes[i].firstChild.checked) {
                str =str+ membersFitterArr[i] + ' ';
            }
        }
    }



    return str;
}

function viewAddEvent() {

    createDiveBG();
    inputTitle();
    // select( 'selectMember' ,membersArr);
    chooseMem();
    select( 'selectDay' ,daysArrChoose);
    select( 'selectTime' ,timeArr);
    btnCancel();
    fooBtnCreate();
    return undefined;
}

function createDiveBG() {
    let divBg = document.createElement('div');
    divBg.id = `divBg`;
    document.body.appendChild(divBg);
}

function inputTitle() {
    let div = document.createElement('div');
     div.id = 'divContInput';
    divBg.appendChild(div);
    let title = document.createElement('input');
    title.id = 'inputTitle';
    title.prototype = 'text';
    title.value = 'Example text';
    div.appendChild(title);
}

function select (id, arr) {
    let div = document.createElement('div');
    divBg.appendChild(div);

    let select = document.createElement('select');
    select.id = id;
    div.appendChild(select);

    for (let i = 0; i < arr.length; i++) {
        let selectList = document.createElement('option');
        // selectList.className = 'selectOptions';
        selectList.value = (arr[i]);
        selectList.append(arr[i]);
        select.appendChild(selectList);
    }

}

function btnCancel() {
    let div = document.createElement('div');
    div.id = 'btnTest';
    div.className = 'btn';
    div.append(' Cancel ');
    divBg.appendChild(div);
    btnTest.addEventListener('click', remuveBg);
}

function remuveBg() {
    divBg.parentNode.removeChild(divBg);
    return undefined;
}

function fooBtnCreate() {
    let div = document.createElement('div');
    div.id = 'btnCreate';
    div.className = 'btn btnCreate';
    div.append(' Create ');
    divBg.appendChild(div);
    btnCreate.addEventListener('click', createEvent);
}
function createEvent() {
    checkFreeTime(selectDay.selectedIndex, selectTime.selectedIndex );
}


function checkFreeTime(day, time) {

    let elem = table.childNodes[day+1].childNodes[time+1];

    if (elem.children.length === 0) {

        let div = document.createElement('div');
        // div.className = `allMem ${membersArr[member]}`;
        div.className = addCheckBoxClasses() ;
        elem.appendChild(div);

        let span = document.createElement('span');
        span.className = 'span';
        span.append(document.getElementById('inputTitle').value);
        div.appendChild(span);

        let spanCross = document.createElement('span');
        spanCross.className = 'spanCross';
        spanCross.addEventListener("click", deliteEvent)
        div.appendChild(spanCross);

        remuveBg();
        } else {
        let div = document.createElement('div');
        div.className = 'erorCrate';
        div.append('Failed to create an event. Time slot is already booked');
        divBg.appendChild(div);
    }



}

let evenTarget;

function deliteEvent() {
    createDiveBG();
    btnCancel();
    btnAccept();
    evenTarget = event.target.parentNode;
}

function btnDelElem() {
    evenTarget.parentNode.removeChild(evenTarget);
    remuveBg();
}

function btnAccept(elem) {
    let div = document.createElement('div');
    div.id = 'btnDel';
    div.className = 'btn';
    div.append(' Accept ');
    divBg.appendChild(div);
    btnDel.addEventListener('click', btnDelElem);
}

console.log(document.getElementsByClassName('allMembers'));



// document.getElementById('inputTitle').value <> inputTitle.value   ????????
