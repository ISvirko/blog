import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '../components/Layout';
import '../styles/globals.css';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const theme = {
    primaryDark: '#212121',
    primaryLight: '#3f3f3f',
    grey: '#c5c6c7',
    secondaryDark: '#e6b301',
    secondaryLight: '#fed136',
    white: '#fff',
};

Nprogress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
    Nprogress.start();
});

Router.events.on('routeChangeComplete', () => {
    Nprogress.done();
});

Router.events.on('routeChangeError', () => {
    Nprogress.done();
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Blog</title>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Next.js Blog" />
                    <meta name="keywords" content="Next.js, Typescript, React, styled-components" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
};

export default MyApp;
