import { ContactUs } from "./SendMail/ContactUs";
import homeimg from "./images/stockAlerter.png"
import "./styles/Home.css"

function Home() {
    return (
        <div className='homeContainer'>
            
            <div className='picDetails'>
                <div className='home'>
                    <div className='content'>
                        <h2>Stock Alerter</h2>
                        <p>Welcome to Stock Alerter, your go-to platform for staying informed about stock market updates and receiving timely alerts. Whether you're a seasoned investor or just starting out, Stock Alerter provides you with the latest news, real-time data, and personalized notifications to help you make informed investment decisions.</p>
                        <p>Our comprehensive platform offers a wide range of features, including:</p>
                        <ul>
                            <li>Real-time stock quotes</li>
                            <li>Stock price prediction</li>
                            <li>Portfolio tracking</li>
                            <li>Set stock alerts for selling and buying stocks</li>
                        </ul>
                        <p>Stay ahead of the market with Stock Alerter and never miss an opportunity. Sign up today and start exploring the exciting world of stock trading!</p>
                    </div>
                </div>
                <img src={homeimg} className='pic' alt="Stock Alerter" />
                <div className='down'>
                    <div className='mobileContent'>
                        <h2>Stock Alerter</h2>
                        <p>Welcome to Stock Alerter, your go-to platform for staying informed about stock market updates and receiving timely alerts. Whether you're a seasoned investor or just starting out, Stock Alerter provides you with the latest news, real-time data, and personalized notifications to help you make informed investment decisions.</p>
                        <p>Our comprehensive platform offers a wide range of features, including:</p>
                        <ul>
                            <li>Real-time stock quotes</li>
                            <li>Stock price prediction</li>
                            <li>Portfolio tracking</li>
                            <li>Set stock alerts for selling and buying stocks</li>
                        </ul>
                        <p>Stay ahead of the market with Stock Alerter and never miss an opportunity. Sign up today and start exploring the exciting world of stock trading!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
