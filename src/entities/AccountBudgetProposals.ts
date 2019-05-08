import Entity from './Entity'
import { ENDPOINTS, RESOURCE_NAMES } from '../constants'

import { HttpController } from '../types/Http'
import { NewAccountBudgetProposalConfig } from '../types/AccountBudgetProposal'

export default class Campaigns extends Entity {
    constructor(http_controller: HttpController) {
        super(http_controller, ENDPOINTS.account_budget_proposals, RESOURCE_NAMES.account_budget_proposal)
    }

    create(config: NewAccountBudgetProposalConfig, token?: string): Promise<any> {
        return super.create(config, token)
    }
}