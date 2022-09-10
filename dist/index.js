"use strict";
class ProjectItem {
    constructor(id) {
        this.activeBtn = () => {
            App.removeElement(this.id);
        };
        this.finishBtn = () => {
            const id = this.id.toString();
            const listElement = document.getElementById(id);
            const btn = listElement === null || listElement === void 0 ? void 0 : listElement.querySelector("button:last-of-type");
            // const deleteId = App.removeElement(this.id)
            btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", this.activeBtn);
            console.log(btn, "E");
        };
        this.id = id;
        // this.activeBtn();
        this.finishBtn();
    }
}
class Project {
    constructor(type) {
        this.removeItemActive = (id) => {
            const newElement = this.element.filter(item => { return item.id !== id; });
            console.log(newElement);
        };
        this.type = type;
        this.element = [];
        const getId = [...document.querySelectorAll(".active")];
        for (let item of getId) {
            const id = parseInt(item.id);
            const itemElement = new ProjectItem(id);
            this.element.push(itemElement);
        }
    }
}
class App {
    static init() {
        const project = new Project("active");
    }
    static removeElement(id) {
        const project = new Project("active");
        console.log("Elemen");
        return project.removeItemActive(id);
    }
}
App.init();
