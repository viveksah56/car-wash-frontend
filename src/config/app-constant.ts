// React Query
const QUERY_SLATE_TIME = 5 * 60 * 1000

//Pagination
const PAGINATION_LIMIT = 10

// Server Constant
const SERVER_REQUEST_TIME = 50000;


//Social Media

const FACEBOOK_URL = '';
const TWITTER_URL = ''
const INSTAGRAM_URL = ''
const LINKEDIN_URL = ''


//Image Paths
const WHATS_IMAGE_PATH = '/whats-app.svg'


const OTP_LENGTH = 5;


const CURRENCY = "NPR"


const GOOGLE_CLIENT_ID = "974916070757-5dtk3q7takr93k3ev9oqo4hckgcc4d8m.apps.googleusercontent.com"

export const APP_CONFIG = {
    QUERY_SLATE_TIME,
    SERVER_REQUEST_TIME,
    SOCIAL: {
        FACEBOOK_URL,
        TWITTER_URL,
        INSTAGRAM_URL,
        LINKEDIN_URL
    },
    OTP_LENGTH,
    PAGINATION: {
        PAGE_LIMIT: PAGINATION_LIMIT,

    },
    CURRENCY,
    GOOGLE: {
        GOOGLE_CLIENT_ID
    },
    WHATS_IMAGE_PATH
}