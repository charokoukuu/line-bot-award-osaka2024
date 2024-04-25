/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * BoTreasure API
 * BoTreasureに関するAPI仕様書です。
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://local-line.run-ticket.com/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface ApiQrscanBody
 */
export interface ApiQrscanBody {
    /**
     * 
     * @type {string}
     * @memberof ApiQrscanBody
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ApiQrscanBody
     */
    treasureId: string;
}
/**
 * 
 * @export
 * @interface ApiScheduleBody
 */
export interface ApiScheduleBody {
    /**
     * 
     * @type {string}
     * @memberof ApiScheduleBody
     */
    teamId: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof ApiScheduleBody
     */
    users: Array<User>;
    /**
     * 
     * @type {Array<any>}
     * @memberof ApiScheduleBody
     */
    messages: Array<any>;
    /**
     * 
     * @type {number}
     * @memberof ApiScheduleBody
     */
    timeAfterMinutes: number;
    /**
     * 
     * @type {string}
     * @memberof ApiScheduleBody
     */
    hintId?: string;
    /**
     * 
     * @type {User}
     * @memberof ApiScheduleBody
     */
    enableOwner?: User;
}
/**
 * 
 * @export
 * @interface ApiTeambuildingBody
 */
export interface ApiTeambuildingBody {
    /**
     * 
     * @type {string}
     * @memberof ApiTeambuildingBody
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ApiTeambuildingBody
     */
    teamName: string;
    /**
     * 
     * @type {number}
     * @memberof ApiTeambuildingBody
     */
    playerCount: number;
    /**
     * 
     * @type {number}
     * @memberof ApiTeambuildingBody
     */
    ownerCount: number;
    /**
     * 
     * @type {number}
     * @memberof ApiTeambuildingBody
     */
    treasureCount: number;
    /**
     * 
     * @type {string}
     * @memberof ApiTeambuildingBody
     */
    keyword: string;
}
/**
 * 
 * @export
 * @interface ApiTeamjoiningBody
 */
export interface ApiTeamjoiningBody {
    /**
     * 
     * @type {string}
     * @memberof ApiTeamjoiningBody
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ApiTeamjoiningBody
     */
    teamId: string;
}
/**
 * 
 * @export
 * @interface Game
 */
export interface Game {
    /**
     * 
     * @type {Team}
     * @memberof Game
     */
    team: Team;
    /**
     * 
     * @type {Array<User>}
     * @memberof Game
     */
    allUsers: Array<User>;
    /**
     * 
     * @type {Array<User>}
     * @memberof Game
     */
    owners: Array<User>;
    /**
     * 
     * @type {Array<User>}
     * @memberof Game
     */
    seekers: Array<User>;
    /**
     * 
     * @type {Array<User>}
     * @memberof Game
     */
    arrestedMembers?: Array<User>;
    /**
     * 
     * @type {Array<User>}
     * @memberof Game
     */
    disabledScanMembers?: Array<User>;
    /**
     * 
     * @type {Array<GameHints>}
     * @memberof Game
     */
    hints: Array<GameHints>;
    /**
     * 
     * @type {Array<GameTreasures>}
     * @memberof Game
     */
    treasures: Array<GameTreasures>;
    /**
     * 
     * @type {Status}
     * @memberof Game
     */
    status: Status;
}
/**
 * 
 * @export
 * @interface GameHints
 */
export interface GameHints {
    /**
     * 
     * @type {string}
     * @memberof GameHints
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GameHints
     */
    content?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GameHints
     */
    isPrinted?: boolean;
}
/**
 * 
 * @export
 * @interface GameTreasures
 */
export interface GameTreasures {
    /**
     * 
     * @type {string}
     * @memberof GameTreasures
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GameTreasures
     */
    isScanned?: boolean;
}
/**
 * 
 * @export
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    teamId: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof Schedule
     */
    users: Array<User>;
    /**
     * 
     * @type {Array<any>}
     * @memberof Schedule
     */
    messages: Array<any>;
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    hintId?: string;
    /**
     * 
     * @type {User}
     * @memberof Schedule
     */
    enableOwner?: User;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum Status {
    Create = 'create',
    Prepare = 'prepare',
    Chat = 'chat',
    Play = 'play',
    End = 'end'
}
/**
 * 
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    teamId: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    hostId: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    playerCount: number;
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    ownerCount: number;
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    treasureCount: number;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    keyword: string;
}
/**
 * 
 * @export
 * @interface Treasure
 */
