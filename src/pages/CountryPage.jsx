import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  countryData,
  getFlagEmoji
} from '../data/countries';
import {
  processHtmlContent,
  encodeHtmlForJsonSingleLine
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

          <a className="showHideToggle" href="#" onClick={toggleShowHide}>
            {showHide ? 'Show less' : 'Show more'}
          </a>
        </div>

      </div>

      <h3>Encoded output string</h3>
      <div className="output-container">
        <code id="output">{encoded}</code>
      </div>

    </div>
  );
};

export default CountryPage;
