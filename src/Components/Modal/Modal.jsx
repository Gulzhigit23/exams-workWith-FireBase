import '../../Components/Modal/Modal.css'
function Modal({ setActive, active, errorModal }) {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}
			>
				<h3>{errorModal}</h3>
			</div>
		</div>
	)
}
export default Modal
