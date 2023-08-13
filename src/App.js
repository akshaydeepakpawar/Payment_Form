import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

<div className="container">

    <form action="">

        <div className="row">

            <div className="col">

                <h3 className="title">payment</h3>

                <div className="inputBox">
                    <span>cards accepted :</span>
                    <img src="images/card_img.png" alt=""/>
                </div>
                <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div className="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" className="submit-btn"/>

    </form>

</div>    
    
</div>
  );
}

export default App;
