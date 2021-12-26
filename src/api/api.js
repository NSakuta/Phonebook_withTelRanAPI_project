import axios from 'axios'

const client = axios.create({
    baseURL: 'http://dev.phonebook-1.telran-edu.de'
})

client.interceptors.response.use(
    response => {
        console.log('response from interceptor: ', response);

        if(response.config.url.startsWith('/api/user/login')) {
            localStorage.setItem('TOKEN', response.headers['access-token'])
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }


)

client.interceptors.request.use(
    config => {
        console.log('config from interceptors: ', config)
        if(!config.url.startsWith('/api/user')) {
            config.headers = {
                'Access-Token': localStorage.getItem('TOKEN') || ''
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }

)

export async function login({email, password}){
    try {
        await client.post('/api/user/login', {email, password})
        console.log('login success')

    } catch (e) {
        throw new Error(e.message);
    }
}

export async function registration({email, password}) {
    try {
        const responseWithToken = await client.post('/api/user', {email, password})
        await client.get(`/api/user/activation/${responseWithToken.data}`)
        console.log('response with token for registration', responseWithToken)
    } catch (e) {
        console.dir(e)
        throw new Error(e.message)
    }
}
