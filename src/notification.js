// Notifications.js
let state = {
  list: [],
  destroy(msg) {
    let index = state.list.findIndex(x => x.id === msg.id)
    state.list.splice(index, 1)
  }
}

export function addSuccess(text, timeout = 3000) {
  state.list.push({ id: guid(), type: 'success', text, timeout })
}
export function addInfo(text, timeout = 3000) {
  state.list.push({ id: guid(), type: 'info', text, timeout })
}
export function addWarning(text, timeout = 3000) {
  state.list.push({ id: guid(), type: 'warning', text, timeout })
}
export function addDanger(text, timeout = 3000) {
  state.list.push({ id: guid(), type: 'danger', text, timeout })
}

export let Notifications = {
  view(vnode) {
    let ui = vnode.state
    return state.list ?
      m('.m-notifications', state.list.map((msg) => {
        return m('div', { key: msg.id }, m(Notification, msg)) //wrap in div with key for proper dom updates
      })) : null
  }
}

let Notification = {
  oninit(vnode) {
    setTimeout(() => {
      Notification.destroy(vnode)
    }, vnode.attrs.timeout)
  },
  notificationClass(type) {
    const types = ['info', 'warning', 'success', 'danger']
    if (types.indexOf(type) > -1)
      return type
    return 'info'
  },
  destroy(vnode) {
    vnode.dom.classList.add('destroy')
    setTimeout(() => {
      state.destroy(vnode.attrs)
      m.redraw()
    }, 300)
  },
  view(vnode) {
    let ui = vnode.state
    let msg = vnode.attrs
    return m('.m-notification', { class: ui.notificationClass(msg.type), onclick: () => { ui.destroy(vnode) } }, msg.text)
  }
}

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}