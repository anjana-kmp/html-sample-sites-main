function addClass(clsname,e){
    let el=e.target
    el.className=el.className+' '+clsname;
}
    function removeClass(clsname,e){
        let currentCls=e.target.className
        let removedClass=currentCls.replace( new RegExp(clsname,'g'),'' )
        e.target.className=removedClass.trim();
        

    }
