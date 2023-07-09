import './styles/SetAlert.css';
import Card from './Cards/Card';
function SetAlert() {
    let company = [
        {
          photo: "https://logos-world.net/wp-content/uploads/2022/02/ServiceNow-Symbol.png",
          title: "ServiceNow",
          sym: "NOW"
        },
        {
          photo: "https://g.foolcdn.com/art/companylogos/square/googl.png",
          title: "Alphabet",
          sym: "GOOGL"
        },
        {
          photo: "https://fresheropenings.com/wp-content/uploads/2022/09/Amazon-Recruitment-for-Freshers-2022.jpg",
          title: "Amazon",
          sym: "AMZN"
        },
        {
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_WaltDisney_Company-Logo.svg/1280px-The_WaltDisney_Company-Logo.svg.png",
          title: "Walt Disney",
          sym: "DIS"
        },
        {
          photo: "https://www.itgreen.co.th/wp-content/uploads/2019/12/B03-paloalto-2.jpg",
          title: "Palo Alto Networks",
          sym: "PANW"
        },
        {
          photo: "https://nypost.com/wp-content/uploads/sites/2/2020/04/sized-boeing-logo-2.jpg?quality=75&strip=all",
          title: "Boeing",
          sym: "BA"
        },
        {
          photo: "https://d18qs7yq39787j.cloudfront.net/uploads/company/73/logo.jpg",
          title: "Prologis",
          sym: "V"
        },
        {
          photo: "https://pharmaphorum.com/wp-content/uploads/2016/06/JJ-logo.jpg",
          title: "Johnson & Johnson",
          sym: "JNJ"
        },
        {
          photo: "https://play-lh.googleusercontent.com/cDtLokndC3vu7f77UgNfT5ui8pSagdhtmFvJzFhdWk0C-cVLTpFnIxN_NHi-Nc8XFFo",
          title: "MercadoLibre",
          sym: "MELI"
        },
        {
          photo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/djivpahfbfmqxtlbwfaw",
          title: "Costco Wholesale",
          sym: "COST"
        },
        {
          photo: "https://www.annualreports.com/HostedData/CompanyLogos/NASDAQ_AAPL.png",
          title: "Apple",
          sym: "AAPL"
        },
        {
          photo: "https://mundoconectado.com.br/uploads/chamadas/microsoft-receita-windows.jpg",
          title: "Microsoft",
          sym: "MSFT"
        }
      ];
      
      return (
        <div className='setAlertBackground'>
          <div className='setAlertTop'></div>
          <div className="cardType4">
            {company.map((obj, index) => (
              <div className="container4" key={index}>
                <div className='row'>
                  <Card
                    photo={obj.photo}
                    title={obj.title}
                    sym={obj.sym}
                    id={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default SetAlert;