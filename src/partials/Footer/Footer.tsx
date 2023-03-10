import Asset, {AssetOptions} from '../../components/Asset/Asset';
import Button, {ButtonProps} from '../../components/Button/Button';
import {Document, Pod} from '@amagaki/amagaki';

import {getClassName} from '../../utils/partials';
import {h} from 'preact';

interface FooterProps {
  options?: string[];
  nav: {
    url: {path: string};
    fields: Record<string, any>;
  }[];
}

function Footer({
  partial,
  doc,
  pod,
}: {
  partial: FooterProps;
  doc: Document;
  pod: Pod;
}) {
  return (
    <div className={getClassName('footer', partial.options)}>
      <div className="footer__grid">
        <div className="footer__grid__links">
          {partial.nav?.map(item => (
            <a href={item.url.path} className={`footer__grid__links__link ${
              item.url?.path === doc.url?.path &&
              'footer__grid__links__link--active'
            }`}>
              {item.fields.navTitle}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
