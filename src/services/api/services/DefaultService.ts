/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Redirected short url
     * Redirect the short url to original url
     * @param shortCode short url that redirected
     * @returns void
     * @throws ApiError
     */
    public static rootRetrieve(
        shortCode: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{short_code}/',
            path: {
                'short_code': shortCode,
            },
            errors: {
                302: `No response body`,
            },
        });
    }
}
