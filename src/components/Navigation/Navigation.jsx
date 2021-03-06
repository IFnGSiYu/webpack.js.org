// Import External Dependencies
import React from 'react';
import Banner from 'react-banner';

// Import Components
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import Dropdown from '../Dropdown/Dropdown';

// Import helpers
import isClient from '../../utilities/is-client';

// Load Styling
import 'docsearch.js/dist/cdn/docsearch.css';
import './Navigation.scss';
import './Search.scss';

const onSearch = () => {};

export default class Navigation extends React.Component {
  render() {
    let { pathname, links, toggleSidebar } = this.props;

    return (
      <Banner
        onSearch={onSearch}
        blockName="navigation"
        logo={ <Logo light={ true } /> }
        url={ pathname }
        items={[
          ...links,
          {
            title: 'GitHub Repository',
            url: 'https://github.com/webpack/webpack',
            className: 'navigation__item--icon',
            content: <i aria-hidden="true" className="icon-github" />
          },
          {
            title: 'webpack on Twitter',
            url: 'https://twitter.com/webpack',
            className: 'navigation__item--icon',
            content: <i aria-hidden="true" className="icon-twitter" />
          },
          {
            title: 'webpack on Stack Overflow',
            url: 'https://stackoverflow.com/questions/tagged/webpack',
            className: 'navigation__item--icon',
            content: <i aria-hidden="true" className="icon-stack-overflow" />
          },
          {
            className: 'navigation__item--icon',
            content: (
              <Dropdown
                className="navigation__languages"
                items={[
                  { title: 'English', url: 'https://webpack.js.org/' },
                  { lang: 'zh', title: '中文', url: 'https://webpack.docschina.org/' }
                ]} />
            )
          }
        ]}
        link={ Link }
        onMenuClick={ toggleSidebar } />
    );
  }

  componentDidMount() {
    if (isClient) {
      const DocSearch = require('docsearch.js');

      DocSearch({
        apiKey: 'cccb861b286b414d0f820013f3f70b84',
        indexName: 'webpack_china',
        inputSelector: '.navigation-search__input'
      });
    }
  }
}
