import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

import api from "../../services/api";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
	const [filterActivated, setFilterActivated] = useState("all");
	const [tasks, setTasks] = useState([]);
	const [lateCount, setLateCount] = useState();
	
	async function loadTasks() {
		await api
			.get(`/task/filter/${filterActivated}/11:00:11:00:11:00`)
			.then((response) => {
				setTasks(response.data);
				console.log(response.data.id);
			});
	}

	

	function Notification() {
		setFilterActivated("late");
	}

	useEffect(() => {
		loadTasks();
	}, [filterActivated]);

	return (
		<S.Container>
			<Header clickNotification={Notification} />
			<S.FilterArea>
				<button type='button' onClick={() => setFilterActivated("all")}>
					<FilterCard
						title='All'
						activated={filterActivated === "all"}
					/>
				</button>
				<button
					type='button'
					onClick={() => setFilterActivated("today")}>
					<FilterCard
						title='Today'
						activated={filterActivated === "today"}
					/>
				</button>
				<button
					type='button'
					onClick={() => setFilterActivated("week")}>
					<FilterCard
						title='Week'
						activated={filterActivated === "week"}
					/>
				</button>
				<button
					type='button'
					onClick={() => setFilterActivated("month")}>
					<FilterCard
						title='Month'
						activated={filterActivated === "month"}
					/>
				</button>
				<button
					type='button'
					onClick={() => setFilterActivated("year")}>
					<FilterCard
						title='Year'
						activated={filterActivated === "year"}
					/>
				</button>
			</S.FilterArea>

			<S.Title>
				<h3>{filterActivated === "late" ? "LATE TASKS" : "TASKS"}</h3>
			</S.Title>

			<S.Content>
				{tasks.map(task => (
					<Link to={`/task/${task._id}`}>
						<TaskCard
							type={task.type}
							title={task.title}
							when={task.when}
							done={task.done}
						/>
					</Link>
				))}
			</S.Content>
			<Footer />
		</S.Container>
	);
}

export default Home;
