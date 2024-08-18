import EditProfile from "../pages/home/dashbord/charts/component/EditProfile"

export function users ({setlargestamount,setUsersDate,setminor}){
    const largestamount = document.getElementById('largestamount')
    const Minoramount = document.getElementById('Minoramount')
    const date = document.getElementById('date')
    const online = document.getElementById('online')

    date.onclick  = ()=>{
        setlargestamount(false)
        setUsersDate(true)
        setminor(false)
    }
    largestamount.onclick  = ()=>{
        setlargestamount(true)
        setUsersDate(false)
        setminor(false)
    }
    Minoramount.onclick  = ()=>{
        setlargestamount(false)
        setUsersDate(false)
        setminor(true)
    }
}


export function SidibarDash ({seTCharts,setSidibar,setAccount,setDesposit,setNotif,setDealNotif,setSupport,setBalance,SetEditProf,setAdminDash,setopenDeal,}){
    const Dashbord = document.getElementById('Dashbord')
    const Balance = document.getElementById('Balance')
    const Deal = document.getElementById('Deal')
    const Deals = document.getElementById('Deals')
    const Charts = document.getElementById('Charts')
    const Notification = document.getElementById('Notification')
    const Wallet = document.getElementById('Wallet')
    const Account = document.getElementById('Account')
    const Supports = document.getElementById('Supports')
    const editProfile = document.getElementById('editProfile')


   
    Charts.onclick = ()=>{
        seTCharts(true)
        setSidibar(false)
    }
    Account.onclick = ()=>{
        setAccount(true)
        setSidibar(false)
    }
    Deals.onclick = ()=>{
        setSidibar(false)
        setDealNotif(true)
    }
    Notification.onclick = ()=>{
        setSidibar(false)
        setNotif(true)
    }
    Wallet.onclick = ()=>{
        setSidibar(false)
        setDesposit(true)
    }
    Supports.onclick = ()=>{
        setSidibar(false)
        setSupport(true)
    }
    Balance.onclick = ()=>{
        setSidibar(false)
        setBalance(true)
    }
    Deal.onclick = ()=>{
        setSidibar(false)
        setopenDeal(true)
    }
    
}

export function headerDashAdmin ({setAdminChats, setUsers,setshpippong,setBtnactive,setnotif,setMetaMessage}){

    const users = document.getElementById('users')
    const notif = document.getElementById('notif')
    const deposit = document.getElementById('deposit')
    const pull = document.getElementById('pull')
    const shipping = document.getElementById('shipping')
    const chats = document.getElementById('chats')
    const MetaMessage = document.getElementById('MetaMessage')

    users.onclick = ()=>{
        setUsers(true)
        setshpippong(false)
        setBtnactive(1)
        setnotif(false)
        setAdminChats(false)
    }
    shipping.onclick = ()=>{
        setUsers(false)
        setshpippong(true)
        setBtnactive(6)
        setnotif(false)
        setAdminChats(false)

    }
    notif.onclick = ()=>{
        setUsers(false)
        setshpippong(false)
        setBtnactive(6)
        setnotif(true)
        setAdminChats(false)
    }
    MetaMessage.onclick=()=>{
        setMetaMessage(true)
        setUsers(false)
        setshpippong(false)
        setBtnactive(5)
        setnotif(false)
        setAdminChats(false)
    }
    chats.onclick=()=>{
        setMetaMessage(false)
        setUsers(false)
        setshpippong(false)
        setBtnactive(4)
        setnotif(false)
        setAdminChats(true)
    }
}