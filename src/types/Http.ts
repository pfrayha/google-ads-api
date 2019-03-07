import { NewEntityConfig, ListConfig } from './Entity'
import { UpdateConfig, ReportConfig } from './Global'
import { SuggestGeoTargetConstantConfig } from './GeoTargetConstant'

declare namespace Http {
    /**
     *  Http Controller Interface
     * @interface
     */
    export interface HttpController {
        retrieve(entity: string, entity_id?: string | number): Promise<object>
        create(config: NewEntityConfig | NewEntityConfig[], entity: string): Promise<object>
        list(config: ListConfig | undefined, resource: string): Promise<object>
        update(config: UpdateConfig | UpdateConfig[], entity: string): Promise<object>
        delete(entity: string, entity_id: string | number): Promise<object>
        query(entity: string, token?: string): Promise<object>
        report(config: ReportConfig): Promise<object>
        suggest(config: SuggestGeoTargetConstantConfig, entity: string): Promise<any>
    }

    /**
     *  Access Token Interface
     * @interface
     */
    export interface AccessToken {
        access_token: string
        expires_in: number
        id_token: string | number
        token_type: string
    }

    /**
     *  Error Interface
     * @interface
     */
    export interface Error {
        code: string | number // create new enum?
        details: object
        message: string
        status: string // create new enum?
    }

    /**
     * Request Options Interface
     * @interface
     */
    export interface RequestOptions {
        method: string
        url: string
        headers: {
            authorization: string
            'developer-token': string
            'login-customer-id': string
        }
        qs?: {
            query?: string
            page_size?: string | number
            page_token?: string
        }
        body?: string
        limit?: number
    }

    /**
     * Result Interface
     * @interface
     */
    export interface Result {
        results: object
        total_results_count: string | number
        field_mask: string
    }
}
export = Http
