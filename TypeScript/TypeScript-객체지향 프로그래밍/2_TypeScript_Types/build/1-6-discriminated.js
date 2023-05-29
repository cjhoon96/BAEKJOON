"use strict";
{
    function login() {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }
    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state) {
        if (state.result === 'success') {
            console.log(`🎉 ${state.response.body}`);
        }
        else {
            console.log(`😭 ${state.reason}`);
        }
    }
}
