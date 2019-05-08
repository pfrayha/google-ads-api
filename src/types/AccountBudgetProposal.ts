import { Entity, NewEntityConfig } from './Entity'

declare namespace AccountBudgetProposal {

    enum AccountBudgetProposalType {
        UNSPECIFIED,
        UNKNOWN,
        CREATE,
        UPDATE,
        END,
        REMOVE,
    }

    /**
     * Main AccountBudgetProposal Interface
     * @interface
     */
    export interface AccountBudgetProposal extends Entity {
        // resource_name: string
        // id: string
        // name: string
        proposal_type: AccountBudgetProposalType
        account_budget: string
        proposed_name: string
        proposed_start_date_time: string
        proposed_end_date_time: string
        proposed_spending_limit_micros: number
    }

    export interface NewAccountBudgetProposalConfig extends NewEntityConfig {
        proposal_type: AccountBudgetProposalType
        account_budget?: string
        proposed_name?: string
        proposed_start_date_time?: string
        proposed_end_date_time?: string
        proposed_spending_limit_micros?: number
    }

}

export = AccountBudgetProposal