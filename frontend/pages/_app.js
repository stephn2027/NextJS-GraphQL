/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.off('routeChangeComplete', () => NProgress.done());
Router.events.off('routeChangeError', () => NProgress.done());


export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.any,
};
