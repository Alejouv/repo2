export class Card{

    constructor(
        public logo: string = '',
        public grpName: string = '',
        public memberq: string = '',
        public descriptiontxt: string = '',
        public infoBtn: string = '',
        public joinBtn: string = ''
    ){
        console.log('card');
    }

    display(){

        const imgL = document.createElement('img');
        imgL.src='./dist/img/logo.pnj';
        imgL.alt='logo';
        document.getElementById('app')?.appendChild(imgL);

        const members = document.createElement('p');
        members.textContent = this.memberq;
        document.getElementById('app')?.appendChild(members);
        
        const name = document.createElement('h1');
        name.textContent = this.grpName;
        document.getElementById('app')?.appendChild(name);
        
        const description = document.createElement('p');
        description.textContent = this.descriptiontxt;
        document.getElementById('app')?.appendChild(description);

        const view = document.createElement('button');
        view.textContent = this.infoBtn;
        document.getElementById('app')?.appendChild(view);
        
        const join = document.createElement('button');
        join.textContent = this.joinBtn;
        document.getElementById('app')?.appendChild(join);


    }

    //document.body.querySelector('selector')?.appendChild(element);
}