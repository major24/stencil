import { h } from '../mn-progress-bar.core.js';

class MyProgressBar {
    constructor() {
        this.max = 100;
    }
    render() {
        this.el.style.setProperty('--current-value', this.value.toString());
        this.el.style.setProperty('--max-value', this.max.toString());
        return (h("div", { class: "title" },
            h("h3", null, "Progress Bar"),
            h("div", { class: "content" },
                "Value: ",
                this.value,
                "/",
                this.max),
            h("div", { class: "progress-container" },
                h("div", { class: "progress-bar" }),
                h("div", { class: "progress-bar-remainder" }))));
    }
    static get is() { return "mn-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
    static get style() { return ".title.sc-mn-progress-bar{color:#00f}.content.sc-mn-progress-bar{color:green}.progress-container.sc-mn-progress-bar{display:-ms-flexbox;display:flex;height:var(--progress-height,20px);background:var(--progress-background,#d3d3d3);overflow:hidden;border-radius:20px}.progress-bar.sc-mn-progress-bar{background:var(--progress-color,#6b9bac);width:calc(var(--current-value, 0) * 100% / var(--max-value, 100))}.progress-bar-remainder.sc-mn-progress-bar{-ms-flex:1;flex:1}"; }
}

export { MyProgressBar as MnProgressBar };
