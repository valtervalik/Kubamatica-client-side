import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button } from '@mui/material';

export default function DateFilter({ month, year, setMonth, setYear }) {
	const months = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];

	const handleMonthChange = (change) => {
		let newMonth = month + change;
		if (newMonth < 0) {
			newMonth = 11;
			setYear(year - 1);
		} else if (newMonth > 11) {
			newMonth = 0;
			setYear(year + 1);
		}
		setMonth(newMonth);
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Button onClick={() => handleMonthChange(-1)}>
				<ArrowLeftIcon />
			</Button>
			<p
				style={{
					fontSize: '20px',
					fontWeight: 'bold',
					color: '#0010cc',
					margin: '2px 10px',
				}}>
				{months[month]}{' '}
				<Button onClick={() => handleMonthChange(1)}>
					<ArrowRightIcon />
				</Button>
			</p>
			<p
				style={{
					fontSize: '20px',
					fontWeight: 'bold',
					color: '#0010cc',
					margin: '2px 10px',
				}}
				className='d-flex align-items-center'>
				<span className='pb-2'>{year} </span>
				<span className='d-flex flex-column-reverse'>
					<Button style={{ height: '20px' }} onClick={() => setYear(year - 1)}>
						<ArrowDropDownIcon />
					</Button>
					<Button style={{ height: '20px' }} onClick={() => setYear(year + 1)}>
						<ArrowDropUpIcon />
					</Button>
				</span>
			</p>
		</div>
	);
}
