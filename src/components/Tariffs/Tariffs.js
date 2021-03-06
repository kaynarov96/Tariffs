import React from 'react'


export default function Tariffs({ tarif }) {
   
   
    return (
        <div className="main">
            <div className="block">
                <span className="name">{tarif.name}</span>
                <img src={tarif.hit} alt="" className="hit" />
                <p className="fee">{tarif.fee}</p>
                <div className="price">{tarif.price !== 0 && tarif.price}
                    <div className="right"><div className="r">{tarif.price !== 0 && tarif.r}</div>
                        <div className="period">{tarif.price !== 0 && tarif.period}</div></div>
                </div>
            </div>
            <div className="block">
                <p className="internetP">{tarif.internetP !== 0 && tarif.internetP}
                    <span className="gb">{tarif.internetP !== 0 && tarif.gb}</span> </p>


                <span className="unlimP">{tarif.unlimP !== 0 && tarif.unlimP}</span>
                <div className="socialIcons">{tarif.socialMediaStatus && tarif.socialMediaIcons.map(o => <img className="icon" src={o} alt="dz" />)}</div>

                <span className="rouming">{tarif.rouming}</span>
            </div>
            <div className="block">
                <p className="callMinutes">{tarif.callMinutes !== 0 && tarif.callMinutes}
                    <span className="callMinutesText">{tarif.callMinutes !== 0 && tarif.callMinutesText}</span> </p>
                <span className="unlimMinutes">{tarif.unlimMinutes !== 0 && tarif.unlimMinutes}</span>
            </div>
            <div className="block">
                <p className="sms">{tarif.sms !== 0 && tarif.sms}
                    <span className="smsText">{tarif.sms !== 0 && tarif.smsText}</span> </p>
                    <div className="btn"><button>Купить</button></div>
                    <div className="settings"><a href="https://msk.tele2.ru/nastroy-tariff#sliders">Настроить тариф</a></div>
            </div>

        

        </div>
    )
}
