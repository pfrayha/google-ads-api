import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { CustomerManagerLinkUpdateConfig } from '../types/CustomerManagerLink'

export default class CustomerClientLinks extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.customer_manager_links, RESOURCE_NAMES.customer_manager_link)
    }

    update(config: CustomerManagerLinkUpdateConfig, token?: string): Promise<any> {
        return super.update(config, token)
    }
}