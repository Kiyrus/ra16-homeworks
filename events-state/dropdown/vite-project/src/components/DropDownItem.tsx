import { useState, useRef, useEffect } from "react";
import { DropdownData, ListItem } from "./DropDownDataType.ts";

export const DropDownItem = ({ data }: { data: DropdownData }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current &&
					!dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const optionSelect = (item: ListItem) => {
		console.log(item)
		setIsOpen(false);
	};

	return (
			<div className="container" ref={dropdownRef}>
				<button
						id="dropdown-button"
						onClick={() => setIsOpen(!isOpen)}
						aria-haspopup="listbox"
						aria-expanded={isOpen}
				>
					{data.title}
				</button>

				{isOpen && (
						<ul
								id="dropdown-list"
								role="listbox"
								aria-labelledby="dropdown-button"
								tabIndex={-1}
						>
							{data.list.map((item) => {
								const key = typeof item === "string" ? item : item.id;
								const label = typeof item === "string" ? item : item.label;

								return (
										<li
												role="option"
												key={key}
												onClick={() => optionSelect(item)}
												className="dropdown-option"
										>
											{label}
										</li>
								);
							})}
						</ul>
				)}
			</div>
	);
};