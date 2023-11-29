export const apiPrefix = process.env.REACT_APP_API_PATH;

const urls = {
    propertiesSearch: {
        getAllProperties: `${apiPrefix}/properties`
    },
    brokersSearch: {
        allBrokers: `${apiPrefix}/brokers`
    }

}

export default urls;