/** @jsx */
import '@github/details-dialog-element';

import Hero from './partials/Hero/Hero';
import Header from './partials/Header/Header';
import {DeguImage} from '@blinkk/degu/lib/components/image';
import {DeguVideo} from '@blinkk/degu/lib/components/video';
import {DeguYouTubeInline} from '@blinkk/degu/lib/components/youtube-inline';
import {DeguYouTubeModal} from '@blinkk/degu/lib/components/youtube-modal';
import {PartialHydrator} from '@amagaki/amagaki-engine-preact/dist/hydrator';

// @ts-ignore
import {listen as quickLinkListen} from 'quicklink';

window.customElements.define('degu-image', DeguImage);
window.customElements.define('degu-video', DeguVideo);
window.customElements.define('degu-youtube-inline', DeguYouTubeInline);
window.customElements.define('degu-youtube-modal', DeguYouTubeModal);

// Modules that require hydration must be registered.
PartialHydrator.register({
  components: {
    'Hero': Hero,
    'Header': Header
  },
});

class App {
  constructor() {
    this.setupSettings();

    DeguYouTubeModal.register(document.body);
    quickLinkListen();
  }

  setupSettings() {
    const settingsTriggers = Array.from(document.querySelectorAll('[data-trigger-settings-modal]')) as HTMLElement[];
    settingsTriggers.forEach(e => {
      e.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent("openSettings", {
          detail: { visible: true }
        }));
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});

declare global {
  interface DocumentEventMap {
    openSettings: CustomEvent;
  }
}
