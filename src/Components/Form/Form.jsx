import { useState, useEffect } from 'react'
import '../Form/Form.css'
import Modal from '../Modal/Modal'

function Form() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [active, setActive] = useState(false)
	const [errorEmail, setErrorEmail] = useState('Должен быть не пустым')
	const [click, setClick] = useState([])
	const [errorModal, setErrorModal] = useState('')

	function formEmail(el) {
		setEmail(el.target.value)
		if (click == el.target.value) {
			setErrorModal('Уже есть Такой Аккаунт')
		} else {
			setErrorModal('Успешная регистрация')
		}
	}
	function formPassword(el) {
		setPassword(el.target.value)
	}
	function handle() {
		setActive(true)
		setClick(email, password)
		setPassword('')
		setEmail('')
	}
	useEffect(() => {
		fetch('https://exam-e3318-default-rtdb.firebaseio.com/guljigit.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(click),
		})
	}, [click])

	const dataOfUsers = []

	useEffect(() => {
		fetch('https://exam-e3318-default-rtdb.firebaseio.com/guljigit.json')
			.then((res) => res.json())
			.then((data) => {
				for (const i in data) {
					dataOfUsers.push(data[i])
				}
				setClick(dataOfUsers)
			})
	}, [])

	return (
		<div className='Form'>
			<h1>Sign in</h1>
			<input type='email' onChange={formEmail} value={email} />
			<span className={{ color: 'red' }}>
				{email == email.length ? errorEmail : '✔'}
			</span>
			<input type='password' onChange={formPassword} value={password} />
			<button onClick={handle}>Next</button>
			<Modal
				errorModal={errorModal}
				active={active}
				setActive={setActive}
			/>
		</div>
	)
}
export default Form
