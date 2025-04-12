import React,{ useState,useEffect} from 'react'

function Home(){
    const [username, setUsername] = useState('');

    useEffect(()=>{
        const  storedUser = localStorage.getItem('user');
        if(storedUser){
            const user = JSON.parse(storedUser);
            if(user && user.name){
                setUsername(user.name)
            }
        }
    },[]);
  return (
    <div className='home-wrapper'>
        <div className='welcome-card'>
            <h1>Hi,{username?username : 'Guest'}👋 </h1>
            <p>Welcome to your dashboard. We're glad to have you here!</p>
        </div>

        <div className='features-grid'>
            <div className='feature-box'>
                <h2> 🚀 Quick Start</h2>
                <p>Access your tools and get started in seconds.</p>
            </div>

            <div className='feature-box'>
                <h2> 📚 Learning</h2>
                <p>Explore tutorials and guides tailored to your skills.</p>
            </div>

            <div className='feature-box'>
                <h2> 💡 Tips</h2>
                <p>Get personalized productivity tips based on your activity.</p>
            </div>
        </div>
      
    </div>
  );
}

export default Home
