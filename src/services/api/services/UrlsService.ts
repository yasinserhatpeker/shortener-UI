/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UrlItemCreate } from '../models/UrlItemCreate';
import type { UrlItemResponse } from '../models/UrlItemResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UrlsService {
    /**
     * Creating Url
     * Fetching original url and converts it a short code (short url)
     * @param requestBody
     * @returns UrlItemResponse
     * @throws ApiError
     */
    public static urlsCreateCreate(
        requestBody: UrlItemCreate,
    ): CancelablePromise<UrlItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/urls/create/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deleting short url
     * Deletes the specified short URL related to the authenticated user.
     * @param shortCode Short code of the URL to delete
     * @returns void
     * @throws ApiError
     */
    public static urlsDeleteDestroy(
        shortCode: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/urls/delete/{short_code}/',
            path: {
                'short_code': shortCode,
            },
        });
    }
    /**
     * Listing short urls
     * @returns UrlItemResponse
     * @throws ApiError
     */
    public static urlsListList(): CancelablePromise<Array<UrlItemResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/urls/list/',
        });
    }
}
