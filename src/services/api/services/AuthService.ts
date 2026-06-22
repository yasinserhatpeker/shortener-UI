/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenObtainPair } from '../models/TokenObtainPair';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { UserLogout } from '../models/UserLogout';
import type { UserRegister } from '../models/UserRegister';
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Takes a set of user credentials and returns an access and refresh JSON web
     * token pair to prove the authentication of those credentials.
     * @param requestBody
     * @returns TokenObtainPair
     * @throws ApiError
     */
    public static authLoginCreate(
        requestBody: TokenObtainPair,
    ): CancelablePromise<TokenObtainPair> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Logging out
     * Logging out with blacklisting refresh token
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static authLogoutCreate(
        requestBody: UserLogout,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/logout/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @param requestBody
     * @returns TokenRefresh
     * @throws ApiError
     */
    public static authRefreshCreate(
        requestBody: TokenRefresh,
    ): CancelablePromise<TokenRefresh> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/refresh/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Registering a new user
     * Registering a new user with JWT tokens
     * @param requestBody
     * @returns UserResponse
     * @throws ApiError
     */
    public static authRegisterCreate(
        requestBody: UserRegister,
    ): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/register/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
