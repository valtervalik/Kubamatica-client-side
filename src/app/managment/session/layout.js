const SessionLayout = ({ children }) => {
	return (
		<div
			style={{
				background: 'linear-gradient(45deg, #0066cc, darkblue, #000814)',
				minHeight: '100%',
			}}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 320'>
				<path
					fill='white'
					fillOpacity='2'
					d='M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,213.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
			</svg>
			<figure id='logoBox'></figure>
			{children}
		</div>
	);
};

export default SessionLayout;
