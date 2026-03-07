import HttpServices from "@/service/http.service";


class AuthService extends HttpServices {
    async login(data: any) {
        try {
            return await this.postRequest({
                url: '/auth/login',
                data
            })

        } catch (error) {
            throw error

        }
    }

    async register(data: any) {
        try {
            return await this.postRequest({
                url: '/register',
                data,
                config: {
                    file: true
                }
            })

        } catch (error) {
            throw error

        }
    }

    async forgotPassword(data: any) {
        try {
            return await this.postRequest({
                url: '/forget-password',
                data
            })

        } catch (error) {
            throw error
        }
    }

    async verifyPasswordOtp(data: any) {
        try {
            return await this.postRequest({
                url: '/verify-password-otp',
                data
            })
        } catch (error) {
            throw error
        }

    }

    async resetPassword(data: any) {
        try {
            return await this.postRequest({
                url: '/handle-password-reset-form',
                data
            })
        } catch (error) {
            throw error
        }
    }


    async logout() {
        try {
            return await this.postRequest({
                url: '/logout',
                config: {
                    auth: true
                }
            })
        } catch (error) {
            throw error
        }
    }

    async profileUpdate(data: any) {
        try {
            return await this.postRequest({
                url: '/user/profile',
                data: {
                    ...data,
                    // '_method': 'PUT'
                },
                config: {
                    auth: true,
                    file: true
                }
            })
        } catch (error) {
            throw error
        }
    }

    async getProfile(uuid?: string) {
        try {
            const url = uuid ? `/user/profile/${uuid}` : `/user/profile`;

            return await this.getRequest({
                url,
                config: {
                    auth: true,
                    file: true,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async googleLogin(data: any) {
        try {
            return await this.postRequest({
                url: '/login/google',
                data,
            });
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService();
export default authService;