import { Metadata } from 'next'

import Egg from '/src/components/Egg/Egg'
import Settings from '/src/components/Settings/Settings'
import TranslateDialog from '/src/components/TranslateDialog/TranslateDialog'
import {fallbackLng} from '/src/i18n/options'
import {useTranslation} from '/src/i18n/server'
import "@fontsource/roboto";
import './global.css'
import { APP_URL } from '../config/api'

export const metadata: Metadata = {
    metadataBase: new URL(APP_URL),
    title: {
        absolute: '',
        template: '%s',
    },
    keywords: ['crab', 'fit', 'crabfit', 'schedule', 'availability', 'availabilities', 'when2meet', 'doodle', 'meet', 'plan', 'time', 'timezone'],
    description: 'Enter your availability to find a time that works for everyone!',
    themeColor: '#F79E00',
    manifest: 'manifest.json',
    openGraph: {
        title: 'Crab Fit',
        description: 'Enter your availability to find a time that works for everyone!',
        url: '/',
    },
    icons: {
        icon: 'favicon.ico',
    },
}

const RootLayout = async ({children}: { children: React.ReactNode }) => {
    const {resolvedLanguage} = await useTranslation([])

    return (
        <html lang={resolvedLanguage ?? fallbackLng}>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </head>
        <body>
        <Settings/>
        <Egg/>
        <TranslateDialog/>

        {children}

        </body>
        </html>
    )
}

export default RootLayout
