import Emailupdate from "./profile/emailupdate";
import Avatarupdate from "./profile/avatarupdate";
import Coverupdate from "./profile/coverupdate";

const Profile = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   avatar: null,
  //   coverImage: null,
  // });

  // console.log(formData);

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: files ? files[0] : value,
  //   }));
  // };

  // const handleUpdate = (e) =>{
  //   e.preventDefault()
  //   try {

  //   } catch (error) {
  //      console.log(error)
  //   }
  // }
  return (
    <div className="flex flex-col items-center gap-3 my-4">
      <Emailupdate></Emailupdate>
      <Avatarupdate></Avatarupdate>
      <Coverupdate></Coverupdate>
    </div>
  );
};

export default Profile;
