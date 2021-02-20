import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

import api from "../../services/api";

function Header({ clickNotification }) {
	const [lateCount, setLateCount] = useState();
	async function lateVerify() {
		await api
			.get(`/task/filter/late/11:00:11:00:11:00`)
			.then((response) => {
				setLateCount(response.data.length);
			});
	}

	useEffect(() => {
		lateVerify();
	})

	return (
		<S.Container>
			<S.LeftSide>
				<img src={logo} alt='Logo' />
			</S.LeftSide>
			<S.RightSide>
				<Link to='/'> HOME </Link> <span className='divide' />
				<Link to='/task'> NEW TASK </Link> <span className='divide' />
				<Link to='/qrcode'> MOBILE SYNC </Link>
				{
					lateCount &&
					<>
						<span className='divide' />
						<button onClick={clickNotification} id='notification'>
							<img src={bell} alt='Notification' />
							<span>{lateCount}</span>
						</button>
					</>
				}
			</S.RightSide>
		</S.Container>
		
	);
}

export default Header;
