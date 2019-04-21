import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mn-progress-bar',
  styleUrl: 'mn-progress-bar.scss',
  shadow: true
})
export class MnProgressBar {
  @Prop() value: number;
  @Prop() max: number = 100;

  @Element() el: HTMLElement;

  render() {
    this.el.style.setProperty('--current-value', this.value.toString());
    this.el.style.setProperty('--max-value', this.max.toString());

    return (
      <div class="title">
        <div class="content">Value: {this.value}/{this.max}</div>
        <div class="progress-container">
          <div class="progress-bar"></div>
          <div class="progress-bar-remainder" />
        </div>
      </div>
    )
  }
}
