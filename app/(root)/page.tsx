import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import "../globals.css";
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
  const loggedIn={firstName: "Teo"};

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
          </header>
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1255}
          />
      </div>
    </section>
  )
}

export default Home