import "./style.css";
import { buildHome } from "./homepage";
import { buildMenu } from "./menu";

function clearContent() {
    let content = document.getElementById('content');
    content.parentElement.removeChild(content);
}

function clickHeaderLink(activeTab, newActiveTab) {
    // console.log(activeTab,newActiveTab);
    let deactivate = document.getElementById(activeTab);
    let activate = document.getElementById(newActiveTab);
    deactivate.classList.remove('active');
    activate.classList.add('active');
    // console.log(activate.id);
}

function buildHeader() {
    const header = document.createElement("header");
    header.innerHTML = `<div class="logo"><img src="./img/MammaRoma.svg" alt="" /></div>
    <ul>
        <li id="nav-home" class="active">Home</li>
        <li id="nav-menu">Menu</li>
        <li id="nav-contact">Contact</li>
    </ul>`;
    return header;
}

const content = document.getElementById("page");
content.appendChild(buildHeader());
content.appendChild(buildHome());

//Global variables
let headerTabs = ['nav-home', 'nav-menu', 'nav-contact'];
let currentTab = headerTabs[0];

headerTabs.forEach((element,index) => {
    let tab = document.getElementById(element)
    // console.log(tab,index);
    tab.addEventListener('click', function () {
        if (currentTab === this.id) {
            return
        }
        clearContent();
        clickHeaderLink(currentTab, this.id);
        currentTab = headerTabs[index];
        if (this.id === 'nav-home') {
            content.appendChild(buildHome());
            // console.log('hi');
        } else if (this.id === 'nav-menu') {
            content.appendChild(buildMenu())
        } else {
            let dummyContent = document.createElement('div');
            dummyContent.id = 'content';
            content.appendChild(dummyContent);
        }
    })
});