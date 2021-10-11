import React from "react"
import Select from "react-select"
import { useField } from "formik"

const SelectField = ({ options, placeholder, styles, className, ...props }) => {
	const [field, meta, helpers] = useField(props)
	const { setValue, setTouched, setError } = helpers

	// style object for react-select
	const customStyles = {
		menu: (provided, state) => ({
			...provided,
			color: "#555",
			fontWeight: "500",
		}),

		control: (styles) => ({
			...styles,
			backgroundColor: "rgba(243, 244, 246)",
			padding: 14,
			fontWeight: 500,
			border: "none",
		}),
	}

	// select change handler function
	const setFieldProps = (selectedOption) => {
		setValue(selectedOption.value)
		setTouched(true)
		setError(undefined)
	}

	return (
		<div className={className}>
			<Select
				onChange={(selectedOption) => setFieldProps(selectedOption)}
				options={options}
				styles={customStyles}
				placeholder={placeholder}
			/>
			<small className="font-medium text-red-500">
				{meta.touched && meta.error}
			</small>

			{/* a placeholder to keep integrity of the form layout  */}
			{(!meta.touched || !meta.error) && (
				<small className="font-medium text-white">
					nothing to snife here buddy :))
				</small>
			)}
		</div>
	)
}

export default SelectField