export interface Treasure {
    /**
     * 
     * @type {string}
     * @memberof Treasure
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Treasure
     */
    isScanned?: boolean;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    teamId?: string;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all game by team ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiGameTeamIdGet(options: any = {}): FetchArgs {
            const localVarPath = `/api/game/{teamId}`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new schedule
         * @param {ApiScheduleBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSchedulePost(body: ApiScheduleBody, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling apiSchedulePost.');
            }
            const localVarPath = `/api/schedule`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ApiScheduleBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a team building request
         * @param {ApiTeambuildingBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamBuildingPost(body: ApiTeambuildingBody, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling apiTeamBuildingPost.');
            }
            const localVarPath = `/api/team-building`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ApiTeambuildingBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Join a team request
         * @param {ApiTeamjoiningBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamJoiningPost(body: ApiTeamjoiningBody, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling apiTeamJoiningPost.');
            }
            const localVarPath = `/api/team-joining`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ApiTeamjoiningBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete team by ID
         * @param {string} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamTeamIdDelete(teamId: string, options: any = {}): FetchArgs {
            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new RequiredError('teamId', 'Required parameter teamId was null or undefined when calling apiTeamTeamIdDelete.');
            }
            const localVarPath = `/api/team/{teamId}`
                .replace(`{${"teamId"}}`, encodeURIComponent(String(teamId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get team by ID
         * @param {string} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamTeamIdGet(teamId: string, options: any = {}): FetchArgs {
            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new RequiredError('teamId', 'Required parameter teamId was null or undefined when calling apiTeamTeamIdGet.');
            }
            const localVarPath = `/api/team/{teamId}`
                .replace(`{${"teamId"}}`, encodeURIComponent(String(teamId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all teams
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamsGet(options: any = {}): FetchArgs {
            const localVarPath = `/api/teams`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get user by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserIdGet(userId: string, options: any = {}): FetchArgs {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId', 'Required parameter userId was null or undefined when calling apiUserUserIdGet.');
            }
            const localVarPath = `/api/user/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all game by team ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiGameTeamIdGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Game> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiGameTeamIdGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Create a new schedule
         * @param {ApiScheduleBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSchedulePost(body: ApiScheduleBody, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiSchedulePost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Create a team building request
         * @param {ApiTeambuildingBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamBuildingPost(body: ApiTeambuildingBody, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiTeamBuildingPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Join a team request
         * @param {ApiTeamjoiningBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamJoiningPost(body: ApiTeamjoiningBody, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiTeamJoiningPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Delete team by ID
         * @param {string} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamTeamIdDelete(teamId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiTeamTeamIdDelete(teamId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get team by ID
         * @param {string} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamTeamIdGet(teamId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Team> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiTeamTeamIdGet(teamId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get all teams
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamsGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Team>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiTeamsGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get user by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserIdGet(userId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<User> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).apiUserUserIdGet(userId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Get all game by team ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiGameTeamIdGet(options?: any) {
            return DefaultApiFp(configuration).apiGameTeamIdGet(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Create a new schedule
         * @param {ApiScheduleBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSchedulePost(body: ApiScheduleBody, options?: any) {
            return DefaultApiFp(configuration).apiSchedulePost(body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Create a team building request
         * @param {ApiTeambuildingBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamBuildingPost(body: ApiTeambuildingBody, options?: any) {
            return DefaultApiFp(configuration).apiTeamBuildingPost(body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Join a team request
         * @param {ApiTeamjoiningBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamJoiningPost(body: ApiTeamjoiningBody, options?: any) {
            return DefaultApiFp(configuration).apiTeamJoiningPost(body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Delete team by ID
         * @param {string} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamTeamIdDelete(teamId: string, options?: any) {
            return DefaultApiFp(configuration).apiTeamTeamIdDelete(teamId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get team by ID
         * @param {string} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamTeamIdGet(teamId: string, options?: any) {
            return DefaultApiFp(configuration).apiTeamTeamIdGet(teamId, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get all teams
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTeamsGet(options?: any) {
            return DefaultApiFp(configuration).apiTeamsGet(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get user by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUserIdGet(userId: string, options?: any) {
            return DefaultApiFp(configuration).apiUserUserIdGet(userId, options)(fetch, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get all game by team ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiGameTeamIdGet(options?: any) {
        return DefaultApiFp(this.configuration).apiGameTeamIdGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Create a new schedule
     * @param {ApiScheduleBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiSchedulePost(body: ApiScheduleBody, options?: any) {
        return DefaultApiFp(this.configuration).apiSchedulePost(body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Create a team building request
     * @param {ApiTeambuildingBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiTeamBuildingPost(body: ApiTeambuildingBody, options?: any) {
        return DefaultApiFp(this.configuration).apiTeamBuildingPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Join a team request
     * @param {ApiTeamjoiningBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiTeamJoiningPost(body: ApiTeamjoiningBody, options?: any) {
        return DefaultApiFp(this.configuration).apiTeamJoiningPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Delete team by ID
     * @param {string} teamId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiTeamTeamIdDelete(teamId: string, options?: any) {
        return DefaultApiFp(this.configuration).apiTeamTeamIdDelete(teamId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get team by ID
     * @param {string} teamId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiTeamTeamIdGet(teamId: string, options?: any) {
        return DefaultApiFp(this.configuration).apiTeamTeamIdGet(teamId, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get all teams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiTeamsGet(options?: any) {
        return DefaultApiFp(this.configuration).apiTeamsGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get user by ID
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiUserUserIdGet(userId: string, options?: any) {
        return DefaultApiFp(this.configuration).apiUserUserIdGet(userId, options)(this.fetch, this.basePath);
    }

}
/**
 * QRApi - fetch parameter creator
 * @export
 */
export const QRApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Scan a QR code
         * @param {ApiQrscanBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiQrScanPost(body: ApiQrscanBody, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling apiQrScanPost.');
            }
            const localVarPath = `/api/qr-scan`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ApiQrscanBody" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QRApi - functional programming interface
 * @export
 */
export const QRApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Scan a QR code
         * @param {ApiQrscanBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiQrScanPost(body: ApiQrscanBody, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = QRApiFetchParamCreator(configuration).apiQrScanPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * QRApi - factory interface
 * @export
 */
export const QRApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Scan a QR code
         * @param {ApiQrscanBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiQrScanPost(body: ApiQrscanBody, options?: any) {
            return QRApiFp(configuration).apiQrScanPost(body, options)(fetch, basePath);
        },
    };
};

/**
 * QRApi - object-oriented interface
 * @export
 * @class QRApi
 * @extends {BaseAPI}
 */
export class QRApi extends BaseAPI {
    /**
     * 
     * @summary Scan a QR code
     * @param {ApiQrscanBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QRApi
     */
    public apiQrScanPost(body: ApiQrscanBody, options?: any) {
        return QRApiFp(this.configuration).apiQrScanPost(body, options)(this.fetch, this.basePath);
    }

}
