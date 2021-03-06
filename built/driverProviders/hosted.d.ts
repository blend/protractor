/// <reference types="q" />
import * as q from 'q';
import { Config } from '../config';
import { DriverProvider } from './driverProvider';
export declare class Hosted extends DriverProvider {
    constructor(config: Config);
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    setupEnv(): q.Promise<any>;
}
