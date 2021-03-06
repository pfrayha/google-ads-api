import Campaigns from '../entities/Campaigns'
import CampaignAdSchedules from '../entities/CampaignAdSchedules'
import CampaignBudgets from '../entities/CampaignBudgets'
import CampaignCriterions from '../entities/CampaignCriterions'
import CampaignNegatives from '../entities/CampaignNegatives'
import CampaignSharedSets from '../entities/CampaignSharedSets'
import AdGroups from '../entities/AdGroups'
import AdGroupAds from '../entities/AdGroupAds'
import AdGroupCriterions from '../entities/AdGroupCriterions'
import Keywords from '../entities/Keywords'
import SharedSets from '../entities/SharedSets'
import SharedSetCriterions from '../entities/SharedSetCriterions'
import ConversionActions from '../entities/ConversionActions'
import GeoTargetConstants from '../entities/GeoTargetConstants'
import Labels from '../entities/Labels'
import CampaignLabels from '../entities/CampaignLabels'
import CustomerLabels from '../entities/CustomerLabels'
import AccountBudgetProposals from '../entities/AccountBudgetProposals'
import CustomerClientLinks from '../entities/CustomerClientLinks'

import { ReportConfig, UpdateConfig } from './Global'

declare namespace Customer {
    /**
     *  Customer Instance Interface
     * @interface
     */
    export interface Customer {
        campaigns: Campaigns
        campaignAdSchedules: CampaignAdSchedules
        campaignBudgets: CampaignBudgets
        campaignCriterions: CampaignCriterions
        campaignNegatives: CampaignNegatives
        campaignSharedSets: CampaignSharedSets
        adgroups: AdGroups
        ads: AdGroupAds
        adgroupCriterions: AdGroupCriterions
        keywords: Keywords
        sharedSets: SharedSets
        sharedSetCriterions: SharedSetCriterions
        conversionActions: ConversionActions
        geoTargetConstants: GeoTargetConstants
        labels: Labels
        campaignLabels: CampaignLabels
        customerLabels: CustomerLabels
        accountBudgetProposals: AccountBudgetProposals
        customerClientLinks: CustomerClientLinks
        update: (config: UpdateConfig) => Promise<any>
        retrieve: () => Promise<any>
        query: (query: string, token?: string) => Promise<any>
        report: (config: ReportConfig) => Promise<any>
    }
}
export = Customer
