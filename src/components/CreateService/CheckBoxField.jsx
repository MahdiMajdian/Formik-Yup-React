import React from "react"
import { useField } from "formik"

const CheckBoxField = ({ label, className, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<div className={className}>
			<div className={`w-full flex items-center bg-gray-100 p-5 rounded`}>
				<label
					htmlFor={field.name}
					className="font-medium text-gray-400 w-full">
					{label}
				</label>
				<input className="w-5 h-5" type="checkbox" {...field} />
			</div>

			{/* error message */}
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

export default CheckBoxField
