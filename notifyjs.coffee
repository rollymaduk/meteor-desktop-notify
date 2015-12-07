class Rp_notifyJs extends Notify
  constructor:(timeout=5,defaultIcon)->
    super "noob",{timeout:timeout,icon:defaultIcon}


  _doNotify=(notify,title,body,options)->
    notify.title=title
    notify.options.body=body
    if options then notify.options=_.extend(notify.options,options)




  _permissionDenied=()->
    console.warn("Permission has been denied by the user")
    return

  show:(title,body,options)->
    that=@
    unless Notify.needsPermission
      _doNotify(that,title,body,options)
      super
    else if Notify.isSupported()
      Notify.requestPermission ()->
        _doNotify(that,title,body,options)
        super
      ,_permissionDenied
    return


Rp_notify_js=new Rp_notifyJs(5,"/img/Reminder-ring-WF.png")




