

class ProjectItem{
    id: number

    constructor(id:number){
        this.id = id;
        // this.activeBtn();
        this.finishBtn();
    }


    activeBtn = () =>{
        App.removeElement(this.id)


    }


    finishBtn = () =>{
        const id: string = this.id.toString();
        const listElement = document.getElementById(id);
        const btn = listElement?.querySelector("button:last-of-type");

       // const deleteId = App.removeElement(this.id)

        btn?.addEventListener("click", this.activeBtn)

        console.log(btn, "E")
    }
}


class Project {
    type: string;
    element: {id: number}[];

    constructor(type: string){
       this.type = type;
       this.element = [];

       const getId = [...document.querySelectorAll<HTMLLIElement>(".active")];

       for(let item of getId){
          const id: number = parseInt(item.id);
          const itemElement = new ProjectItem(id)
          this.element.push(itemElement)
       }
    }


    removeItemActive = (id:number) =>{
        const newElement = this.element.filter(item => {return item.id !== id});

        console.log(newElement);
    }



    
    
}

class App {

    static init(){
        const project = new Project("active");
    }


    static removeElement(id: number){
        const project = new Project("active");

        console.log("Elemen")

        return project.removeItemActive(id)
        
    }
}


App.init()