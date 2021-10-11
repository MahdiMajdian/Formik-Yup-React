import React from "react"
import { useField } from "formik"

const TextField = ({ placeholder, tag, className, ...props }) => {
	const [field, meta] = useField(props)
	const errorMessage = meta.error && meta.touched ? meta.error : ""
	return (
		<div className={className}>
			<div className="w-full flex bg-gray-100 p-5 rounded">
				<input
					type="text"
					className="w-full font-medium bg-transparent border-none outline-none"
					{...field}
					placeholder={placeholder}
				/>
				<small className="inline font-bold">{tag}</small>
			</div>

			{/* error message */}
			<small className="font-medium text-red-500">{errorMessage}</small>

			{/* a placeholder to keep integrity of the form layout  */}
			{(!meta.touched || !meta.error) && (
				<small className="font-medium text-white">
					nothing to snife here buddy :))
				</small>
			)}
		</div>
	)
}

export default TextField
