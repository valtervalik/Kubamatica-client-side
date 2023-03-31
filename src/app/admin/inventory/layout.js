import NavTabs from '@/components/NavTabs';
import SearchInput from '@/components/SearchInput';

const Inventory = ({ children }) => {
	return (
		<div>
			<NavTabs id='navtabs' />
			<SearchInput />
			{children}
		</div>
	);
};

export default Inventory;
