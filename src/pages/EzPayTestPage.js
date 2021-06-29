import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';  

function EzPayTestPage(props) {

    const url = "https://payment.ezpay.com.tw/MPG/mpg_gateway"

    const [data, setData] = useState({
        MerchantID: "PG100000008080",
        Version: "1.0",
        TradeInfo: "a65da5d4bd88e3fbadcf41ecf79d5ff9e84e5eccfb2b7736c342cca16f9d72728a8759e02342982d6084fc58658ad69cf4becd9bd6aed0919554c65e89587577cb1d85207ca4d903c83dc013ef299a229a6ab92f1d964ff447ae07f0a693314c1d58669b40919b50ce3e57e47d9ebc9cd4ae4614d2c02e8f29c16f84c44cd98b",
        TradeSha: "CCBE269B7D93ACEFB0C591AD9509A2125CB7539B51A0F76D69D31BDA79357D3D",
        TimeStamp: "1489630207",
        MerchantOrderNo: "20210622",
        Amt: "30",
        ItemDesc: "UnitTest",
    })

    function submit(e){
        e.preventDefault();
        // axios.post(url, {
        //     MerchantID: data.MerchantID,
        //     Version: data.Version,
        //     TradeInfo: data.TradeInfo,
        //     TradeSha: data.TradeSha,
        //     TimeStamp: data.TimeStamp,
        //     MerchantOrderNo: data.MerchantOrderNo,
        //     Amt: parseInt(data.Amt),
        //     ItemDesc: data.ItemDesc,
        // })
        axios.post(url, data)
        .then(
            res=>{
                console.log(res)
            }
        )
        .catch(
            error => { console.log(error)}
        )
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    return (
        <FormStyle onSubmit={(e)=>submit(e)}>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>MerchantID</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='MerchantID' value={data.MerchantID} /></td>
                    </tr>
                    <tr>
                        <td>Version</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='Version' value={data.Version}/></td>
                    </tr>
                    <tr>
                        <td>TradeInfo</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='TradeInfo' value={data.TradeInfo}/></td>
                    </tr>
                    <tr>
                        <td>TradeSha</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='TradeSha' value={data.TradeSha}/></td>
                    </tr>
                    <tr>
                        <td>TimeStamp</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='TimeStamp' value={data.TimeStamp}/></td>
                    </tr>
                    <tr>
                        <td>MerchantOrderNo</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='MerchantOrderNo' value={data.MerchantOrderNo}/></td>
                    </tr>
                    <tr>
                        <td>Amt</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='Amt' value={data.Amt}/></td>
                    </tr>
                    <tr>
                        <td>ItemDesc</td>
                        <td><input onChange={(e)=>handle(e)} type='text' id='ItemDesc' value={data.ItemDesc}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td >
                            <button type='submit'>Submit</button>
                        </td>                
                    </tr>
                </tbody>
               
            </table>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    /* border: 1px solid red; */
    padding-top: 9rem;
    table, tr, td, th{
        padding: 5px;
        text-align: left;
    }
`

export default EzPayTestPage;