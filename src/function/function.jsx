import Chart from 'chart.js/auto';
import anychart from 'anychart'


export function clickBntDashleft({setActive},{user,setdashAdmin, setMetaCard,setHome,setwidthDraw,setNotif,setBalance,setAccountProfile,setDeposit,setsetting,setcashWidraw}){
    const Homepage = document.getElementById('Homepage')
    const HomepageHeader = document.getElementById('Homepage2')
    const Getfound = document.getElementById('Getfound')
    const Push = document.getElementById('Push')
    const MetaCards = document.getElementById('MetaCards')
    const Withdrawandtransfer = document.getElementById('Withdrawandtransfer')
    const BankAccount = document.getElementById('BankAccount')
    const Notification = document.getElementById('Notification')
    const NotificationHeader = document.getElementById('Notification2')
    const Settings = document.getElementById('Settings')
    const btnAccount = document.getElementById('btnAccount')
    const editBtn = document.getElementById('editBtn')
    const Setting = document.getElementById('Setting')
    const Admindash = document.getElementById('Admindash')
    
    Setting.onclick =()=>{
      setHome(false)
      setwidthDraw(false)
      setNotif(false)
      setBalance(false)
      setMetaCard(false)
      setAccountProfile(false)
      setDeposit(false)
      setsetting(true)
      setActive(8)
    }

    btnAccount.onclick =()=>{
      setActive(0)
      setHome(false)
      setwidthDraw(false)
      setNotif(false)
      setBalance(false)
      setMetaCard(false)
      setAccountProfile(true)
      setDeposit(false)
      setsetting(false)
    }
            Homepage.onclick = ()=>{
            setActive(1)
                setHome(true)
                setwidthDraw(false)
                setNotif(false)
                setBalance(false)
                setMetaCard(false)
                setAccountProfile(false)
                setDeposit(false)
                setsetting(false)
                setcashWidraw(false)
            }
           HomepageHeader.onclick = ()=>{
            setActive(1)
                setHome(true)
                setwidthDraw(false)
                setNotif(false)
                setBalance(false)
                setMetaCard(false)
                setAccountProfile(false)
                setDeposit(false)
                setsetting(false)
                setcashWidraw(false)
                
            }
        Getfound.onclick = ()=>{
            setActive(2)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(false)
                    setBalance(true)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(false)
                    setcashWidraw(false)
                    
        }
        Push.onclick = ()=>{
            setActive(3)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(false)
                    setBalance(false)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(true)
                    setsetting(false)
                    setcashWidraw(false)
        }
        MetaCards.onclick = ()=>{
            setActive(4)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(false)
                    setBalance(false)
                    setMetaCard(true)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(false)
                    setcashWidraw(false)
                    
        }
        Withdrawandtransfer.onclick = ()=>{
            setActive(5)
                    setHome(false)
                    setwidthDraw(true)
                    setNotif(false)
                    setBalance(false)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(false)
                    setcashWidraw(false)
                    
        }
        BankAccount.onclick = ()=>{
            setActive(6)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(false)
                    setBalance(false)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(false)
                    setcashWidraw(true)
        }
        Notification.onclick = ()=>{
            setActive(7)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(true)
                    setBalance(false)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(false)
                    setcashWidraw(false)
                    
        }
        NotificationHeader.onclick = ()=>{
            setActive(7)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(true)
                    setBalance(false)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(false)
                    setcashWidraw(false)
                    
        }
        Settings.onclick = ()=>{
            setActive(8)
                    setHome(false)
                    setwidthDraw(false)
                    setNotif(false)
                    setBalance(false)
                    setMetaCard(false)
                    setAccountProfile(false)
                    setDeposit(false)
                    setsetting(true)
                    setcashWidraw(false)
        }
        {user?.isAdmin &&( Admindash.onclick = ()=>{
          setActive(9)
                  setHome(false)
                  setwidthDraw(false)
                  setNotif(false)
                  setBalance(false)
                  setMetaCard(false)
                  setAccountProfile(false)
                  setDeposit(false)
                  setdashAdmin(true)
                  setcashWidraw(false)
      })}
        

        }

        
        //chart bar

        export function chartBar(){
          let ctx2 = document.getElementById('barChart');
          new Chart(ctx2, {
            type: 'bar',
            data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: 'tansfer money',
                data: [12, 19, 3, 5, 2, 80],
                backgroundColor:[
                    "rgba(0, 0, 255, 0.37)",
                ],
                borderColor :[
                    'blue'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
        })  
    }


        export function chartDoughnut(){
          const doughnut = document.getElementById('doughnut');
          new Chart(doughnut, {
            type: 'doughnut',
            data: {
              datasets: [{
                label: '# of Votes',
                data: [2, 2, 50, 50],
                backgroundColor:[
                    "green",
                    "red",
                    "blue",
                    "yellow"
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }


        export function chartLine(){
          const ctx3 = document.getElementById('line');
    new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'data',
          data: [12, 19, 3, 5, 2, 80],
          backgroundColor:[
              "green",
              "red",
              "blue",
              "yellow"
          ],
          
          borderWidth: 5
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
        }


        export function chartradar(){
          const doughnut = document.getElementById('radar');
          new Chart(doughnut, {
            type: 'radar',
            data: {
              labels: ['users', 'walet', 'deposit', 'test'],
              datasets: [{
                label: '# of Votes',
                data: [12, 20, 3, 5],
                backgroundColor:[
                    "rgba(0, 0, 255, 0.435)",
                    "rgba(0, 0, 255, 0.435)",
                    "rgba(0, 0, 255, 0.435)",
                    "rgba(0, 0, 255, 0.435)"
                ],
                borderColor :[
                    'black'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }