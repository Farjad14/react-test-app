import { configure, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { IntlProvider } from 'react-intl';
import React from 'react';
import fr from "../src/i18n/fr.json";

// automatically import all files ending in *.stories.js

// addLocaleData(enLocaleData);
// addLocaleData(frLocaleData);


const languages = {
  English: "en",
  French: "fr"
}

const selectLanguage = () => {
  const en = "English";
  const ret = select('Language', [en, "French"], en);
  return languages[ret]
}

const addDecorators = () => {
  addDecorator(getStory => {
    const content = getStory();
    const lang = selectLanguage();
    const messages = (lang === 'fr') ? fr : {}
    return (
      <IntlProvider key={lang} locale={lang} messages={messages}>
        {content}
      </IntlProvider>
    );
  });

  addDecorator(withKnobs);

};

const req = require.context("../src", true, /.stories.jsx?$/);
function loadStories() {
   // adding decorators here this will ensure that IntlProvider is available after hot reload
  addDecorators();
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);