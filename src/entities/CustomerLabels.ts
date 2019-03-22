import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCustomerLabelConfig } from './../types/CustomerLabel';

export default class CustomerLabels extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.customer_labels, RESOURCE_NAMES.customer_labels)
    }

    create(config: NewCustomerLabelConfig | NewCustomerLabelConfig[], token?: string): Promise<any> {
        return super.create(config, token)
    }
}