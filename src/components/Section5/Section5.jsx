import React from 'react'
import './Section5.scss'
const Section5 = () => {
  return (
    <div className="section5">
        <h1>Best travelars of this month</h1>
        <div className="section5__cards">
            <div className="section5__cards__card">
                <img src="https://www.billboard.com/wp-content/uploads/2022/08/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=875&h=583&crop=1" alt="" />
                <h4>Ariana Grande</h4>
                <p>arianag@gmail.com</p>
            </div>
            <div className="section5__cards__card">
                <img src="https://ca-times.brightspotcdn.com/dims4/default/31f0da9/2147483647/strip/true/crop/2836x2000+0+0/resize/1200x846!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdc%2F61%2Fc19d543f43a8b6634e43ae19d377%2Ffilm-superman-11403.jpg" alt="" />
                <h4>Henry Cavill</h4>
                <p>hcavill@gmail.com</p>
            </div>
            <div className="section5__cards__card">
                <img src="https://www.usmagazine.com/wp-content/uploads/2024/03/Selena-Gomez-Explains-Why-Shes-Finally-at-a-Good-Place-in-Her-Life-2.jpg?w=1000&quality=86&strip=all" alt="" />
                <h4>Selena Gomez</h4>
                <p>selenag@gmail.com</p>
            </div>
            <div className="section5__cards__card">
                <img src="https://www.ka-news.de/storage/image/5/1/9/2/2332915_justin-bieber_ka-2022-644x395_1BUhI-_2iavdJ.jpg" alt="" />
                <h4>Justin Bieber</h4>
                <p>bjustin@gmail.com</p>
            </div>
          
        </div>
    </div>
  )
}

export default Section5