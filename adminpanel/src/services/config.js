import config from '../config.json'

export const withConfiguration = cb => {  
    return (cb(config[process.env.REACT_APP_ENV.trim()]))
} 
