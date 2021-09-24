import {createApp} from 'vue'
import SimplesSnackbar from './Snackbar.vue'
function createSnackbar (data,type) {
    let message,duration
    typeof data == "object" ? {message,duration} = data : message = data
    let show = true
    let snackbar = createApp(SimplesSnackbar, {
        message,
        duration,
        show,
        type,
    })
    let divElement = document.createElement('div')
    document.body.appendChild(divElement)
    snackbar.mount(divElement)

}
createSnackbar.success = function(data){
    createSnackbar(data,'success')
}
createSnackbar.info = function(data){
    createSnackbar(data,'info')
}
createSnackbar.warning = function(data){
    createSnackbar(data,'warning')
}
createSnackbar.danger = function(data){
    createSnackbar(data,'danger')
}
createSnackbar.primary = function(data){
    createSnackbar(data,'primary')
}

export default createSnackbar;