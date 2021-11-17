import React, { useEffect } from 'react'

export default function Display({ amount, years }) {

    // const [APR, setAPR] = useState(0.05)

    useEffect(() => {
        
        // if (prevProps !== this.props) {
            // calculateAPR();
        // }

    }, [])

    // const calculateAPR = () => {
    //     // let { amount } = this.props;
    
    //     if (1000 < amount && amount < 5000) {
    //       setAPR( 0.05 );
    //     }
    //     if (5000 < amount && amount < 10000) {
    //       setAPR(0.1);
    //     }
    //     if (10000 < amount && amount < 15000) {
    //       setAPR(0.15);
    //     }
    //     if (15000 < amount && amount < 20000) {
    //       setAPR(0.2)
    //     }
    //   };

    const total = (((amount * years)/100)-8990).toFixed(0)
    
    const calculateMonthlyRepayment = () => {
        // let { amount, years } = this.props;
        // let decimalFormat = APR + 1;
        // let totalOwed = decimalFormat * amount;
        // let monthlyRepayment = totalOwed / (years * 12);
    
        // return <p>£{Math.round(monthlyRepayment)}</p>;

        return <h1>{total} €*</h1>


      };
    
    // const percentageAPR = () => {
    //     return <p>{APR * 100}%</p>;
    //   };



    return (
        <div>
            <div className="flex">
                {/* <DisplayChild func={percentageAPR()} text="interest rate" /> */}
                <DisplayChild
                func={calculateMonthlyRepayment()}
                text="*que vous économisez avec Homners."
                />
            </div>
        </div>
    )
}

const DisplayChild = ({ func, text }) => {
    return (
      <span>
        {func} <small>{text}</small>
      </span>
    );
  };
