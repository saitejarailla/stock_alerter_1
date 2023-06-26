import './Card1.css';


import Card0 from './Cards/Card0'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Navbar from './Navbar'



function Card1(){
   
    // console.log(values1)
    let company=[
        {
            photo1 : "https://logos-world.net/wp-content/uploads/2022/02/ServiceNow-Symbol.png",
            title1 : "ServiceNow",
            sym1: "NOW",
            photo2 : "https://g.foolcdn.com/art/companylogos/square/googl.png",
            title2 : "Alphabet",
            sym2:"goOgl",
            photo3 : "https://fresheropenings.com/wp-content/uploads/2022/09/Amazon-Recruitment-for-Freshers-2022.jpg",
            title3 : "Amazon",
            sym3:"AMZN",
        },
        {
            photo1 : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_WaltDisney_Company-Logo.svg/1280px-The_WaltDisney_Company-Logo.svg.png",
            title1 : "WaltDisney",
            sym1:"DIS",
            photo2 : "https://www.itgreen.co.th/wp-content/uploads/2019/12/B03-paloalto-2.jpg",
            title2 : "PaloAltoNetworks",
            sym2:"PANW",
            photo3 : "https://nypost.com/wp-content/uploads/sites/2/2020/04/sized-boeing-logo-2.jpg?quality=75&strip=all",
            title3 : "Boeing",
            sym3:"BA",
        },
        {
            photo1 : "https://d18qs7yq39787j.cloudfront.net/uploads/company/73/logo.jpg",
            title1 : "Prologis",
            sym1:"V",
            photo2 : "https://pharmaphorum.com/wp-content/uploads/2016/06/JJ-logo.jpg",
            title2 : "Jhonson&Jhonson",
            sym2:"JNJ",
            photo3 : "https://play-lh.googleusercontent.com/cDtLokndC3vu7f77UgNfT5ui8pSagdhtmFvJzFhdWk0C-cVLTpFnIxN_NHi-Nc8XFFo",
            title3 : "MercadoLibre",
            sym3:"MELI",
        },
        {
            photo1 : "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/djivpahfbfmqxtlbwfaw",
            title1 : "Costco Wholesale",
            sym1:"COST",
            photo2 : "https://www.annualreports.com/HostedData/CompanyLogos/NASDAQ_AAPL.png",
            title2 : "Apple",
            sym2:"AAPL",
            photo3 : "https://mundoconectado.com.br/uploads/chamadas/microsoft-receita-windows.jpg",
            title3 : "Microsoft",
            sym3:"MSFT",
        }
    ]
    return(
        <>
        <div className="cardType4">
            {company.map(obj=>(<div className="container4">
                <Card0 obj={[obj.photo1,obj.title1,obj.sym1]}></Card0>
                <Card2 obj={[obj.photo2,obj.title2,obj.sym2]}></Card2>
                <Card3 obj={[obj.photo3,obj.title3,obj.sym3]}></Card3>

            </div>))}
        </div>
        </>
        
    )
}
export default Card1;