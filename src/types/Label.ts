import { Entity, NewEntityConfig } from './Entity'

declare namespace Label {

    /**
     * Main Label Interface
     * @interface
     */
    export interface Label extends Entity {
        // resource_name: string
        // id: string
        // name: string
        status: LabelStatus
    }

    /**
     * Enum for LabelStatus
     * @readonly
     * @enum {string}
     */
    enum LabelStatus {
        UNSPECIFIED = 'UNSPECIFIED',
        UNKNOWN = 'UNKNOWN',
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
    }

    export interface NewLabelConfig extends NewEntityConfig {
        name: string
    }

}

export = Label