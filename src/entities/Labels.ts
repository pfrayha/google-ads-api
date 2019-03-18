import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewLabelConfig } from './../types/Label';

export default class Labels extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.labels, RESOURCE_NAMES.labels)
    }

    create(config: NewLabelConfig | NewLabelConfig[], token?: string): Promise<any> {
        return super.create(config, token)
    }

    retrieve(label_id: string): Promise<any> {
        return super.retrieve(label_id)
    }

    list() {
        return super.list()
    }
}