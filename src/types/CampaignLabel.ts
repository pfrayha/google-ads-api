import { Entity, NewEntityConfig } from './Entity'

declare namespace CampaignLabel {

    /**
     * Main CampaignLabel Interface
     * @interface
     */
    export interface CampaignLabel extends Entity {
        // resource_name: string
        // id: string
        // name: string
        campaign: string
        label: string
    }

    export interface NewCampaignLabelConfig extends NewEntityConfig {
        campaign: string
        label: string
    }

}

export = CampaignLabel