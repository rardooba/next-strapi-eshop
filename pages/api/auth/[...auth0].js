import {handleAuth} from "@auth0/nextjs-auth0"

//come with all api route like userIn userOut login logout etc... spread [...auth0] > api/auth/... try http://localhost:3000/api/auth/login

export default handleAuth()