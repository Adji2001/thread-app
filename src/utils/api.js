const api = (() => {
    const BASEURL = 'https://forum-api.dicoding.dev/v1'

    // fetch dengan authentication
    async function fetchWithAuth(url, options = {}) {
        await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`
            }
        })
    }

    // menetapkan access token
    function putAccessToken(token) {
        localStorage.setItem('accessToken', token)
    }

    // mengambil access token
    function getAccessToken() {
        localStorage.getItem('accessToken')
    }

    // registrasi pengguna baru
    async function register({name, email, password}) {
        const response = await fetch(`${BASEURL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {user}} = responseJSON

        return user
    }

    // autentikasi login untuk mendapatkan access token
    async function login({email, password}) {
        const response = await fetch(`${BASEURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {token}} = responseJSON

        return token
    }

    // menampilkan semua users
    async function getAllUsers () {
        const response = await fetch(`${BASEURL}/users`)

        const responseJSON = await response.json()
        
        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {users}} = responseJSON

        // const limitedUser = users.slice(0, 9)

        return users
    }

    // mendapatkan pengguna yang terautentikasi
    async function getOwnProfile() {
        const response = await fetchWithAuth(`${BASEURL}/users/me`)

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {user}} = responseJSON

        return user
    }

    // menambahkan thread baru
    async function createThread({title, body, category = ''}) {
        const response = await fetchWithAuth(`${BASEURL}/threads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                category
            })
        })

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {thread}} = responseJSON

        return thread
    }

    // menampilkan semua data threads
    async function getAllThreads() {
        const response = await fetch(`${BASEURL}/threads`)

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {threads}} = responseJSON

        return threads
    }

    // menampilkan detail thread
    async function getThreadDetail(id) {
        const response = await fetch(`${BASEURL}/threads/${id}`)

        const responseJSON = await response.json()

        const {status, message} = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {detailThread}} = responseJSON

        return detailThread
    }

    // menambahkan komentar baru
    async function createComment({content, threadId}) {
        const response = await fetchWithAuth(`${BASEURL}/threads/${threadId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content
            })
        })
    }

    // menampilkan semua leaderboards
    async function getAllLeaderboards() {
        const response = await fetch(`${BASEURL}/leaderboards`)

        const responseJSON = await response.json()

        const {status, message } = responseJSON

        if(status !== 'success') {
            throw new Error(message)
        }

        const {data: {leaderboards}} = responseJSON

        return leaderboards
    }

    return {
        putAccessToken,
        getAccessToken,
        login,
        register,
        getAllUsers,
        getOwnProfile,
        createThread,
        getAllThreads,
        getThreadDetail,
        createComment,
        getAllLeaderboards,
    }
})()

export default api