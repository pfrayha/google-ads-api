import { values } from 'lodash'

const parser = {
    parseResult(rows: any) {
        return values(rows).map(convertFakeArrays)
    },
}

const convertFakeArrays = (o: any): any => {
    for (const key in o) {
        if (o[key] && typeof o[key] === 'object') {
            if (o[key]['0']) {
                o[key] = values(o[key])
            } else {
                o[key] = convertFakeArrays(o[key])
            }
        }
    }

    return o
}

export default parser
