import {acceptedColours} from './consts.js'

export default (color) => {
    if (Object.values(acceptedColours).includes(color)) {
        console.log(`Wall is painted ${color}`)
    } else {
        console.log('This color is not allowed!')
    }
}
