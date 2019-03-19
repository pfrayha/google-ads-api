import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCampaignLabelConfig } from './../types/CampaignLabel';

export default class CampaignLabels extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.campaign_labels, RESOURCE_NAMES.campaign_labels)
    }

    create(config: NewCampaignLabelConfig | NewCampaignLabelConfig[], token?: string): Promise<any> {
        return super.create(config, token)
    }

}