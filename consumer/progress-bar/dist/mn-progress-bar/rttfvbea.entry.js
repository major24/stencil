const e=window.MnProgressBar.h;class r{constructor(){this.max=100}render(){return this.el.style.setProperty("--current-value",this.value.toString()),this.el.style.setProperty("--max-value",this.max.toString()),e("div",{class:"title"},e("h3",null,"Progress Bar"),e("div",{class:"content"},"Value: ",this.value,"/",this.max),e("div",{class:"progress-container"},e("div",{class:"progress-bar"}),e("div",{class:"progress-bar-remainder"})))}static get is(){return"mn-progress-bar"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},max:{type:Number,attr:"max"},value:{type:Number,attr:"value"}}}static get style(){return".title{color:#00f}.content{color:green}.progress-container{display:-ms-flexbox;display:flex;height:var(--progress-height,20px);background:var(--progress-background,#d3d3d3);overflow:hidden;border-radius:20px}.progress-bar{background:var(--progress-color,#6b9bac);width:calc(var(--current-value, 0) * 100% / var(--max-value, 100))}.progress-bar-remainder{-ms-flex:1;flex:1}"}}export{r as MnProgressBar};