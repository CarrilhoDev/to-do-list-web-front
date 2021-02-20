import React, { useState, useEffect } from "react";
import { Redirect} from 'react-router-dom'
import * as S from "./style";
import { format } from 'date-fns';

import api from "../../services/api";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from "../../utils/typeIcons";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

function Task({match}) {
	const [redirect, setRedirect] = useState(false);
	const [type, setType] = useState();
	const [title, setTitle] = useState();
	const [id, setId] = useState();
	const [done, setDone] = useState(false);
	const [description, setDescription] = useState();
	const [date, setDate] = useState();
	const [hour, setHour] = useState();
	const [macaddress, setMacaddress] = useState('11:00:11:00:11:00');

	
	async function LoadTaskDetails() {
		await api.get(`/task/${match.params.id}`).then(response => {
			setType(response.data.type)
			setDone(response.data.done)
			setTitle(response.data.title)
			setDescription(response.data.description)
			setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
			setHour(format(new Date(response.data.when), 'HH:mm'))
		}) 
	}

	async function Save(){
		//Validation

		if(!title){
			return alert("You need to provide a task title")
		} else if(!description){
			return alert("You need to provide a task description")
		} else if(!type){
			return alert("You need to choose a task type")
		}else if(!date){
			return alert("You need to provide a date for your task")
		}else if(!hour){
			return alert("You need to inform a task hour")
		} 
		else if(match.params.id){
			await api.put(`/task/${match.params.id}`, {
				macaddress,
				done,
				type,
				title,
				description,
				when: `${date}T${hour}:00.000`
			}).then(() => {
				setRedirect(true)
			})

		} else{
			await api.post('/task', {
				macaddress,
				type,
				title,
				description,
				when: `${date}T${hour}:00Z`
			}).then(() => {
				alert('TASK ADDED successfully')
			})
		}
		
	}

	async function Remove(){
		const res = window.confirm('Do you really want to remove the task?')
		if(res === true){
			alert('ok, removed!')
			await api.delete(`/task/${match.params.id}`)
			.then(() => setRedirect(true))
			
		} else{
			alert('no problem, task was kept!')
		}
	}

	useEffect(() => {
		LoadTaskDetails();
	}, []);

	return (
		<S.Container>
			{ redirect && <Redirect to="/"/> }
			<Header />

			<S.Form>
				<S.TypeIcons>
					{TypeIcons.map(
						(icon, index) =>
							index > 0 && (
								<button
									type='button'
									onClick={() => setType(index)}>
									<img
										src={icon}
										alt='Task Type'
										className={
											type && type !== index && "inactive"
										}
									/>
								</button>
							)
					)}
				</S.TypeIcons>

				<S.Input>
					<span>Title</span>
					<input type='text' placeholder='Task Title' onChange={e => setTitle(e.target.value)} value={title}/>
				</S.Input>

				<S.Textarea>
					<span>Description</span>
					<textarea rows={5} placeholder='Task details' onChange={e => setDescription(e.target.value)} value={description}/>
				</S.Textarea>

				<S.Input>
					<span>Date</span>
					<input type='date' onChange={e => setDate(e.target.value)} value={date}/>
					<img src={iconCalendar} alt='Calendar' />
				</S.Input>

				<S.Input>
					<span>Hour</span>
					<input type='time' onChange={e => setHour(e.target.value)} value={hour}/>
					<img src={iconClock} alt='Clock' />
				</S.Input>

				<S.Options>
					<div>
						<input type='checkbox' checked={done} onChange={e => setDone(!done)} />
						<span>DONE</span>
					</div>
					{ match.params.id && <button type='button' onClick={Remove}>DELETE</button> }
				</S.Options>

                <S.Save>
                    <button type='button' onClick={Save}> SAVE</button>
                </S.Save>
			</S.Form>
			<Footer />
		</S.Container>
	);
}

export default Task;
