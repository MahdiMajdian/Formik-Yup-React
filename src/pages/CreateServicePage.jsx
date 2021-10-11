import { FieldArray, Form, Formik } from "formik"
import React from "react"
import * as yup from "yup"
import CheckBoxField from "../components/CreateService/CheckBoxField"
import SelectField from "../components/CreateService/SelectField"
import TextField from "../components/CreateService/TextField"
import {
	revisionOptions,
	weekdayOptions,
} from "../components/CreateService/optionDatas"

const CreateServicePage = () => {
	// Validation schema
	const validationSchema = yup.object().shape({
		priceSectionTitle: yup
			.string()
			.required("PriceSectionTitle must be filled"),
		priceSectionSubtitle: yup
			.string()
			.required("PriceSectionSubtitle must be filled"),
		pricePlans: yup.array().of(
			yup.object({
				id: yup.number(),
				planTitle: yup.string().required("PlanTitle must not be empty"),
				description: yup
					.string()
					.required("Description must not be empty"),
				delivaryDays: yup.string().required("Select a delivary day"),
				numberOfRevisions: yup
					.number()
					.min(1, "Selcet a revision number"),
				sourceFile: yup.boolean().required(),
				price: yup.string().required("Price must not be empty"),
			})
		),
	})

	return (
		<div className="grid grid-cols-3 h-screen">
			<div className="col-span-1 py-24 px-4">
				<h1 className="font-bold text-3xl text-gray-800">
					Create service
				</h1>
			</div>
			<div className="col-span-2 py-24 px-4">
				<Formik
					initialValues={{
						priceSectionTitle: "",
						priceSectionSubtitle: "",
						pricePlans: [
							{
								id: Date.now(),
								planTitle: "",
								description: "",
								delivaryDays: "",
								numberOfRevisions: 0,
								sourceFile: false,
								price: "",
							},
						],
					}}
					validationSchema={validationSchema}
					onSubmit={(data, { setSubmitting }) => {
						setSubmitting(true)
						//async stuff goes here
						console.log("submit: ", data)
						alert("checkout your console")
						setSubmitting(false)
					}}>
					{({ values, errors, isSubmitting }) => (
						<Form>
							{/* Top static form */}
							<TextField
								type="text"
								name="priceSectionTitle"
								placeholder="Price section title"
								className="mb-3"
							/>
							<TextField
								type="text"
								name="priceSectionSubtitle"
								placeholder="Price section subtitle"
							/>
							<p className="text-gray-400 text-lg mb-20">
								You can create up to 3 price plan in this
								section.
							</p>

							{/* List of Price plan forms and its add funtionality */}
							<FieldArray name="pricePlans">
								{(arrayHelpers) => (
									<div className="grid grid-cols-2">
										{/* mapping over forms to print out */}
										{values.pricePlans.map(
											(plan, index) => {
												return (
													<div
														key={plan.id}
														className=" rounded mr-4 mb-4 relative flex flex-col gap-5">
														<TextField
															type="text"
															name={`pricePlans[${index}].planTitle`}
															placeholder="Plan title"
														/>
														<TextField
															type="text"
															name={`pricePlans[${index}].description`}
															placeholder="Description"
														/>

														<SelectField
															type="select"
															name={`pricePlans[${index}].delivaryDays`}
															placeholder="Delivary Days"
															options={
																weekdayOptions
															}
														/>
														<SelectField
															type="select"
															name={`pricePlans[${index}].numberOfRevisions`}
															placeholder="Number of revisions"
															options={
																revisionOptions
															}
														/>

														<CheckBoxField
															type="checkbox"
															label="Source file"
															name={`pricePlans[${index}].sourceFile`}
														/>

														<TextField
															type="text"
															name={`pricePlans[${index}].price`}
															placeholder="price"
															tag="KD"
														/>
														<button
															onClick={() =>
																arrayHelpers.remove(
																	index
																)
															}
															className="absolute transform rotate-45 top-0 right-0 font-bold text-3xl w-6 h-6">
															+
														</button>
													</div>
												)
											}
										)}
										{/* Button to add another price plan form */}
										{/* your form must be error free in order to add a new one, max forms:3 */}
										<div
											onClick={() =>
												errors &&
												Object.keys(errors).length ===
													0 &&
												values.pricePlans.length < 3 &&
												arrayHelpers.push({
													id: Date.now(),
													planTitle: "",
													description: "",
													delivaryDays: "",
													numberOfRevisions: 10,
													sourceFile: false,
													price: "",
												})
											}
											className="bg-gray-100 h-96 text-gray-600 border rounded flex justify-center items-center text-2xl font-semibold">
											+ Add Price Plan
										</div>
									</div>
								)}
							</FieldArray>
							<button
								type="submit"
								className="uppercase bg-blue-400 text-white px-7 py-2 rounded hover:bg-blue-500">
								Save and next
							</button>

							{/* print form data and errors for some nerve breaking debuging session */}
							{/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
							{/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default CreateServicePage
