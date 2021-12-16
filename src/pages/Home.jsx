import React from 'react';
import '../css/home.css';
// import styles from '../css/home.module.css';



// class Home extends Component{
    

//          render(){
            
//             useEffect(() => {
//             gsap.to(boxRef.current, {
//                 duration: 1,
//                 rotate : "+=360",
//             });
//             });

//         return (
//             <header className={styles.header}>
//                <div className={styles.one} ref={ boxRef }>
//                     <h1>Welcome to the Home Page</h1>
//                </div>
//                <div>
//                     <h2>This is the Home Page</h2>
//                </div>
//             </header>
//         )
//     }
// }

function Home() {
    
    return (
        <header>
            <div  className='one'>
                <h1>Welcome to the Home Page</h1>
                {/* svg circle */}
                <svg width="100" height="100" id="one" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#F2F2F2" id='first' />
                    <circle cx="50" cy="50" r="40" fill="#EAEAEA" id='second' />
                    <circle cx="50" cy="50" r="35" fill="#E1E1E1" id='third' />
                    <circle cx="50" cy="50" r="30" fill="#D5D5D5" id='fourth' />
                    </svg>
            </div>
            <div  className='two'>
                <h2>Welcome to the Home Page</h2>
                <svg width="100" height="100" id="two" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#F2F2F2" />
                    <circle cx="50" cy="50" r="40" fill="#EAEAEA" />
                    <circle cx="50" cy="50" r="35" fill="#E1E1E1" />
                    <circle cx="50" cy="50" r="30" fill="#D5D5D5" />
                    </svg>
            </div>
        </header>
    )
}
export default Home;

