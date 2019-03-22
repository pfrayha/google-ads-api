import Campaigns from './entities/Campaigns'
import CampaignBudgets from './entities/CampaignBudgets'
import CampaignCriterions from './entities/CampaignCriterions'
import CampaignNegatives from './entities/CampaignNegatives'
import CampaignAdSchedules from './entities/CampaignAdSchedules'
import CampaignSharedSets from './entities/CampaignSharedSets'
import AdGroups from './entities/AdGroups'
import AdGroupAds from './entities/AdGroupAds'
import AdGroupCriterions from './entities/AdGroupCriterions'
import Keywords from './entities/Keywords'
import SharedSets from './entities/SharedSets'
import SharedSetCriterions from './entities/SharedSetCriterions'
import ConversionActions from './entities/ConversionActions'
import GeoTargetConstants from './entities/GeoTargetConstants'
import Labels from './entities/Labels'

import { ENDPOINTS, RESOURCE_NAMES } from './constants'
import { Customer } from './types/Customer'
import { HttpController } from './types/Http'
import { ReportConfig, UpdateConfig } from './types/Global'
import CampaignLabels from './entities/CampaignLabels';
import CustomerLabels from './entities/CustomerLabels';

export default function Customer(http_controller: HttpController): Customer {
    return {
        campaigns: new Campaigns(http_controller),
        campaignAdSchedules: new CampaignAdSchedules(http_controller),
        campaignBudgets: new CampaignBudgets(http_controller),
        campaignCriterions: new CampaignCriterions(http_controller),
        campaignNegatives: new CampaignNegatives(http_controller),
        campaignSharedSets: new CampaignSharedSets(
            http_controller,
            ENDPOINTS.campaign_shared_sets,
            RESOURCE_NAMES.campaign_shared_set
        ),
        adgroups: new AdGroups(http_controller),
        ads: new AdGroupAds(http_controller),
        adgroupCriterions: new AdGroupCriterions(http_controller),
        keywords: new Keywords(http_controller),
        sharedSets: new SharedSets(http_controller),
        sharedSetCriterions: new SharedSetCriterions(http_controller),
        conversionActions: new ConversionActions(http_controller),
        geoTargetConstants: new GeoTargetConstants(
            http_controller,
            ENDPOINTS.geo_target_constants,
            RESOURCE_NAMES.geo_target_constant
        ),
        labels: new Labels(http_controller),
        campaignLabels: new CampaignLabels(http_controller),
        customerLabels: new CustomerLabels(http_controller),
        update: (config: UpdateConfig) => http_controller.update(config, 'mutateCustomer'),
        retrieve: () => http_controller.retrieve(ENDPOINTS.customers),
        query: (query: string, token?: string) => http_controller.query(query, token),
        report: (config: ReportConfig) => http_controller.report(config),
    }
}
