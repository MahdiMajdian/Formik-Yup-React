import "./App.css"
import SignUp from "./components/SignUp"

function App() {
	return (
		<div className=" grid grid-cols-12 h-screen">
			<div className="col-span-5 ">
				<SignUp />
			</div>
			<div className="col-span-7 bg-gray-200 flex items-center justify-center">
				SOME IMAGES
			</div>
		</div>
	)
}

export default App
