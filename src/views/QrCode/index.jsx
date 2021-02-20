import React, { useState, useEffect } from "react";
import * as S from "./style";
import Qr from 'qrcode.react';
//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";



function QrCode() {
    const [lateCount, setLateCount] = useState();
	return (
		<S.Container>
			<Header lateCount={lateCount} clickNotification={Notification}/>
        	<S.Content>
               <h1>CAPTURE THE QRCODE</h1>
               <p>Your tasks will be synchronized with your mobile app</p>
               <S.QrCodeArea>
                   <Qr value='getmacaddress' size={300}/>
               </S.QrCodeArea>

               <S.ValidateCode>
                   <span>Type the number showed in your smartphone</span>
                   <input type="text"/>
                   <button type='button'>SYNCHRONIZE</button>
               </S.ValidateCode>

            </S.Content>
			<Footer />
		</S.Container>
	);
}

export default QrCode;
