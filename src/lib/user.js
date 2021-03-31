const GetUserInfo = () => {
    return JSON.parse(localStorage.getItem('EUG_USER_INFO'))
}

export default {
    GetUserInfo
}