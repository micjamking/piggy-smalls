/** @jsx h */
import {h} from 'preact';
import Asset, {AssetOptions} from '../../components/Asset/Asset';
import Button, {ButtonProps} from '../../components/Button/Button';
import Settings, {SettingsProps} from '../../components/Settings/Settings';
import {Document} from '@amagaki/amagaki';
import {getClassName} from '../../utils/partials';
import {useCallback, useEffect, useState} from 'preact/compat';

// TODO: Improve declaration of custom elements.

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'details-dialog': any;
    }
  }
}

interface HeaderProps {
  options?: string[];
  logo: {
    doc: Document;
    image: AssetOptions;
  };
  nav?: Document[];
  buttons: ButtonProps[];
}

function Header({
  partial
}: {
  partial: HeaderProps;
}) {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const handleSettingsOpen = useCallback((e: CustomEvent) => {
    setIsSettingsVisible(e.detail.visible);
    console.log('isSettingsVisible:', isSettingsVisible, e.detail.visible);
  }, []);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.addEventListener('openSettings', handleSettingsOpen);
    return () => {
      document.removeEventListener('openSettings', handleSettingsOpen);
    };
  }, [handleSettingsOpen]);
  return (
    <div className={getClassName('header', partial.options)}>
      <div className="header__grid">
        <div className="header__grid__logo">
          <a href={partial.logo?.doc?.url?.path}>
            <Asset {...partial.logo?.image} />
          </a>
        </div>
        <div className="header__grid__buttons">
          <div className="header__grid__login" data-trigger-settings-modal>
            <span class="header__grid__greeting">Good Morning!</span>
            <div class="header__grid__avatar"></div>
          </div>
          <Settings visible={isSettingsVisible} />
          <details className="header__mobile-nav">
            <summary className="header__mobile-nav__summary">
              <Button label="Menu" ariaLabel="Toggle menu" />
            </summary>
            <details-dialog className="header__mobile-nav__dialog">
              <div className="header__mobile-nav__dialog__links">
                {partial.nav?.map(item => (
                  <a
                    href={item.url?.path}
                    className="header__mobile-nav__dialog__links__link"
                  >
                    {/*  {{'header__mobile-nav__dialog__links__link--active' if item.url.path == doc.url.path}} */}
                    {item.fields.navTitle}
                  </a>
                ))}
              </div>
              <div className="header__mobile-nav__buttons">
                {partial.buttons?.map(button => (
                  <Button {...button} />
                ))}
              </div>
            </details-dialog>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Header;
