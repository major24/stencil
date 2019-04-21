export class MyProgressBar {
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
    static get style() { return "/**style-placeholder:mn-progress-bar:**/"; }
}
