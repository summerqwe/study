class Dialog {
    constructor(tit = '我是标题', content = '真的很好吃的样子') {
        this.tit = tit;
        this.content = content;
        this.init();
    }

    // 初始化页面
    init() {
        this.createWrap(); //创建主要内容
    }
    Event() {
        let change = document.querySelectorAll('.btn')[0];
        let del = document.querySelectorAll('.del')[0];
        change.addEventListener('click', (event) => {
            this.show();
        })
        del.addEventListener('click', (event) => {
            this.hide();
        })
    }

    show() {
        let mark = document.querySelectorAll('.mark')[0];
        mark.style.display = 'block';
    }

    hide() {
        let mark = document.querySelectorAll('.mark')[0];
        mark.style.display = 'none';
    }

    createTit() {
        let h4 = document.createElement('h4');
        h4.innerHTML = this.tit;
        return h4;
    }
    createDel() {
        let sp = document.createElement('span');
        sp.innerHTML = '&times;';
        sp.className = 'del';
        return sp;
    }
    createContent() {
        let p = document.createElement('p');
        p.innerHTML = this.content;
    }
    createWrap() {
        let mark = document.createElement('div');
        mark.className = 'mark';
        let wrap = document.createElement('div');

        let tit = this.createTit();
        let Del = this.createDel();
        wrap.className = 'wrap';
        wrap.append(tit);
        wrap.append(Del);
        mark.append(wrap);
        document.body.append(mark);
        this.Event();
    }
}








let dialog = new Dialog();