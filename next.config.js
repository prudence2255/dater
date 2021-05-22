const path = require('path');
require('dotenv').config();


module.exports = {
    env: {
        APP_URL: process.env.NODE_ENV === 'development' ? 
                                        'http://localhost:3000' : 'https://bodyclaire.com',
                                        
        API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://opportunitytent.com',
        APP_ID: '614109506161618',
        CLIENT_ID: '515282459574-q49pt0cr2kmkcf5p3rjupjhebhm46r0g.apps.googleusercontent.com',
        
    },

webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['store'] = path.join(__dirname, 'store')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
    return config
}
}