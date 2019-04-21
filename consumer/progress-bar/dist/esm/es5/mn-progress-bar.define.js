
// MnProgressBar: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './mn-progress-bar.core.js';
import { COMPONENTS } from './mn-progress-bar.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
