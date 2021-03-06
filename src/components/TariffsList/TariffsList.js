import React from 'react'
import Tarif from '../Tariffs/Tariffs'



export default function TariffsList() {
    const tarifs=[
        {name:"Везде онлайн",rouming:true,price:500,r:"₽",socialMediaStatus: true,
        socialMediaIcons:
            [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'    
            ],
         hit:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5rJsVH3b41R-wtryBOaXjjbOeSHqtEXVGwgZUcUlmkvi9dmPs',period:"/месяц",internetP:40,gb:" ГБ",unlimP:"+безлимитные",callMinutes:500,callMinutesText:" мин.",unlimMinutes:"+безлимит на Tele2 России",sms:50,smsText:" SMS"},
        {name:"Мой онлайн",rouming:false,price:400,r:"₽",
        socialMediaIcons:[

                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'    
            ],
         socialMediaStatus: true,
         hit:false,period:"/месяц",internetP:15,gb:" ГБ",unlimP:"+безлимитные",callMinutes:500,callMinutesText:" мин.",unlimMinutes:"+безлимит на Tele2 России",sms:0,smsText:" SMS"},  
        {name:"Мой онлайн+",
        socialMediaIcons:[

            'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
            'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
            'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
            'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
            'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
            'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
            'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'    
        ],
        rouming:"Интернет за границей",price:700,r:"₽",socialMediaStatus:true,hit:false,period:"/месяц",internetP:40,gb:" ГБ",unlimP:"+безлимитные",callMinutes:800,callMinutesText:" мин.",unlimMinutes:"+безлимит на Tele2 России",sms:0,smsText:" SMS"},
        {name:"Мой разговор",rouming:false,price:200,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/месяц",internetP:2,gb:" ГБ",unlimP:0,callMinutes:200,callMinutesText:" мин.",unlimMinutes:"+безлимит на Tele2 России",sms:0,smsText:" SMS"},
        {name:"Мой Tele2",rouming:false,price:7,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/день",internetP:5,gb:" ГБ",unlimP:0,callMinutes:0,callMinutesText:" мин",unlimMinutes:"+безлимит на Tele2 России",sms:0,smsText:" SMS"},
        {name:"Безлимит",rouming:false,price:650,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/месяц",internetP:0,gb:" ГБ",unlimP:"БЕЗЛИМИТНЫЙ ИНТЕРНЕТ",callMinutes:500,callMinutesText:" мин",unlimMinutes:"+безлимит на Tele2 России",sms:50,smsText:" SMS"},
        {name:"Премиум",rouming:false,price:1500,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/месяц",internetP:50,gb:" ГБ",unlimP:0,callMinutes:2000,callMinutesText:" мин",unlimMinutes:"+безлимит на Tele2 России",sms:500,smsText:" SMS"},
        {name:"Классический ",fee:"Без абонентской платы",rouming:false,price:0,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/месяц",internetP:0,gb:" ГБ",unlimP:0,callMinutes:0,callMinutesText:" мин",unlimMinutes:0,sms:0,smsText:" SMS"},
        {name:"Интернет для устройств",fee:" Без абонентской платы",rouming:false,price:0,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/месяц",internetP:0,gb:" ГБ",unlimP:0,callMinutes:0,callMinutesText:" мин",unlimMinutes:0,sms:0,smsText:" SMS"},
        {name:"Интернет для вещей",rouming:false,price:300,r:"₽",socialMediaIcons:[], socialMediaStatus: false,hit:false,period:"/месяц",internetP:300,gb:" МБ",unlimP:0,callMinutes:30,callMinutesText:" мин",unlimMinutes:0,sms:100,smsText:" SMS"},
        
    ]
    return (
        <div>

            {tarifs.map(o=><Tarif tarif={o}/>)}
        </div>
    )
}
