import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { initGA, logPageView } from '../utils/analytics';
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Timebomb</title>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="description" content="content" />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
