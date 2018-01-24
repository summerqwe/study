class Tab {
    constructor() {
        this.Event();
    }

    Event() {
        this.ul = document.getElementsByClassName('tit')[0];
        this.lis = this.ul.getElementsByTagName('li');
        this.con = document.getElementsByClassName('con')[0];
        this.divs = this.con.getElementsByTagName('div');
        [...this.lis].forEach((item, ind) => {
            item.onclick = () => {
                [...this.lis].forEach((items, index) => {
                    items.className = '';
                    this.divs[index].style.display = 'none';
                })
                item.className = 'bg';
                this.divs[ind].style.display = 'block';
            }

        })
    }
}

let tab = new Tab();