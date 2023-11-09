export const apiPrefix = process.env.REACT_APP_API_PATH;

const urls = {
    propertiesSearch: {
        getAllProperties: `${apiPrefix}/properties`
    }
}

export default urls;