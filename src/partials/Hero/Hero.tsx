/** @jsx h */

import Asset, {AssetOptions} from '../../components/Asset/Asset';
import Button, {ButtonProps} from '../../components/Button/Button';

import {getClassName} from '../../utils/partials';
import {h} from 'preact';

export interface HeroProps {
  options?: string[];
  title?: string;
  body?: string;
  assets?: AssetOptions[];
  buttons?: ButtonProps[];
  footer?: string;
}

function Hero({
  partial,
}: {
  partial: HeroProps;
}): preact.createElement.JSX.Element {
  return (
    <div className={getClassName('hero', partial.options)}>
      <div className="hero__grid">
        <div className="hero__grid__content">
          <div
            className="hero__grid__content__title"
            aria-level={1}
            role="heading"
          >
            {partial.title}
          </div>
          {partial.body && (
            <div className="hero__grid__content__body" dangerouslySetInnerHTML={{__html: partial.body}}></div>
          )}
          {partial.buttons && (
            <div className="hero__grid__content__buttons">
              {partial.buttons.map((button, i) => (
                <div key={i} className="hero__grid__content__buttons__button">
                  <Button {...button} />
                </div>
              ))}
            </div>
          )}
          {partial.assets && (
            <div className="hero__grid__content__assets">
              {partial.assets.map(asset => (
                <Asset {...asset} />
              ))}
            </div>
          )}
          {partial.footer && (
            <div className="hero__grid__content__footer" dangerouslySetInnerHTML={{__html: partial.footer}}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
