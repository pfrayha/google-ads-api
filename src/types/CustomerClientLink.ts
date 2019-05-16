import { Entity, NewEntityConfig } from './Entity'

declare namespace CustomerClientLink {

    enum CustomerClientLinkStatus {
        UNSPECIFIED,
        UNKNOWN,
        ACTIVE,
        INACTIVE,
        PENDING,
        REFUSED,
        CANCELED
    }

    /**
     * Main CustomerClientLink Interface
     * @interface
     */
    export interface CustomerClientLink extends Entity {
        // resource_name: string
        // id: string
        // name: string
        client_customer: string
        manager_link_id: string
        status: CustomerClientLinkStatus
    }

    export interface NewCustomerClientLinkConfig extends NewEntityConfig {
        customer: string
        label: string
        status: CustomerClientLinkStatus
    }

}

export = CustomerClientLink