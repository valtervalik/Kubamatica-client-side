import styled from 'styled-components';

export const AddButton = styled.button`
	border-radius: 50%;
	border: 1px solid azure;
	padding: 1.2rem;
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	background: #000814;
	color: azure;
	transition: transform, 0.3s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: scale(1.07) rotateZ(180deg);
	}
`;
