import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewCampaignConfig } from '../types/Campaign'

export default class Campaigns extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.campaigns, RESOURCE_NAMES.campaign)
    }

    create(config: NewCampaignConfig | NewCampaignConfig[]): Promise<any> {
        return super.create(config)
    }

    retrieve(campaign_id: string): Promise<any> {
        return super.retrieve(campaign_id)
    }
}
