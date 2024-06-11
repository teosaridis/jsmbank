import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import "../globals.css";
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
  const loggedIn={firstName: "Teo", lastName: "Saris", email:"tsaridakis@gmail.com"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header '>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={300073.50}
            />
            </header>
          RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 100023.50},{currentBalance: 200050.00}]}
      />
    </section>
  )
}

export default Home