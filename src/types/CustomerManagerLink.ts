import { Entity, EntityUpdateConfig } from './Entity'

declare namespace CustomerManagerLink {

    enum CustomerManagerLinkStatus {
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
    export interface CustomerManagerLink extends Entity {
        // resource_name: string
        // id: string
        // name: string
        client_customer: string
        manager_link_id: string
        status: CustomerManagerLinkStatus
    }

    export interface CustomerManagerLinkUpdateConfig extends EntityUpdateConfig {
        resource_name: string
        status: CustomerManagerLinkStatus
    }

}

export = CustomerManagerLink