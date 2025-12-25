export const HASH_SALT = "Uthakhana_bhikhu_sanga";

const _env = 'dev';

export const baseApiUrl =_env == 'prod' ? 'https://www.uthakhana-bhikhu-sanga.com' : 'http://0.0.0.0:4000/';

export const toastStyle = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark"
}