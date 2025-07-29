import { useState } from 'react';
import { useParams } from 'react-router-dom';
import cx from 'classnames';

import {
  countryData,
  getFlagEmoji
} from '../data/countries';
import {
  encodeHtmlForJsonSingleLine,
  processHtmlContent
} from '../utils/htmlParser';

const CountryPage = () => {
  const { countryCode } = useParams();
  const country = countryData[countryCode];
  const [showHide, setShowHide] = useState(false);

  if (!country) {
    return (
      <p>Content not found</p>
    );
  }

  const toggleShowHide = (e) => {
    e.preventDefault();
    setShowHide(!showHide)
  };

  const { code, name, html } = country;
  const flag = getFlagEmoji(code);
  const { show, hide } = processHtmlContent(html);
  const encoded = encodeHtmlForJsonSingleLine(show + hide);

  if (!html.length) {
      return (
        <div className="content" data-page="country">
          <h2>{flag ? flag : null} {name}</h2>
          <p>No HTML content.</p>
          <p>Add some markup to <code className="inline">{`src/content/${name.toLowerCase()}.html`}</code>.</p>
        </div>
      );
  }

  return (
    <div className="content" data-page="country">
      <h2>{flag ? flag : null} {name}</h2>

      <div className="grid">

        <div className="grid-item">
          <h3>All content</h3>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="grid-item">
          <h3>Show / Hide content</h3>
          <div dangerouslySetInnerHTML={{ __html: show }} />

          <div className={showHide ? 'visible' : 'hidden'} dangerouslySetInnerHTML={{ __html: hide }} />

          {html.length
            ? (
              <div className={cx('showHideToggle', {open: showHide})} >
                <a href="#" onClick={toggleShowHide}>
                  {showHide ? 'Show less' : 'Show more'}
                </a>
                <span className="caret">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1024 1024"><path d="M512.001 604.191l-272.498-267.632c-15.929-15.644-40.96-15.644-56.889 0s-15.929 40.229 0 55.873l300.942 295.568c15.929 15.644 40.96 15.644 56.889 0l300.942-296.127c15.929-15.644 15.929-40.229 0-55.873s-40.96-15.644-56.889 0l-272.498 268.19z"></path></svg>
                </span>
              </div>
              )
            : null
          }
        </div>

      </div>

      <h3>Encoded output string</h3>
      {html.length
        ? (
          <div className="output-container">
            <code id="output">{encoded}</code>
          </div>
          )
        : null
      }

    </div>
  );
};

export default CountryPage;
