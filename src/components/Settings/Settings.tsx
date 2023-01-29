/** @jsx h */

import {getClassName} from '../../utils/partials';
import {h} from 'preact';

export interface SettingsProps {
  visible: boolean;
}

function Settings({visible}: SettingsProps) {
  return (
    <div class={`settings-container ${visible && 'settings-container--active'}`}>
      <dialog class="settings-modal" open={visible}>
      Hello Universe
      </dialog>
    </div>
  );
}

export default Settings;
