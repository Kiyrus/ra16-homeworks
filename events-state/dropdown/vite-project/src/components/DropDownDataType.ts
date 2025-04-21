export type ListItem = {
	id: string | number;
	label: string;
};

export type DropdownData = {
	title: string;
	list: ListItem[];
}