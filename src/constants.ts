export const ADWORDS_API_BASE_URL = 'http://googleads.googleapis.com/v1/'
export const ADWORDS_AUTH_URL = 'http://accounts.google.com/o/oauth2/token'

export enum ENDPOINTS {
    search = 'googleAds:search',
    campaigns = 'campaigns',
    campaign_budgets = 'campaignBudgets',
    campaign_criteria = 'campaignCriteria',
    campaign_shared_sets = 'campaignSharedSets',
    customers = 'customers',
    adgroups = 'adGroups',
    ads = 'adGroupAds',
    adgroup_critera = 'adGroupCriteria',
    shared_sets = 'sharedSets',
    shared_set_criteria = 'sharedCriteria',
    conversion_actions = 'conversionActions',
    geo_target_constants = 'geoTargetConstants',
    labels = 'labels',
    campaign_labels = 'campaignLabels',
    customer_labels = 'customerLabels',
    account_budget_proposals = 'accountBudgetProposals'
}

export enum RESOURCE_NAMES {
    campaign = 'campaign',
    campaign_budget = 'campaign_budget',
    campaign_criteria = 'campaign_criterion',
    campaign_shared_set = 'campaign_shared_set',
    adgroup = 'ad_group',
    ad = 'ad_group_ad',
    adgroup_critera = 'ad_group_criterion',
    shared_set = 'shared_set',
    shared_set_criterion = 'shared_criterion',
    conversion_action = 'conversion_action',
    geo_target_constant = 'geo_target_constant',
    labels = 'labels',
    campaign_labels = 'campaign_labels',
    customer_labels = 'customer_labels',
    account_budget_proposal = 'account_budget_proposal',
}
