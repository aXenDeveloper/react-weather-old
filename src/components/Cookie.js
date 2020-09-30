export const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + 24*60*60*1000*days);
    document.cookie = `${name}=${value};path=/;expires=${date.toGMTString()}`;
}

export const getCookie = (name) => {
    let v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
}