import { useSelector } from "react-redux"
import { RootState } from "../redux-work/reducers"

const HomePage = () => {
  const {user} = useSelector((state : RootState) => state.user)
  return (
    <div className="flex flex-col space-y-4 m-10">
      <div className="whitespace-nowrap text-3xl font-semibold text-gray-800 text-center">
        Welcome {user.firstName} {user.lastName}
      </div>
      <div className="text-xl font-bold">Dashbaord</div>
      <div className="text-xl font-bold">Section 1</div>
      <div className="text-xl font-bold">Section 2</div>
      <div className="text-xl font-bold">Section 3</div>
    </div>
  )
}

export default HomePage