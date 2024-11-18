import './App.css';
import { useState } from 'react';
// import Challeng from './components/challenge/Challeng';
// import FlashCard from './components/Excercise6/FlashCard';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
function App() {
	const [items, setItems] = useState([]);

	const handelAddItems = (item) => {
		setItems((items) => [...items, item]);
	};

	const handleDeleteItem = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const handleClearList = () => {
		const confirmed = window.confirm(
			'Are you sure you want to delete all items?'
		);

		if (confirmed) setItems([]);
	};

	const handleToggleItem = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handelAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
			{/* <FlashCard /> */}
			{/* <Challeng />*/}
		</div>
	);
}

export default App;
