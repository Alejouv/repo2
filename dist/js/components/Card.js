export class Card {
    constructor(logo = '', grpName = '', memberq = '', descriptiontxt = '', infoBtn = '', joinBtn = '') {
        this.logo = logo;
        this.grpName = grpName;
        this.memberq = memberq;
        this.descriptiontxt = descriptiontxt;
        this.infoBtn = infoBtn;
        this.joinBtn = joinBtn;
        console.log('card');
    }
    display() {
        var _a, _b, _c, _d, _e, _f;
        const imgL = document.createElement('img');
        imgL.src = './dist/img/logo.pnj';
        imgL.alt = 'logo';
        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(imgL);
        const members = document.createElement('p');
        members.textContent = this.memberq;
        (_b = document.getElementById('app')) === null || _b === void 0 ? void 0 : _b.appendChild(members);
        const name = document.createElement('h1');
        name.textContent = this.grpName;
        (_c = document.getElementById('app')) === null || _c === void 0 ? void 0 : _c.appendChild(name);
        const description = document.createElement('p');
        description.textContent = this.descriptiontxt;
        (_d = document.getElementById('app')) === null || _d === void 0 ? void 0 : _d.appendChild(description);
        const view = document.createElement('button');
        view.textContent = this.infoBtn;
        (_e = document.getElementById('app')) === null || _e === void 0 ? void 0 : _e.appendChild(view);
        const join = document.createElement('button');
        join.textContent = this.joinBtn;
        (_f = document.getElementById('app')) === null || _f === void 0 ? void 0 : _f.appendChild(join);
    }
}
//# sourceMappingURL=Card.js.map