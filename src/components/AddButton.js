import styled from 'styled-components';

export const AddButton = styled.button`
	border-radius: 50%;
	border: 1px solid azure;
	padding: 1.2rem;
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	background-color: #000814;
	color: azure;
	transition: transform, 0.25s ease-in-out;

	&:hover {
		transform: rotateZ(180deg);
	}
`;
