import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCustomerClientLinkConfig } from '../types/CustomerClientLink'

export default class CustomerClientLinks extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.customer_client_links, RESOURCE_NAMES.customer_client_link)
    }

    create(config: NewCustomerClientLinkConfig, token?: string): Promise<any> {
        return super.create(config, token)
    }
}