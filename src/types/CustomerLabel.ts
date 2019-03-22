import { Entity, NewEntityConfig } from './Entity'

declare namespace CustomerLabel {

    /**
     * Main CustomerLabel Interface
     * @interface
     */
    export interface CustomerLabel extends Entity {
        // resource_name: string
        // id: string
        // name: string
        customer: string
        label: string
    }

    export interface NewCustomerLabelConfig extends NewEntityConfig {
        customer: string
        label: string
    }

}

export = CustomerLabel